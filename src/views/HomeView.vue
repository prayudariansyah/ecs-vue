<template>
  <div class="home">
    <header>
      <div class="logo">
        <h1>MANUSIA</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#class">Class</a></li>
          <li><a href="#harga">Harga</a></li>
          <li><a href="/sign-in"><button class="button" role="button">Masuk</button></a></li>
        </ul>
      </nav>
      <div class="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <!-- start main -->
    <main>
      <!-- start jumbotron -->
      <div class="jumbotron">
        <div class="jumbo1">
          <div class="textjumbo">
            <b>Semua Berhak</b>
            <br />
            <small>Untuk Bisa Belajar</small>
          </div>
          <p>Buktikan bahwa semua bisa dilakukan jika kita mempunyai niat yang kuat</p>
          <button class="button"><a href="/sign-up">Daftar Sekarang</a></button>
        </div>
        <div class="jumbo2">
          <img class="floating" src="/images/Ilustrasi.png" alt="Image Jumbotron" />
        </div>
      </div>
      <!-- end jumbotron -->

      <!-- start article -->
      <article id="class">
        <!-- start class catalogue -->
        <div class="title" id="list-class">
          <h3>New Classes</h3>
          <h1>Pilih Tingkat Pendidikan</h1>
        </div>
        <section class="catalogue">
          <div class="card1">
            <img src="/images/English teacher-pana 1.png" alt="" />
            <h3>Semester 1</h3>
            <p>Kelas 1 Sekolah Dasar</p>
          </div>
          <div class="card1">
            <img src="/images/English teacher-pana 2.png" alt="" />
            <h3>Semester 1</h3>
            <p>Kelas 1 Sekolah Dasar</p>
          </div>
        </section>
        <!-- end class catalogue -->

        <!-- start about -->
        <div class="about">
          <div class="title">
            <h3>Tentang Program</h3>
            <h1>Program dengan semester yang diberikan</h1>
            <p>
              Seluruh siswa yang terdaftar memulai pembelajaran dari kelas 1. Untuk naik ketingkat selanjutnya para
              siswa harus menyelesaikan 2 semester dimana per semester mempunyai waktu 6 bulan belajar. Pembelajaran
              dilakukan secara
              mandiri dengan menonton video pembelajaran yang disediakan oleh para ahli.
            </p>
          </div>
          <div class="imgabout">
            <img src="/images/Telecommuting-rafiki 1.png" alt="" />
          </div>
        </div>
        <!-- end about -->

        <!-- start harga -->
        <section class="harga" id="harga">
          <div class="title">
            <h2>Harga</h2>
          </div>
          <div class="card2">
            <div class="titleprice">
              <h3>Program Berkelanjutan</h3>
              <h2>Rp. 1.500.000</h2>
              <h4>Per Semester</h4>
            </div>
            <hr />
            <h4>Kelebihan Program</h4>
            <ul>
              <li>Materi Pelajaran Sekolah Dasar</li>
              <li>Pembelajaran yang interaktif</li>
              <li>Diajari oleh para ahli di bidangnya</li>
              <li>Sesi Zoom One Class 1 kali seminggu</li>
            </ul>
            <a href="/sign-up"><button class="button">Daftar Sekarang</button></a>
          </div>
        </section>
        <!-- end harga -->
      </article>
      <!-- end article -->
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
          <a href="https://goo.gl/maps/fvxLFfHeMMXtGLHd8">Jl Tirto Utomo No 3 GG 8</a><br />
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
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.home {
  margin: 0;
  font-family: Poppins;
  background-image: url('/public/images/bg.png');
  background-repeat: no-repeat;
  background-size: contain;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 100px;
}

header .logo {
  flex-grow: 1;
  color: white;
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
  color: white;
  font-weight: 500;
}

.jumbotron {
  display: flex;
  margin: 0px 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 169px;
}

main .jumbo1 {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

main .jumbo1 .textjumbo {
  flex-grow: 1;
  color: white;
  font-size: 60px;
}

main .jumbo1 .textjumbo b {
  color: #e45f03;
}

main .jumbo1 p {
  flex-grow: 1;
  width: 400px;
  font-weight: 0px;

  color: white;
}

main .jumbo1 button {
  flex-grow: 1;
  width: 200px;
}

main .jumbo1 button a {
  text-decoration: none;
  color: white;
}

main .jumbo2 {
  flex-grow: 10;
  align-items: flex-end;
  text-align: right;
}

article {
  padding: 30px;
  margin: 0px 100px;
  background-color: #ffffff;
}

.catalogue {
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-rows: repeat(2);
  grid-gap: 20px;
  margin-bottom: 50px;
}

main article section .card1 {
  padding: 10px;
  height: 335px;
  width: 332px;
  box-shadow: 11px 12px 29px -18px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 11px 12px 29px -18px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 11px 12px 29px -18px rgba(0, 0, 0, 0.14);
}

main article section .card1 img {
  width: 320px;
}

main article .about {
  display: flex;
}

main article .about .title {
  flex-grow: 1;
  width: 400px;
}

main article .about .imgabout {
  flex-grow: 2;
  text-align: right;
}

.title h2,
.title h3 {
  color: #fa8432;
}

.title p {
  color: #bfbfbf;
}

.harga {
  display: grid;
  place-items: center;
}

article .harga .titleprice {
  text-align: center;
  margin: 50px 0px;
}

article .card2 {
  border-radius: 20px;
  background-color: #fa8432;
  color: white;
  padding: 20px;
  width: 400px;
}

article .harga .card2 ul {
  list-style: none;
  padding-left: 0;
}

article .harga .card2 ul li {
  margin: 30px 0px;
  position: relative;
  padding-left: 1.5em;
  /* space to preserve indentation on wrap */
}

article .harga .card2 ul li:before {
  content: "";
  /* placeholder for the SVG */
  position: absolute;
  left: 0;
  /* place the SVG at the start of the padding */
  width: 2em;
  height: 2em;
  background: url('/public/images/check.svg') no-repeat;
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
    transform: translate(0, 50px);
  }

  100% {
    transform: translate(0, -0px);
  }
}

@media screen and (max-width: 800px) {
  .jumbotron {
    flex-direction: column-reverse;
  }

  .jumbo1 {
    align-items: center;
  }

  main .jumbo1 .textjumbo {
    font-size: 50px;
  }

  main .jumbo1 .textjumbo small {
    color: rgb(73, 73, 73);
  }

  main .jumbo1 p {
    color: rgb(73, 73, 73);
    text-align: center;
    font-size: 20px;
  }

  main .jumbo2 img {
    width: 350px;
  }

  .catalogue {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(1, minmax(auto, 1fr));
    grid-template-rows: repeat(2);
  }

  main article .about {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (min-width: 800px) {
  main .jumbo2 img {
    width: 300px;
  }

  main .jumbo1 .textjumbo {
    font-size: 40px;
  }

  main article .about {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (min-width: 900px) {
  main .jumbo1 .textjumbo {
    font-size: 50px;
  }

  main .jumbo1 p {
    text-align: center;
    font-size: 20px;
  }

  main .jumbo2 img {
    width: 370px;
  }

  .catalogue {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-template-rows: repeat(2);
  }
}

@media screen and (min-width: 1200px) {
  .jumbotron {
    flex-direction: row;
  }

  .jumbo1 {
    align-items: flex-start;
  }

  main .jumbo1 .textjumbo small {
    color: white;
  }

  main .jumbo1 p {
    color: white;
    text-align: left;
  }

  main .jumbo2 img {
    width: 550px;
  }

  main article .about {
    flex-direction: row;
  }
}

@media screen and (min-width: 1600px) {
  main .jumbo2 img {
    width: 700px;
  }
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
  background-color: white;
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
  }

  .close {
    transform: translateY(-1000px);
  }

  header nav ul li {
    margin: 20px 30px;
  }
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

</style>
