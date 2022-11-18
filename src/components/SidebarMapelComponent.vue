<template>
  <aside class="sidebar">
    <div class="kembali">
      <a href="#/dashboard">
        <img src="/images/akar-icons_arrow-left.png" alt="" />
        Kembali
      </a>
    </div>
    <div class="bab">
      <ul v-for="sub_mapel in mapel.sub_mapel" v-bind:key="sub_mapel.sub_mapel_id">
        <!-- <ul> -->
        <li>
          <a v-on:click="sub_mapel.show = !sub_mapel.show" class="active">
            ☰ {{ sub_mapel.sub_mapel_name }}
          </a>
        </li>
        <transition name="fade">
          <div v-if="sub_mapel.show">
            <li v-for="list_mapel in sub_mapel.list_mapel" :key="list_mapel.list_mapel_id">
              <a :href="'#/' + id + '/mapel/' + mapel.mapel_id + '/' + mapel.mapel_slug + '/' + list_mapel.list_mapel_id"
                :class="{ 'disabled': list_mapel.list_mapel_id != this.list_mapel_cache[this.access[0].last_access - 1].list_mapel_id }">
                {{ list_mapel.list_mapel_name }}
              </a>
            </li>
          </div>
        </transition>
      </ul>
    </div>
  </aside>
</template>

<script>
// import CONFIG from '@/global/config';

import CONFIG from '@/global/config';

export default {
  name: 'SidebarMapelComponent',
  data() {
    return {
      id: this.$route.params.id,
      mapel: [],
      list_id: 0,
      messages: '',
      list_mapels: [],
      list_mapel_cache: [],
      access: [],
    };
  },
  watch: {
    $route(to) {
      this.list_id = to.params.list_id;
      this.getListMapel();
      console.log(this.list_mapel_cache[this.access[0].last_access - 1].list_mapel_id);
    }
  },
  async mounted() {
    this.getMapel();
  },
  methods: {
    async getMapel() {
      const response = await fetch(CONFIG.BASE_URL + '/mapel/show/' + this.$route.params.mapel_id, { // Id masih static NeedFix
        headers: { 'content-Type': 'Application/json' },
        credentials: 'include',
      });
      const json = await response.json();
      this.mapel = json.data;
      this.getAccessMapel();
    },

    async getAccessMapel() {
      const responseAccess = await fetch(CONFIG.BASE_URL + '/access_mapel/show_by_user/' + this.id, {
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'include',
      });
      if (responseAccess.status != 200) {
        return this.addAccessMapel();
      } else {
        const jsonAccess = await responseAccess.json();
        this.messages = jsonAccess.meta.message;
        this.access = jsonAccess.data;
        return this.getDataListMapel();
      }
    },

    async addAccessMapel() {
      const dataAccessMapel = {
        id: this.id,
        mapel_id: this.$route.params.mapel_id,
        last_access: 1,
      };
      await fetch(CONFIG.BASE_URL + '/access_mapel/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(dataAccessMapel),
      });
      this.getAccessMapel();
    },

    getDataListMapel() {
      this.mapel.sub_mapel.forEach(sub_mapel => {
        sub_mapel.list_mapel.forEach(list_mapel => {
          this.list_mapel_cache.push(list_mapel);
        });
      });
      if (this.access[0].last_access <= this.list_mapel_cache.length) {
        this.list_id = this.list_mapel_cache[this.access[0].last_access - 1].list_mapel_id;
      } else {
        this.list_id = this.list_mapel_cache[0].list_mapel_id;
      }
      this.getListMapel();
    },

    async getListMapel() {
      const response = await fetch(CONFIG.BASE_URL + '/list_mapel/show/' + this.list_id, {
        headers: { 'content-Type': 'Application/json' },
      });
      const json = await response.json();
      this.messages = json.meta.message;
      this.list_mapels = json.data;
      this.$emit('sendData', { 'list_mapel': this.list_mapels, 'list_mapel_cache': this.list_mapel_cache });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.sidebar {
  padding-top: 63px;
  background-color: #fa8432;
  width: 280px;
  display: flex;
  flex-direction: column;
}

.kembali {
  padding-left: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}


.kembali a {
  font-size: 20px;
  font-weight: 400;
  margin-left: 10px;
  color: white;
  text-decoration: none;
}

.kembali a img {
  width: 24px;
  height: 24px;
}

ul {
  margin-bottom: 26px;
  list-style-type: none;
  overflow: auto;
}

li {
  margin-bottom: 20px;
}

li a {
  display: block;
  padding-left: 24px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

li .disabled {
  pointer-events: none;
}

li a.active {
  padding-top: 17px;
  padding-bottom: 16px;
  background-color: #e45f03;
  color: white;
}


li a:hover:not(.active) {
  color: #e45f03;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
