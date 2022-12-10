<template>
  <AuthUser @sendData="user = $event[0]" />
  <aside class="sidebar" id="mySide">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div class="card-profile">
      <img :src="config.BASE_IMAGE + '/' + user.user_picture" alt="" />
      <p class="name">{{ user.name }}</p>
      <p>Kelas 1 Sekolah Dasar</p>
    </div>
    <a href="/dashboard" :name="dashboard = '/dashboard'" :class="{ 'active': dashboard == $route.path }">Kelas Saya</a>
    <a href="/profile" :name="profile = '/profile'" :class="{ 'active': profile == $route.path }">Profile Saya</a>
    <a @click="logout">Log Out</a>
  </aside>
</template>

<script>
import CONFIG from '@/global/config';
import axios from 'axios';
import { useRouter } from 'vue-router';
import AuthUser from './AuthUser.vue';

export default {
  name: 'SidebarComponent',
  components: {
    AuthUser,
  },
  data() {
    return {
      user: [],
      config: CONFIG,
    };
  },
  setup() {
    const route = useRouter();
    const logout = async () => {
      await axios.get('/api/logout')
        .then(response => response.data)
        .then(datas => {
          localStorage.removeItem('token');
          alert(datas.meta.message);
          return route.push('/');
        })
    };
    return {
      logout,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  padding-top: 50px;
  background-color: #FA8432;
  position: fixed;
  height: 100%;
  width: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: all .1s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  font-size: 36px;
}

.card-profile {
  width: 280px;
}

.card-profile img {
  margin-left: 80px;
  margin-bottom: 16px;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  padding: 2px;
  background-color: white;
}

.card-profile p {
  margin-left: 65px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin-bottom: 60px;
}

.card-profile p.name {
  margin-left: 48px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
}

.sidebar a {
  padding-left: 24px;
  padding-top: 17px;
  padding-bottom: 16px;
  padding-right: 156px;
  color: white;
  text-decoration: none;
  width: 100px;
}

.sidebar a.active {
  background-color: #e45f03;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #ffb17b;
  color: white;
}
</style>
