<template>
  <div class="subclass" v-if="sub_mapel">
    <div class="container">
      <SidebarMapelComponentVue @sendSubMapel="getSubMapel($event)" />
      <div class="content" v-for="list_mapel in list_mapels" v-bind:key="list_mapel.list_mapel_id">
        <div class="title">
          <h4>{{ list_mapel.list_mapel_name }}</h4>
        </div>
        <div class="video">
          <iframe width="100" height="500" :src="list_mapels.list_mapel_link" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="text-deskripsi">
          <p>{{ list_mapel.list_mapel_desc }}</p>
        </div>
        <button class="btn" @click="updateAccessMapel()"
          v-if="this.$route.params.list_id != list_mapel_cache.pop().list_mapel_id">Next</button>
      </div>
    </div>
  </div>
  <div v-else>{{ messages }}</div>
</template>

<script>
// @ is an alias to /src
import SidebarMapelComponentVue from '@/components/SidebarMapelComponent.vue';
import CONFIG from '@/global/config';

export default {
  name: 'ClassMapel',
  components: {
    SidebarMapelComponentVue
  },
  data() {
    return {
      id: this.$route.params.id,
      list_id: 0,
      messages: '',
      sub_mapel: [],
      list_mapel_cache: [],
      list_mapels: [],
      access: [],
    }
  },
  watch: {
    $route(to) {
      this.list_id = to.params.list_id;
      this.getListMapel();
    }
  },
  async mounted() {
    await this.getAccessMapel();
    this.getDataListMapel();
    await this.getListMapel();
  },
  methods: {
    getSubMapel(sub_mapel) {
      this.sub_mapel = sub_mapel;
    },

    async getAccessMapel() {
      const responseAccess = await fetch(CONFIG.BASE_URL + '/access_mapel/show_by_user/' + this.id, {
        headers: { 'content-Type': 'Application/json' },
      });
      const jsonAccess = await responseAccess.json();
      this.messages = jsonAccess.meta.message;
      this.access = jsonAccess.data;
    },

    getDataListMapel() {
      for (const key in this.sub_mapel) {
        if (Object.hasOwnProperty.call(this.sub_mapel, key)) {
          const element = this.sub_mapel[key];
          for (const i in element.list_mapel) {
            if (Object.hasOwnProperty.call(element.list_mapel, i)) {
              const element2 = element.list_mapel[i];
              this.list_mapel_cache.push(element2);
            }
          }
        }
      }
      if (this.access[0].last_access <= this.list_mapel_cache.length) {
        this.list_id = this.list_mapel_cache[this.access[0].last_access - 1].list_mapel_id;
      } else {
        this.list_id = this.list_mapel_cache[0].list_mapel_id;
      }
    },

    async getListMapel() {
      const response = await fetch(CONFIG.BASE_URL + '/list_mapel/show/' + this.list_id, {
        headers: { 'content-Type': 'Application/json' },
      });
      const json = await response.json();
      this.messages = json.meta.message;
      this.list_mapels = json.data;
    },

    async updateAccessMapel() {
      const addLast = this.access[0].last_access + 1;
      const dataUpdate = {
        last_access: addLast,
      };
      await fetch(CONFIG.BASE_URL + '/access_mapel/edit/' + this.access[0].access_mapel_id, {
        headers: { 'content-Type': 'Application/json' },
        method: 'POST',
        body: JSON.stringify(dataUpdate),
      });
      await this.getAccessMapel();
      this.list_id = this.list_mapel_cache[this.access[0].last_access - 1].list_mapel_id;
      await this.getListMapel();
    }
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

.btn {
  width: 90px;
  height: 60px;
  background-color: #e45f03;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 1000px;
}
</style>
