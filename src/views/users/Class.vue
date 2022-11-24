<template>
  <div class="subclass">
    <div class="container">
      <SidebarMapelComponentVue @sendData="getData($event)" />
      <div v-if="list_mapel">
        <div class="content" v-for="list in list_mapel" :key="list.list_mapel_id">
          <div class="title">
            <h4>{{ list.list_mapel_name }}</h4>
          </div>
          <div class="video">
            <iframe width="100" height="500" :src="list.list_mapel_link" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="text-deskripsi">
            <p>{{ list.list_mapel_desc }}</p>
          </div>
          <div class="btn-container">
            <button class="btn" @click="updateAccessMapel()"
              v-if="list.list_mapel_id != list_mapels.slice(-1)[0].list_mapel_id">Next</button>
            <button class="btn" v-else><a href="#/dashboard">Finish</a></button>
          </div>
        </div>
      </div>
      <div v-else>{{ messages }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarMapelComponentVue from './components/SidebarMapelComponent.vue';
import CONFIG from '@/global/config';

export default {
  name: 'ClassMapel',
  components: {
    SidebarMapelComponentVue,
  },
  data() {
    return {
      id: this.$route.params.id,
      list_id: 0,
      messages: '',
      list_mapels: [],
      list_mapel: [],
      access: [],
    }
  },
  watch: {
    list_mapels() {
      const list_mapel = this.list_mapels[this.access[0].last_access - 1];
      this.list_mapel = Array(list_mapel);
      this.list_id = list_mapel.list_mapel_id;
    },
    $route(to) {
      this.list_id = to.params.list_id;
      this.list_mapel = this.list_mapels.filter(list => list.list_mapel_id == this.list_id);
    }
  },
  methods: {
    getData(data) {
      this.list_mapels = data[0];
      this.access = data[1];
    },
    async updateAccessMapel() {
      const addLast = this.access[0].last_access + 1;
      const dataUpdate = {
        last_access: addLast,
      };
      if (this.list_mapels[this.access[0].last_access - 1].list_mapel_id == this.list_id) {
        await fetch(CONFIG.BASE_URL + '/access_mapel/edit/' + this.access[0].access_mapel_id, {
          headers: { 'content-Type': 'Application/json' },
          method: 'POST',
          body: JSON.stringify(dataUpdate),
        });
        return console.log('berhasil');
      }
      return console.log('gagal');
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
  margin-left: 70px;
  margin-top: 50px;
}

.video {
  margin-top: 6px;
  margin-bottom: 40px;
}

.text-deskripsi {
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
  background-color: #e45f03;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  margin-right: 50px;
}

.btn a {
  color: white;
  text-decoration-line: none;
}
</style>
