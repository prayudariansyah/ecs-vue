<template>
  <div class="subclassone">
    <div class="container">
        <SidebarMapelComponentVue/>
      <div class="content">
        <div class="title">
          <h4>Introduction Class</h4>
        </div>
        <div class="video">
          <iframe
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/FrwfbVEwqZg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="text-deskripsi">
          <p>
            Today We Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla Today We
            Learn About Everything
            blablablablablablablablablablablablbalbalbalbalbalblabla
          </p>
        </div>
        <button class="btn">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarMapelComponentVue from '@/components/SidebarMapelComponent.vue';

export default {
  name: 'SubClassOne',
  components: {
    SidebarMapelComponentVue
  },
};
</script>

<style scoped>
h4 {
  font-size: 36px;
  font-weight: 500;
  color: #404040;
}

.subclassone {
  font-family: 'Poppins';
  height: max-content;
  overflow: auto;
}
.container {
  display: flex;
}


.content {
  width: 1160px;
  margin-left: 70px;
  margin-top: 50px;
}

.video {
  margin-top: 6px;
  margin-bottom: 40px;
}

.text-deskripsi {
  width: 1000px;
  font-size: 18px;
  font-weight: 400;
  color: black;
  margin-bottom: 15px;
}

.btn {
  width: 90px;
  height: 60px;
  background-color: #e45f03;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 1000px;
}
</style>
