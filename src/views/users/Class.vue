<template>
  <div class="subclass">
    <div class="container">
      <SidebarMapelComponentVue @sendData="getData($event)" />
      <div class="content">
        <div v-if="list_mapel.sub_mapel_id">
          <div class="title">
            <h4>{{ list_mapel.list_mapel_name }}</h4>
          </div>
          <div class="video">
            <!-- <iframe width="100" height="500" :src="list.list_mapel_link" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe> -->
          </div>
          <div class="text-deskripsi">
            <p>{{ list_mapel.list_mapel_desc }}</p>
          </div>
        </div>
        <div v-else>
          <QuizChapter :list_mapel="list_mapel" />
        </div>
        <div class="btn-container">
          <button class="btn" @click="back()" v-if="list > 1">Back</button>
          <button class="btn" @click="updateAccessMapel()" v-if="list != list_mapels.length">Next</button>
          <button class="btn" v-else><a href="#/dashboard">Finish</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarMapelComponentVue from './components/SidebarMapelComponent.vue';
import QuizChapter from './QuizView.vue';
import CONFIG from '@/global/config';
import router from '@/router';

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
    }
  },
  watch: {
    list_mapels() {
      if (this.list == 0) {
        this.list_mapel = this.list_mapels[this.access[0].last_access - 1];
        this.list = this.list_mapels.findIndex(list => list.list_mapel_id == this.list_mapel.list_mapel_id) + 1;
      } else {
        this.list_mapel = this.list_mapels[this.list - 1];
      }
    },
    $route(to) {
      this.list = to.params.list;
      this.list_mapel = this.list_mapels[this.list - 1];
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
    async updateAccessMapel() {
      const addLast = this.access[0].last_access + 1;
      const dataUpdate = {
        last_access: addLast,
      };
      const listOfLastAccess = this.list_mapels[this.access[0].last_access - 1].list_mapel_id;
      if ((this.list_mapels.findIndex(list => list.list_mapel_id == listOfLastAccess) + 1) == this.list) {
        await fetch(CONFIG.BASE_URL + '/access_mapel/edit/' + this.access[0].access_mapel_id, {
          headers: { 'content-Type': 'Application/json' },
          method: 'POST',
          body: JSON.stringify(dataUpdate),
        });
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
  width: auto;
  font-size: 36px;
  font-weight: 500;
  color: #404040;
}

.subclass {
  font-family: 'Poppins';
  height: max-content;
  overflow: auto;
}

.container {
  display: flex;
}

.content {
  width: 100%;
  max-width: 800px;
  margin-top: 50px;
  margin-left: 70px;
  margin-right: 70px;
}

.video {
  margin-top: 6px;
  margin-bottom: 40px;
}

.text-deskripsi {
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: black;
  margin-bottom: 15px;
  text-align: justify;
}

.btn-container {
  width: 100%;
  display: block;
  text-align: right;
}

.btn {
  width: 90px;
  height: 60px;
  background-color: #e45f03;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  margin-right: 50px;
  cursor: pointer;
}

.btn a {
  color: white;
  text-decoration-line: none;
}
</style>
