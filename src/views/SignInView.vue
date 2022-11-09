<template>
  <div class="signin">
    <!-- start header -->
    <header>
      <div class="logo">
        <h1>MANUSIA</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Class</a></li>
          <li><a href="#">Harga</a></li>
          <li><a href="#/sign-up"><button class="button" role="button">Daftar</button></a></li>
        </ul>
      </nav>
    </header>
    <!-- end header -->

    <!-- start main -->
    <main>
      <div class="containerlogin">
        <div class="formlogin">
          <div class="title">
            <b>Yuk Masuk</b>
            <br />
            <small>Kita Belajar Lagi</small>
          </div>
          <form @submit.prevent="submit">
            <label for="email">Email Address</label>
            <input type="text" v-model="data.email" placeholder="Masukan Email" name="email" required />
            <label for="psw">Password</label>
            <input type="password" v-model="data.password" placeholder="Masukan Password" name="password" required />
            <button class="button" type="submit"><a href="#/dashboard">Masuk</a></button>
          </form>
        </div>
        <div class="imglogin">
          <img class="floating" src="/images/cuate.png" alt="" />
        </div>
      </div>
    </main>
    <!-- end main -->
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
// @ is an alias to /src
import CONFIG from '@/global/config';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'SignIn',
  setup() {
    const data = reactive({
      email: '',
      password: '',
    });
    const route = useRouter();
    const submit = async () => {
      const response = await fetch(CONFIG.BASE_URL + '/login', {
        method: 'POST',
        headers: { 'content-Type': 'Application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (response.status != 401) {
        await route.push('/dashboard');
      }
      alert(json.meta.message);
    }
    return { data, submit };
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.signin {
  margin: 0;
  font-family: Poppins;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 100px;
}

header .logo {
  flex-grow: 1;
  color: #fa8432;
}

header nav {
  text-align: right;
  flex-grow: 1;
}

header nav ul {
  text-align: right;
  display: inline-flex;
  list-style-type: none;
  align-items: center;
}

header nav ul li {
  margin: 0px 20px;
}

header nav ul li a {
  text-decoration: none;
  font-style: normal;
  font-size: 18px;
  color: rgb(0, 0, 0);
  font-weight: 500;
}

.containerlogin {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px 0px;
}

.formlogin {
  display: flex;
  flex-direction: column;
  width: 370px;
}

.title {
  font-size: 30px;
  margin-bottom: 30px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

main .containerlogin button a {
  text-decoration: none;
  color: white;
}

main .containerlogin .imglogin img {
  width: 500px;
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

.floating {
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
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
</style>
