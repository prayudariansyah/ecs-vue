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
            <div class="content">
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
        await this.getMapel();
        setTimeout(() => {
            this.loading = false
        }, 1000);
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
* {
    margin: 0;
    padding: 0;
}

h4 {
    font-size: 36px;
    font-weight: 600;
    color: #404040;
}


.dashboard {
    font-family: 'Poppins';
    width: 1440px;
    height: 900px;
    overflow: hidden;
}

.container {
    display: flex;
    width: 100%;
    height: 100%;

}


.content {
    margin-left: 70px;
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
    width: 255px;
    height: 170px;
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
</style>