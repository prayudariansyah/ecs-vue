<template>
  <aside class="sidebar">
    <div class="kembali">
      <img src="/images/akar-icons_arrow-left.png" alt="" />
      <a href="#/dashboard">Kembali</a>
    </div>
    <div class="bab">
      <ul v-for="sub_mapel in mapel.sub_mapel" v-bind:key="sub_mapel.sub_mapel_id">
      <!-- <ul> -->
        <li><a class="active" href="#">{{ sub_mapel.sub_mapel_name }}</a></li>

        <li v-for="list_mapel in sub_mapel.list_mapel" v-bind:key="list_mapel.list_mapel_id">
          <a :href="'/' + mapel.mapel_slug + '/' + list_mapel.list_mapel_id">{{ list_mapel.list_mapel_name }}</a>
        </li>
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
      mapel: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch(CONFIG.BASE_URL + '/mapel/show/1', { // Id masih static NeedFix
        headers: { 'content-Type': 'Application/json' },
        credentials: 'include',
      });
      const json = await response.json();
      const messages = json.meta.message;
      this.mapel = json.data;
      console.log(this.mapel);
      this.messages = messages;
      if (response.status == 200) {
        this.verify = true;
      }
    } catch (e) {
      console.log(e);
    }
  },
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
.kembali img {
  width: 24px;
  height: 24px;
}
.kembali a {
  font-size: 20px;
  font-weight: 400;
  margin-left: 10px;
  color: white;
  text-decoration: none;
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
</style>
