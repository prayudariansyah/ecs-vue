<template>
  <div></div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'AuthUser',
  async mounted() {
    axios.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.token;
    await axios.get('/api/user/show')
      .then(response => {
        const datas = response.data;
        const messages = datas.meta.message;
        const user = datas.data;
        this.$emit('sendData', [user, messages]);
      })
      .catch(error => {
        console.log(error);
      });
  },
}
</script>