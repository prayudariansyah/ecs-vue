<template>
  <div class="signup">
    <!-- start header -->
    <header>
      <div class="logo">
        <h1>MANUSIA</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Class</a></li>
          <li><a href="#">Harga</a></li>
          <li>
            <a href="/sign-in"><button class="button" role="button">Masuk</button></a>
          </li>
        </ul>
      </nav>
    </header>
    <!-- end header -->

    <!-- start main -->
    <main>
      <div class="containerregis">
        <div class="formlogin">
          <div class="title">
            <b>Buktikan Sekarang</b>
            <br />
            <small>Semua Bisa Belajar</small>
          </div>
          <form @submit.prevent="submit">
            <label for="email">Nama Lengkap</label>
            <input type="text" v-model="data.name" placeholder="Masukan nama lengkap" name="nama" required />
            <label for="text">Umur</label>
            <input type="text" v-model="data.user_age" placeholder="Masukan umur" name="umur" required />
            <label for="text">Asal Kota</label>
            <input type="text" v-model="data.user_city" placeholder="Masukan asal kota" name="kota" required />
            <label for="email">Email Address</label>
            <input type="text" v-model="data.email" placeholder="Masukan Email" name="email" required />
            <label for="psw">Password</label>
            <input type="password" v-model="data.password" placeholder="Masukan Password" name="password" required />
            <label for="psw">Re-Password</label>
            <input type="password" v-model="data.password_confirmation" placeholder="Masukan Re-Password"
              name="re-password" required />
            <label for="text">Pembayaran Via Bank</label>
            <select v-model="data.payment_method_id" name="bank" id="bank" v-on:change="onChange($event)">
              <option v-for="payment in listPayment" :value="payment.payment_method_id"
                :key="payment.payment_method_name">
                {{ payment.payment_method_name }}
              </option>
            </select>
            <label for="text">kirim ke No rek dibawah</label>
            <h3>{{ rekening.payment_method_rek }}</h3>
            <label for="text">Total pembayaran</label>
            <h3 for="text">Rp. 50.000</h3>
            <label class="file">
              Bukti pembayaran
              <input type="file" id="file" ref="picture" aria-label="File browser example" v-on:change="previewFiles"
                multiple />
              <span class="file-custom"></span>
            </label>
            <button class="button" type="submit">
              <a href="#">Daftar Sekarang</a>
            </button>
          </form>
        </div>
        <div class="imglogin">
          <img class="floating" src="/images/Learning-amico.png" alt="" />
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
    <component :is="'script'">
      const menuToggle = document.querySelector(".menu-toggle");
      const navbar = document.querySelector("header nav ul");

      menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("close");
      });
    </component>
</template>

<script>
// @ is an alias to /src
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return { listPayment: [], rekening: '', file: '' };
  },
  methods: {
    onChange: function onChange(event) {
      const selected = event.target.value;
      this.rekening = this.listPayment.find(
        (id) => id.payment_method_id == selected
      );
    },
    previewFiles(event) {
      this.data.payment_picture = event.target.files;
    },
  },

  async mounted() {
    await axios.get('/api/payment_method')
      .then((response) => response.data)
      .then((datas) => datas.data)
      .then((data) => (this.listPayment = data))
      .catch((error) => console.log('Request failed', error));

    this.rekening = this.listPayment.find((id) => id.payment_method_id == 1);
  },

  setup() {
    const data = reactive({
      name: '',
      email: '',
      user_city: '',
      user_age: '',
      password: '',
      password_confirmation: '',
      role_id: 2,
      payment_price: 50000,
      payment_picture: '',
      payment_method_id: '',
    });

    const router = useRouter();

    const submit = async () => {
      await axios.post('/api/register', data).then((response) => {
        alert(response.data.meta.message);
        return router.push('/sign-in');
      }).catch(error => {
        alert(error);
      })
    };

    return {
      data,
      submit,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.signup {
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

.containerregis {
  display: flex;
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

input[type='text'],
input[type='password'],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

main .containerregis button a {
  text-decoration: none;
  color: white;
}

main .containerlogin .imglogin img {
  width: 500px;
}

.file {
  margin: 100px 0px;
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

form .button {
  margin-top: 50px;
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

@media screen and (max-width: 800px) {
  .containerregis {
    flex-direction: column-reverse;
  }

  main .containerregis .imglogin img {
    width: 350px;
  }
}

@media screen and (min-width: 800px) {
}

@media screen and (min-width: 850px) {
  .containerregis {
    flex-direction: row;
  }
}

@media screen and (min-width: 1200px) {
  main .containerregis .imglogin img {
    width: 500px;
  }
}

@media screen and (min-width: 1600px) {
}

@media screen and (min-width: 573px) {
  footer .textfooter {
    flex-direction: column;
  }
}

@media screen and (min-width: 800px) {
}

@media screen and (min-width: 850px) {
  footer .textfooter {
    flex-direction: row;
  }
}

@media screen and (min-width: 1200px) {
}

@media screen and (min-width: 1600px) {
}

.menu-toggle {
  display: none;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
}

.menu-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #fa8432;
  border-radius: 3px;
}

@media screen and (max-width: 730px) {
  .menu-toggle {
    display: flex;
  }

  header nav ul {
    z-index: 1;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    right: 0;
    background-color: #fa8432;
    margin: 50px 0px;
    transition: all 300ms ease-in-out;
    color: white;
  }

  .close {
    transform: translateY(-1000px);
  }

  header nav ul li {
    margin: 20px 30px;
  }

  header nav ul li a {
    color: white;
  }
}


</style>
