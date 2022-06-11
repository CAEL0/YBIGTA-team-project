<template>
  <div class="getUsername">
    <input type="text" v-model="username" @change="addUsername">
  </div>
</template>

<script>
export default {
  name: 'GetUsername',
  data(){
    return {
      username: ""
    }
  },
  methods: {
    addUsername(){
      localStorage.setItem("username", this.username)
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.getUsername {
  width: 400px;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  border-color: rgb(33, 33, 33);
  border-style: double;
  background: rgba(0, 0, 0, 0);
}
.getUsername input {
  font-family: 'BBTreeGB';
  font-size: 25px;
  color: rgb(33, 33, 33);
  text-align: center;
  background: rgba(0, 0, 0, 0);
  width: 300px;
  border-style: none;
}
</style>