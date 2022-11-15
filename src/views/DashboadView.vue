<template>
    <div v-if="!verify">
        <div class="card">
            <h3 v-if="messages">{{ messages }}</h3>
            <h3 v-else>Anda belum masuk atau email anda belum diverifikasi!. silahkan masuk</h3>
            <p><a href="#">back to home</a></p>
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
                <div class="class-row" v-for="mapel in mapels" v-bind:key="mapel.id">
                    <div class="card">
                        <img src="/images/English teacher-pana 1.png" alt="">
                        <p><a v-bind:href="'#/' + user.id + '/mapel/' + mapel.mapel_id + '/' + mapel.mapel_slug + '/' + 0"
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
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
    name: 'DashBoard',
    components: {
        SidebarComponent
    },
    data() {
        return {
            messages: '',
            verify: false,
            user: [],
            mapels: [],
        }
    },
    async mounted() {
        this.getUser();
        this.getMapel();
    },
    methods: {
        async getUser() {
            const response = await fetch(CONFIG.BASE_URL + '/user/show', {
                headers: { 'content-Type': 'Application/json' },
                credentials: 'include',
            });
            const json = await response.json();
            this.messages = json.meta.message;
            this.user = json.data;
            if (response.status == 200) {
                this.verify = true;
            }
        },
        async getMapel() {
            const responseMapel = await fetch(CONFIG.BASE_URL + '/mapel', {
                headers: { 'content-Type': 'Application/json' },
            });
            const jsonMapel = await responseMapel.json();
            this.messages = jsonMapel.meta.message;
            this.mapels = jsonMapel.data;
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