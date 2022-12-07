<template>
    <AuthUser @sendData="user = $event[0]" />
    <div class="profile">
        <div class="container">
            <SidebarComponent />
            <div class="content">
                <div class="title">
                    <h4>Profile Saya</h4>
                    <p>Pastikan Data Pribadi anda benar dan tidak tersebar</p>
                </div>
                <form @submit.prevent="submit">
                    <div class="change-picture">
                        <img :src="config.BASE_IMAGE + '/' + user.user_picture" alt="">
                        <div class="new-picture">
                            <p>Add your picture...</p>
                            <input type="file" id="file" ref="pictureData" aria-label="Input Profile Picture"/>
                        </div>
                    </div>
                    <div class="new-data">
                        <div class="field">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" :value="data.name" :model="data.name">
                        </div>
                        <div class="field">
                            <label for="user_age">Umur</label>
                            <input type="text" id="user_age" name="user_age" :value="data.user_age"
                                :model="data.user_age">
                        </div>
                        <div class="field">
                            <label for="user_city">Asal Kota</label>
                            <input type="text" id="user_city" name="user_city" :value="data.user_city"
                                :model="data.user_city">
                        </div>
                        <div class="field">
                            <label for="emailaddress">Email Adddress</label>
                            <input readonly type="email" id="email" name="email" :value="user.email"
                                :model="data.email">
                        </div>
                        <div class="field">
                            <button class="submit" type="submit">Simpan</button>
                            <a class="change-pass" href="/new-password">Ganti Password</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SidebarComponent from '../users/components/SidebarComponent.vue';
import AuthUser from './components/AuthUser.vue';
import CONFIG from '@/global/config';
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'ProFile',
    components: {
        SidebarComponent,
        AuthUser
    },
    data() {
        return {
            config: CONFIG,
            user: '',
        }
    },
    async created() {
        await axios.get('/api/user/show')
            .then(response => response.data)
            .then(datas => this.user = datas.data)
            .catch(error => { console.log(error) });
            this.data.name = this.user.name;
            // this.data.name = this.user.name;
            // this.data.email = this.user.email;
            this.data.user_city = this.user.user_city;
            this.data.user_age = this.user.user_age;
    },
    setup() {
        const data = reactive({
            name: '',
            user_city: '',
            user_age: '',
        });
        const pictureData = ref({});

        const submit = async () => {
            let form_data = new FormData();
            const name = document.getElementById('name');
            const user_city = document.getElementById('user_city');
            const user_age = document.getElementById('user_age');
            form_data.append('name', name.value);
            form_data.append('user_city', user_city.value);
            form_data.append('user_age', user_age.value);
            if (pictureData.value.files.item(0) != null){
                form_data.append('user_picture', pictureData.value.files.item(0));
            }
            console.log(form_data);
            await axios.post('/api/user/edit/', form_data)
                .then(response => response.data)
                .then(data => { 
                    alert(data.meta.message);
                    return useRouter.push('/profile');
                })
                .catch(error => console.log(error));
        };

        return {
            data,
            submit,
            pictureData,
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

h4 {
    font-size: 36px;
    font-weight: 500;
    color: #404040;
}

.profile {
    font-family: 'Poppins';
    width: 1440px;
    height: 900px;
    overflow: auto;
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
    width: 1160px;
    margin-left: 70px;
    margin-top: 50px;
}

.title p {
    margin-top: 6px;
    font-size: 18px;
    font-weight: 400;
    color: #BFBFBF;
}

input[type='file']::file-selector-button {
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

input[type='file']::file-selector-button:hover {
  transform: translateY(-2px);
}

input[type='file']::file-selector-button:active {
  box-shadow: none;
  transform: translateY(0);
}

.change-picture {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
}

.change-picture img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    padding: 2px;
    margin-right: 10px;
}

.change-picture p {
    font-size: 16px;
    font-weight: 400;
    color: #BFBFBF;
    margin-top: 6px;
    margin-bottom: 14px;

}

.change-picture button {
    width: 120px;
    height: 50px;
    color: #ACACAC;
    background-color: #EDEDED;
    border: none;
}

.change-picture button:hover {
    background-color: #E45F03;
    color: white;
}

.new-data {
    margin-top: 30px;
}

.new-data .field {
    display: flex;
    flex-direction: column;
}

.new-data label {
    font-size: 18px;
    font-weight: 400;
    color: #404040;
}

.new-data input {
    margin-right: 720px;
    margin-top: 10px;
    margin-bottom: 15px;
    padding-left: 15px;
    padding-top: 13px;
    padding-bottom: 13px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 10px;
    line-height: 24px;
}

.submit {
    width: 370px;
    height: 60px;
    background-color: #E45F03;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 600;
}

.change-pass {
    margin-top: 10px;
    max-width: 370px;
    max-height: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    color: #E45F03;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
}
</style>