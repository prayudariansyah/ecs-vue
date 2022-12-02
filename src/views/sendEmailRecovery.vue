<template>
    <div class="send-email">
        <main>
            <div class="container">
                <div class="logo">
                    <h1>Manusia</h1>
                </div>
                <form @submit.prevent="submit">
                    <div class="content">
                        <h1>Lupa Password</h1>
                        <p>Patikan email anda telah terdaftar manual pada Manusia</p>
                        <div class="input-field">
                            <label for="email">Email Address</label>
                            <input type="text" placeholder="Masukkan Email" v-model="data.email">
                        </div>
                        <button class="button" type="submit">Send Reset Link</button>
                    </div>
                </form>
            </div>
            <div class="imglogin">
                <img src="/images/cuate.png" alt="" class="floating">
            </div>
        </main>
        <footer>
            <div class="textfooter">
                <div class="company">
                    <h4>Company</h4>
                    <a href="#">Our Instagram</a><br />
                    <a href="#">Our Team</a><br />
                </div>
                <div class="student">
                    <h4>Student</h4>
                    <a href="#">Class list</a><br />
                </div>
                <div class="touchus">
                    <h4>Touch Us</h4>
                    <a href="#">MANUSIA</a><br />
                    <a href="#">Jl Tirto Utomo No 3 GG 8</a><br />
                    <a href="#">Kabupaten Malang</a><br />
                    <a href="#">+62 831 5099 3913</a><br />
                </div>
            </div>
            <hr />
            <p>2020 Copyright ECS by MANUSIA. All Rights Reserved.</p>
        </footer>
    </div>
</template>


<script>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'SendEmail',
    setup() {
        const router = useRouter();

        const data = reactive({
            email: '',
        });

        const submit = async () => {
            await axios.post('/api/forgot-password', data)
                .then(response => response.data)
                .then(datas => alert(datas.meta.message))
                .then(() => { return router.back() })
                .catch(error => console.log(error));
        };

        return {
            data,
            submit
        };
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.send-email {
    font-family: 'Poppins';
    overflow: auto;
}

main {
    display: flex;
    flex-direction: row;
    padding-top: 180px;
    padding-left: 180px;
}

.container {
    display: flex;
    flex-direction: column;
}

.logo {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: #FA8432;
}

.content {
    margin-top: 30px;
}

.content h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #404040;
    margin-bottom: 5px;
}

.container p {
    width: 247px;
    height: 42px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #000000;
}

.input-field {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.input-field label {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #404040;
    margin-bottom: 10px;
}

.input-field input {
    box-sizing: border-box;
    width: 370px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #898989;
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #C2C2C2;
    padding-left: 15px;
}

.button {
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 10px;
    width: 370px;
    height: 60px;
    background: #E45F03;
    border-radius: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
}

.button:hover {
    box-shadow: rgb(250, 132, 50) 0 8px 15px;
    transform: translateY(-2px);
}

.button:active {
    box-shadow: none;
    transform: translateY(0);
}

.floating {
    animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 263px;
}

@keyframes floating {
    0% {
        transform: translate(0, 0px);
    }

    50% {
        transform: translate(0, -50px);
    }

    100% {
        transform: translate(0, -0px);
    }
}

footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 50px 100px;
    margin: 70px 0px 0px 0px;
    background-color: #e45f03;
    color: white;
}

footer .textfooter {
    flex-grow: 1;
    display: flex;
}

.company,
.student,
.touchus {
    flex-grow: 1;
}

footer a {
    text-decoration: none;
    color: #ffb17b;
}

footer hr {
    margin: 30px;
    color: white;
    text-align: center;
}

footer p {
    flex-grow: 1;
    text-align: center;
}
</style>
