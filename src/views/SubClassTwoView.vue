<template>
  <div class="subclasstwo"> 
         <div class="container">
        <aside class="sidebar">
            <div class="kembali">
                <img src="/images/akar-icons_arrow-left.png" alt="">
                <a href="#/dashboard">Kembali</a>
            </div>
            <div class="bab">
                <ul>
                    <li><a class="active" href="#">Perkenalan</a></li>
                    <li><a href="#">Perkenalan Instruktur</a></li>
                    <li><a href="#">Perkenalan Kelas</a></li>                    
                </ul>
                <ul>
                    <li><a class="active" href="#">Bab 1</a></li>
                    <li><a href="#">Membaca</a></li>
                    <li><a href="#">Menulis</a></li>
                    <li><a href="#">Berbicara</a></li>
                </ul>
                <ul>
                    <li><a class="active" href="#">Bab 2</a></li>
                    <li><a href="#">Membuat Video</a></li>
                    <li><a href="#">Latihan</a></li>                    
                </ul>
            </div>
        </aside>
        <div class="content">
            <div class="title">
                <h4>Perkenalan Kelas</h4>                
            </div>
            <div class="video">
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/FrwfbVEwqZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="text-deskripsi">
                <p>Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla
                    Today We Learn About Everything blablablablablablablablablablablablbalbalbalbalbalblabla

                </p>
            </div>
            <button class="btn">Next</button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SubClassTwo',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;    
}
h4{
    font-size: 36px;
    font-weight: 500;
    color:#404040;
}

.subclasstwo{
    font-family: 'Poppins';
    width: 1440px;
    height: max-content;
    overflow: auto;
}
.container{
    display: flex;
    width: 100%;
    height: 100%;
}
.sidebar{
    padding-top: 63px;
    background-color: #FA8432;
    width: 280px;
    display: flex;
    flex-direction: column;
}
ul {    
    margin-bottom: 26px;
    list-style-type: none;          
    overflow: auto;
  }
  
  li{
    margin-bottom: 20px;
  }
  li a {
    display: block;
    padding-left: 24px;    
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
  }
  
  li a.active {
    padding-top: 17px;
    padding-bottom: 16px;
    background-color: #E45F03;
    color: white;
  }
  
  li a:hover:not(.active) {
    color: #E45F03;
  }
.kembali{
    padding-left: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}
.kembali img{
 width: 24px;   
 height: 24px;
}
.kembali a{
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
    color: white;
    text-decoration: none;
}

.content{
    width: 1160px; 
    margin-left: 70px;
    margin-top: 50px;
}

.video{
    margin-top: 6px;
    margin-bottom: 40px;
}

.text-deskripsi{
    width: 1000px;
    font-size: 18px;    
    font-weight: 400;
    color: black;
    margin-bottom: 15px;
}

.btn{
    width: 90px;
    height: 60px;
    background-color: #E45F03;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    margin-left: 1000px;
}
</style>
