<template>
  <div class="subclass">
    <div class="container">
      <SidebarMapelComponentVue @sendData="getData($event)" />
      <span class="open" id="open" onclick="openNav()">&#9776;</span>
      <div class="content" id="main">
        <div v-if="list_mapel.sub_mapel_id">
          <div class="title">
            <h4>{{ list_mapel.list_mapel_name }}</h4>
          </div>
          <div class="video">
            <!-- <iframe width="100" height="500" :src="list.list_mapel_link" title="YouTube video player" frameborder="0" -->
            <!-- 2KBFD0aoZy8 ganti dengan variable -->
            <iframe width="800" height="400" :src="'https://www.youtube.com/embed/' + list_mapel.list_mapel_link"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="text-deskripsi">
            <p>{{ list_mapel.list_mapel_desc }}</p>
          </div>
        </div>
        <div v-else-if="list_mapel.quiz">
          <QuizChapter :list_mapel="list_mapel" />
        </div>
        <div class="btn-container">
          <button class="btn" @click="back()" v-if="list > 1">Back</button>
          <button class="btn" @click="updateAccessMapel()" v-if="list != list_mapels.length"
            :class="{ 'disabled': check_quiz }">Next</button>
          <button class="btn" v-else><a href="/dashboard">Finish</a></button>
        </div>
      </div>
    </div>
  </div>
  <component :is="'script'">
    function openNav() {
    document.getElementById("mySide").style.width = "281px";
    }

    function closeNav() {
    document.getElementById("mySide").style.width = "0";
    }
  </component>
</template>

<script>
// @ is an alias to /src
import SidebarMapelComponentVue from './components/SidebarMapelComponent.vue';
import QuizChapter from './QuizView.vue';
import router from '@/router';
import axios from 'axios';

export default {
  name: 'ClassMapel',
  components: {
    SidebarMapelComponentVue,
    QuizChapter,
  },
  data() {
    return {
      id: this.$route.params.id,
      list: this.$route.params.list,
      list_mapels: [],
      list_mapel: [],
      access: [],
      score: [],
      check_quiz: false,
    }
  },
  watch: {
    list_mapels() {
      if (this.list == 0) {
        this.list_mapel = this.list_mapels[this.access[0].last_access - 1];
        this.list = this.list_mapels.findIndex(list => list.list_mapel_id == this.list_mapel.list_mapel_id) + 1;
      } else {
        this.list_mapel = this.list_mapels[this.list - 1];
        if (this.list_mapel.quiz) {
          this.getScore();
        } else {
          this.check_quiz = false;
        }
      }
    },
    $route(to) {
      this.list = to.params.list;
      this.list_mapel = this.list_mapels[this.list - 1];
      if (this.list_mapel.quiz) {
        this.getScore();
      } else {
        this.check_quiz = false;
      }
    }
  },
  methods: {
    getData(data) {
      this.list_mapels = data[0];
      this.access = data[1];
    },

    async back() {
      const route = this.$route.params;
      this.list--;
      return await router.push(`/${route.id}/mapel/${route.mapel_id}/${route.mapel_slug}/${this.list}`)
    },

    async getScore() {
      await axios.get('/api/score')
        .then(response => response.data)
        .then(datas => {
          this.score = datas.data.filter(score => score.id == this.id && score.sub_mapel_id == this.list_mapel.quiz[0].sub_mapel_id);

        })
    },

    async updateAccessMapel() {
      const addLast = parseInt(this.access[0].last_access) + 1;
      const dataUpdate = {
        last_access: addLast,
      };
      const listOfLastAccess = this.list_mapels[this.access[0].last_access - 1].list_mapel_id;
      if ((this.list_mapels.findIndex(list => list.list_mapel_id == listOfLastAccess) + 1) == this.list) {
        await axios.post('/api/access_mapel/edit/' + this.access[0].access_mapel_id, dataUpdate);
      }
      const route = this.$route.params;
      this.list++;
      return await router.push(`/${route.id}/mapel/${route.mapel_id}/${route.mapel_slug}/${this.list}`)
    },
  },
}
</script>

<style scoped>
h4 {
  font-size: 36px;
  font-weight: 500;
  color: #404040;
}

.subclass {
  margin: 0;
  font-family: 'Poppins';
  overflow: auto;
}

.container {
  display: flex;
}

#main {
  transition: margin-left .5s;
  margin: 60px;
}

.open {
  position: fixed;
  top: 120px;
  font-family: 'Poppins';
  font-size: 28px;
  font-weight: 500;
  color: white;
  border-radius: 0 100px 100px 0;
  background: #E45F03;
  padding: 8px 13px 10px 13px;
}

.content {
  margin-top: 50px;
}

.video {
  margin-top: 6px;
  margin-bottom: 40px;
}

.text-deskripsi {
  padding-right: 20px;
  font-size: 18px;
  font-weight: 400;
  color: black;
  margin-bottom: 15px;
}

.btn-container {
  width: 100%;
  display: block;
  text-align: right;
}

.btn {
  width: 90px;
  height: 60px;
  background-color: #E45F03;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  margin-right: 30px;
  cursor: pointer;
}

.btn a {
  color: white;
  text-decoration-line: none;
}

.disabled {
  pointer-events: none;
  background-color: slategray;
}

@media screen and (max-width : 800px) {
  .content {
    width: 100%;
    padding-right: 20px;
  }

  .video iframe {
    width: 100%;
  }

  .text-deskripsi p {
    width: 100%;
  }
}
</style>
