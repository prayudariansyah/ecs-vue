<template>
    <AuthUser @sendData="getData($event)" />
    <!-- { { loading } } -->
    <div v-if="loading">
        <h3>Mohon Tunggu</h3>
    </div>
    <!-- {{ verify }} -->
    <div v-else-if="(!verify)">
        <div class="card">
            <h3>Anda belum login. silahkan login kembali</h3>
            <p><a href="/">back to home</a></p>
        </div>
    </div>
    <div class="dashboard" v-else>
        <div class="container">
            <SidebarComponent />
            <span class="open" onclick="openNav()">&#9776;</span>
            <div class="content" id="main">
                <div class="title">
                    <h4>My Class</h4>
                    <p>Tidak perlu terburu-buru dalam belajar. Konsisten adalah kunci utama</p>
                </div>
                <div class="class-row">
                    <div class="card" v-for="mapel in mapels" v-bind:key="mapel.id">
                        <img :src="image + '/' + mapel.mapel_picture" alt="">
                        <p><a v-bind:href="user.id + '/mapel/' + mapel.mapel_id + '/' + mapel.mapel_slug + '/' + 0"
                                class="matpen">{{
                                        mapel.mapel_name
                                }}</a></p>
                        <p class="semester">Semester {{ mapel.semester_id }}</p>
                    </div>
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
import CONFIG from '@/global/config';
import SidebarComponent from '../users/components/SidebarComponent.vue';
import axios from 'axios';
import AuthUser from './components/AuthUser.vue';

export default {
    name: 'DashBoard',
    components: {
        SidebarComponent,
        AuthUser,
    },
    data() {
        return {
            image: CONFIG.BASE_IMAGE,
            messages: '',
            verify: false,
            loading: true,
            user: [],
            mapels: [],
        }
    },
    async mounted() {
        setTimeout(() => {
            this.loading = false
        }, 500);
        await this.getMapel();
    },
    methods: {
        getData(data) {
            this.user = data[0];
            this.messages = data[1];
            if (this.user) {
                this.verify = true;
            }
        },

        async getMapel() {
            await axios.get('/api/mapel')
                .then(response => response.data)
                .then(data => {
                    this.messages = data.meta.message;
                    this.mapels = data.data
                })
        }
    }
}
</script>

<style scoped>
h4 {
    font-size: 36px;
    font-weight: 600;
    color: #404040;
}


.dashboard {
    margin: 0;
    font-family: 'Poppins';
    overflow:visible;
}

.container {
    display: flex;
}

#main {
    transition: margin-left .5s;
    padding-left: 80px;
  }
.open{
    position: fixed;
    top: 120px;
    font-family: 'Poppins';
    font-size: 28px;
    font-weight: 500;
    color:white;
    border-radius: 0 100px 100px 0;
    background: #E45F03;
    padding: 8px 13px 10px 13px;
}


.content {
    margin-top: 50px;
}

.title p {
    margin-top: 6px;
    font-size: 18px;
    font-weight: 400;
    color: #BFBFBF;
}

.class-row {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
}

.card {
    margin-right: 47px;
}

.card img {
    width: 385px;
    height: 270px;
}

.card a.matpen {
    font-size: 18px;
    font-weight: 400;
    color: #404040;
    text-decoration: none;
}

.card p.semester {
    font-size: 14px;
    font-weight: 400;
    color: #BFBFBF;
}

@media screen and (max-width: 800px) {
    .content {
      flex-direction: column-reverse;
    }
    .class-row {
        flex-direction: column-reverse;
    }
    div.content {margin-left: 0;}
  
    .card  img {
      width: 255px;
      height: 170px;
    }
  }

</style>