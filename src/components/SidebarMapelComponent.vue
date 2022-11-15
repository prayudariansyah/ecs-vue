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
            <li v-for="list_mapel in sub_mapel.list_mapel" v-bind:key="list_mapel.list_mapel_id">
              <a
                :href="'#/' + id + '/mapel/' + mapel.mapel_id + '/' + mapel.mapel_slug + '/' + list_mapel.list_mapel_id">
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
    };
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
      this.$emit('sendSubMapel', this.mapel.sub_mapel);
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
