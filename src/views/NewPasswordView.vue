<template>
    <div class="newPassword">
        <div class="container">
            <SidebarComponent />
            <div class="content">
                <div class="title">
                    <h4>New Password</h4>
                    <p>Mengubah Password anda</p>
                </div>
                <div class="new-data">
                    <form @submit.prevent="submit">
                        <div class="field">
                            <label for="fullName">Old Password</label>
                            <div class="input-group">
                                <input :type="[password.oldPassword ? 'text' : 'password']" id="oldPass" name="oldPass"
                                    :model="data.old_password">
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
                        <button class="submit" type="submit">Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SidebarComponent from '@/components/SidebarComponent.vue';
import CONFIG from '@/global/config';
import { reactive } from 'vue';

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
            const response = await fetch(CONFIG.BASE_URL + '/update-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data),
            });
            const json = await response.json();
            alert(json.meta.message);
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
    width: 100%;
    margin-left: 70px;
    margin-top: 50px;
}

.title p {
    margin-top: 6px;
    font-size: 18px;
    font-weight: 400;
    color: #BFBFBF;
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
    width: 100%;
    max-width: 370px;
    min-width: 44px;
    margin-top: 10px;
    margin-bottom: 15px;
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
    display: inline-block;
    width: 100%;
    max-width: 500px;
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

.show-pass {
    width: 44px;
    height: 44px;
    padding: 15px;
    background-color: #E45F03;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}
</style>