<template>
  <aside class="sidebar" id="mySide">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div class="kembali">
      <a href="/dashboard">
        <img src="/images/akar-icons_arrow-left.png" alt="" />
        Kembali
      </a>
    </div>
    <div class="bab">
      <ul v-for="sub_mapel in mapel.sub_mapel" v-bind:key="sub_mapel.sub_mapel_id">
        <!-- <ul> -->
        <li>
          <a v-on:click="sub_mapel.show = !sub_mapel.show" class="active">
            ☰ {{ sub_mapel.sub_mapel_name }}
          </a>
        </li>
        <transition name="fade">
          <div v-if="!sub_mapel.show">
            <li v-for="(list_mapel, i) in list_mapels" :key="list_mapel.list_mapel_id">
              <a :href="'/' + id + '/mapel/' + mapel.mapel_id + '/' + mapel.mapel_slug + '/' + (i + 1)"
                :class="{ 'disabled': list_mapel.access == 0, 'active-list': list == (i + 1) }"
                v-if="list_mapel.sub_mapel_id == sub_mapel.sub_mapel_id">{{ list_mapel.list_mapel_name }}</a>
              <div v-if="list_mapel.quiz">
                <a :href="'/' + id + '/mapel/' + mapel.mapel_id + '/' + mapel.mapel_slug + '/' + (i + 1)"
                  :class="{ 'disabled': list_mapel.access == 0, 'active-list': list == (i + 1) }"
                  v-if="list_mapel.quiz[0].sub_mapel_id == sub_mapel.sub_mapel_id">
                  Quiz {{ sub_mapel.sub_mapel_name }}
                </a>
              </div>
            </li>
          </div>
        </transition>
      </ul>
    </div>
  </aside>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SidebarMapelComponent',
  data() {
    return {
      id: this.$route.params.id,
      mapel_id: this.$route.params.mapel_id,
      list: this.$route.params.list,
      mapel: [],
      list_mapels: [],
      quiz: [],
      access: [],
    };
  },
  watch: {
    $route() {
      this.list = this.$route.params.list,
        this.getAccessMapel();
    },
  },
  async mounted() {
    await this.getMapel();
    await this.getQuiz();
    this.getListMapel();
    await this.getAccessMapel();
    this.$emit('sendData', [this.list_mapels, this.access])
  },
  methods: {
    async getMapel() {
      await axios.get('/api/mapel/show/' + this.$route.params.mapel_id)
        .then(response => response.data)
        .then(datas => { this.mapel = datas.data })
        .catch(error => { console.log(error) });
    },

    async getQuiz() {
      await axios.get('/api/quiz')
      .then(response => response.data)
        .then(datas => { this.quiz = datas.data })
        .catch(error => { console.log(error) });
    },

    getListMapel() {
      this.mapel.sub_mapel.forEach(sub_mapel => {
        const quiz = this.quiz.filter(quiz => quiz.sub_mapel_id == sub_mapel.sub_mapel_id);
        sub_mapel.list_mapel.forEach(list_mapel => {
          this.list_mapels.push(list_mapel);
        });
        if (quiz.length != 0) {
          this.list_mapels.push({ 'quiz': quiz });
        }
      });
    },

    async getAccessMapel() {

      await axios.get('/api/access_mapel/show_by_user/' + this.id)
        .then(response => response.data)
        .then(datas => {
          const access = datas.data;
          this.access = access.filter(acc => acc.mapel_id == this.mapel_id);
          return this.getAccess();
        })
        .catch(error => {
          console.log(error)
          return this.addAccessMapel();
        });
    },

    async addAccessMapel() {
      const data = {
        id: this.id,
        mapel_id: this.mapel_id,
        last_access: 1,
      }

      await axios.post('/api/access_mapel/add', data)
        .then(response => response.data)
        .then(datas => {
          this.access = Array(datas.data);
          this.getAccess();
        })
        .catch(error => { console.log(error) });
    },

    getAccess() {
      for (let i = 0; i < this.list_mapels.length; i++) {
        this.list_mapels[i].access = 1;
        if (i >= this.access[0].last_access) {
          this.list_mapels[i].access = 0;
        }
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.sidebar{
    padding-top: 50px;
    background-color: #FA8432;
    position: fixed;
    width: 0;
    height: 100%;
    z-index: 1;
    overflow-y: hidden;
    transition: all .1s;
    display: flex;
    flex-direction: column;
}

.sidebar .closebtn {
    padding-left: 24px;
    padding-top: 17px;
    padding-right: 156px;
    color: white;
    text-decoration: none;
    color: white;
    position: fixed;
    top: 0;
    font-size: 36px;
}

.kembali{
    margin-top: 20px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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

.kembali a img {
  width: 24px;
  height: 24px;
}

ul {
  margin-bottom: 26px;
  list-style-type: none;
  overflow: auto;
}

li {
  margin-bottom: 20px;
}

li a {
  display: block;
  padding-left: 24px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

li .disabled {
  pointer-events: none;
}

li a.active {
  padding-top: 17px;
  padding-bottom: 16px;
  background-color: #e45f03;
  color: white;
}

li a.active-list {
  padding-top: 17px;
  padding-bottom: 16px;
  background-color: gainsboro;
  color: #e45f03;
  cursor: unset;
}

li a:hover:not(.active) {
    color: #E45F03;
  }

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
