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
            <aside class="sidebar">
                <div class="card-profile">
                    <img src="/images/Profile.png" alt="">
                    <p class="name">Prayuda Riansyah</p>
                    <p>Kelas 1 Sekolah Dasar</p>
                </div>
                <a href="#/dashboard" class="active">Kelas Saya</a>
                <a href="#/profile">Profile Saya</a>
                <a @click="logout">Log Out</a>
            </aside>
            <div class="content">
                <div class="title">
                    <h4>My Class</h4>
                    <p>Tidak perlu terburu-buru dalam belajar. Konsisten adalah kunci utama</p>
                </div>
                <div class="class-row">
                    <div class="card">
                        <img src="/images/English teacher-pana 1.png" alt="">
                        <p><a href="#/subclass-one" class="matpen">Bahasa Inggris</a></p>
                        <p class="semester">Semester 1</p>
                    </div>
                    <div class="card">
                        <img src="/images/English teacher-pana 2.png" alt="">
                        <p><a href="#/subclass-two" class="matpen">Bahasa Indonesia</a></p>
                        <p class="semester">Semester 1</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import CONFIG from '@/global/config';
import { useRouter } from 'vue-router';

export default {
    name: 'DashBoard',
    data() {
        return {
            messages: '',
            verify: false,
        }
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
                this.verify = true;
            }
        } catch (e) {
            console.log(e);
        }
    },
    setup() {
        const route = useRouter()
        const logout = async () => {
            await fetch(CONFIG.BASE_URL + '/logout', {
                headers: { 'content-Type': 'Application/json' },
                credentials: 'include',
            });
            alert('logout berhasil');
            return await route.push('#');
        }
        return {
            logout
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

.sidebar {
    padding-top: 80px;
    background-color: #FA8432;
    width: 280px;
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
    background-color: #E45F03;
    color: white;
}

.sidebar a:hover:not(.active) {
    background-color: #FFB17B;
    color: white;
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