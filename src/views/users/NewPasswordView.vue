<template>
    <div class="newPassword">
        <div class="container">
            <SidebarComponent />
            <span class="open" onclick="openNav()">&#9776;</span>
            <div class="content">
                <div class="title">
                    <h4>New Password</h4>
                    <p>Mengubah Password anda</p>
                </div>
                <form @submit.prevent="submit">
                    <div class="new-data">
                        <div class="field">
                            <label for="fullName">Old Password</label>
                            <div class="input-group">
                                <input :type="[password.oldPassword ? 'text' : 'password']" id="oldPass" name="oldPass"
                                    v-model="data.old_password">
                                <span class="show-pass" @click="password.oldPassword = !password.oldPassword">{{
                                        password.oldPassword ? 'hide' : 'show'
                                }}</span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="umur">New Password</label>
                            <div class="input-group">
                                <input :type="[password.newPassword ? 'text' : 'password']" id="newPass" name="newPass"
                                    v-model="data.password">
                                <span class="show-pass" @click="password.newPassword = !password.newPassword">{{
                                        password.newPassword ? 'hide' : 'show'
                                }}</span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="askot">Re Password</label>
                            <div class="input-group">
                                <input :type="[password.reNewPassword ? 'text' : 'password']" id="reNewPass"
                                    name="reNewPass" v-model="data.password_confirmation">
                                <span class="show-pass" @click="password.reNewPassword = !password.reNewPassword">{{
                                        password.reNewPassword ? 'hide' : 'show'
                                }}</span>
                            </div>
                        </div>
                        <button class="button" type="submit">Simpan</button>
                    </div>
                </form>
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
// import HelloWorld from '@/components/HelloWorld.vue'
import SidebarComponent from '../users/components/SidebarComponent.vue';
import { reactive } from 'vue';
import axios from 'axios';

export default {
    name: 'newPassword',
    components: {
        SidebarComponent,
    },
    data() {
        return {
            password: {
                oldPassword: false,
                newPassword: false,
                reNewPassword: false,
            },
        }
    },
    setup() {
        // let id;
        const data = reactive({
            old_password: '',
            password: '',
            password_confirmation: '',
        });

        const submit = async () => {
            await axios.post('/api/update-password', data)
                .then(response => response.data)
                .then(datas => { alert(datas.meta.message) })
                .catch(error => { console.log(error) });
        }

        return {
            data,
            submit,
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

.newPassword {
    font-family: 'Poppins';
    width: 100%;
    overflow: visible;
}

.open {
    position: fixed;
    top: 120px;
    font-family: 'Poppins';
    font-size: 28px;
    font-weight: 500;
    color: white;
    border-radius: 0 100px 100px 0;
    background: #E45F03;
    padding: 8px 13px 10px 13px;
}

.container {
    display: flex;
}

.content {
    width: 100%;
    margin-top: 50px;
    margin-right: 100px;
}

.title {
    margin-left: 50px;
    color: #BFBFBF;
}

.title p {
    margin-top: 6px;
    font-size: 18px;
    font-weight: 400;
    color: #BFBFBF;
}

.new-data {
    width: 100%;
    max-width: 500px;
    margin: 50px;
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
    width: 100%;
    min-width: 44px;
    margin-right: 10px;
    padding-left: 15px;
    padding-top: 13px;
    padding-bottom: 13px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 10px;
    line-height: 24px;
}

.input-group {
    display: flex;
    padding: 13px;
    margin-right: 10px;
}

.button {
    appearance: none;
    background-color: #e45f03;
    border: 0px solid #ffffff00;
    border-radius: 10px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
}

.button:disabled {
    pointer-events: none;
}

.button:hover {
    box-shadow: rgb(250, 132, 50) 0 8px 15px;
    transform: translateY(-2px);
}

.button:active {
    box-shadow: none;
    transform: translateY(0);
}

.show-pass {
    width: 10%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 0px;
    background-color: #E45F03;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
}

.show-pass:hover {
    box-shadow: rgb(250, 132, 50) 0 8px 15px;
    transform: translateY(-2px);
}
</style>