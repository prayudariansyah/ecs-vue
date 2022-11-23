<template>
  <aside class="sidebar">
    <div class="card-profile">
      <img :src="config.BASE_IMAGE +  '/'  + user.user_picture" alt="" />
      <p class="name">{{ user.name }}</p>
      <p>Kelas 1 Sekolah Dasar</p>
    </div>
    <a href="#/dashboard" class="active">Kelas Saya</a>
    <a href="#/profile">Profile Saya</a>
    <a @click="logout">Log Out</a>
  </aside>
</template>

<script>
import CONFIG from '@/global/config';
import { useRouter } from 'vue-router';

export default {
  name: 'SidebarComponent',
  data() {
    return {
      user: [],
      config: CONFIG,
    };
  },
  async mounted() {
    try {
      const response = await fetch(CONFIG.BASE_URL + '/user/show', {
        headers: { 'content-Type': 'Application/json' },
        credentials: 'include',
      });
      const json = await response.json();
      const messages = json.meta.message;
      this.messages = messages;
      if (response.status == 200) {
        this.user = json.data;
      }
    } catch (e) {
      console.log(e);
    }
  },
  setup() {
    const route = useRouter();
    const logout = async () => {
      await fetch(CONFIG.BASE_URL + '/logout', {
        headers: { 'content-Type': 'Application/json' },
        credentials: 'include',
      });
      alert('logout berhasil');
      return await route.push('/');
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
  padding-top: 80px;
  background-color: #fa8432;
  width: 280px;
  height: 900px;
  display: flex;
  flex-direction: column;
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
