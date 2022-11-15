<template>
  <div class="subclassone">
    <div class="container">
      <SidebarMapelComponentVue />
      <div class="content" v-for="list_mapel in list_mapels" v-bind:key="list_mapel.list_mapel_id">
        <div class="title">
          <h4>{{ list_mapel.list_mapel_name }}</h4>
        </div>
        <div class="video">
          <iframe width="1000" height="500" :src="list_mapels.list_mapel_link" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="text-deskripsi">
          <p>{{ list_mapel.list_mapel_desc }}</p>
        </div>
        <button class="btn">Next</button>
      </div>
    </div>
  </div>
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
      list_id: '',
      messages: '',
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
  mounted() {
    this.getAccessMapel();
    console.log();
  },
  methods: {
    async getAccessMapel() {
      const responseAccess = await fetch(CONFIG.BASE_URL + '/access_mapel/show_by_user/' + this.id, {
        headers: { 'content-Type': 'Application/json' },
      });
      const jsonAccess = await responseAccess.json();
      this.messages = jsonAccess.meta.message;
      this.access = jsonAccess.data;
      this.list_id = this.access[0].last_access;

      this.getListMapel();
    },
    async getListMapel() {
      try {
        const response = await fetch(CONFIG.BASE_URL + '/list_mapel/show/' + this.list_id, {
          headers: { 'content-Type': 'Application/json' },
        });
        const json = await response.json();
        this.messages = json.meta.message;
        this.list_mapels = json.data;
      } catch (e) {
        console.log(e);
      }
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

.subclassone {
  font-family: 'Poppins';
  height: max-content;
  overflow: auto;
}

.container {
  display: flex;
}


.content {
  width: 1160px;
  margin-left: 70px;
  margin-top: 50px;
}

.video {
  margin-top: 6px;
  margin-bottom: 40px;
}

.text-deskripsi {
  width: 1000px;
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
