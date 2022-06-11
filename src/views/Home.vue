<template>
  <div class="home">
    <img alt="main image" src="../assets/yellow.jpg">
    <h1>
      YBIGTA Wine Recommendation Service
      <span style="color:rgb(33, 33, 33); font-size: 20px;">
        <i class="fas fa-wine-glass-alt fa-2x"></i>
      </span>
    </h1>
    <p>
      안녕하세요. YBIGTA Wine4U 입니다!<br><br>
      와인에 익숙치 않은 여러분을 위해 와인을 추천해드리겠습니다. :)
    </p>
    <br>
    <p>
      이름을 입력해주세요.
    </p>
    <div class="get">
      <GetUsername></GetUsername>
    </div><br>
    <div>
      <button class="start">
        <router-link :to="{name: 'Q1'}">
          <span style="color:rgb(33, 33, 33)">
            <i class="fas fa-play"></i>
          </span>
        </router-link>
      </button>
    </div>
    <br><br><br>
  </div>
</template>

<script>
import GetUsername from './GetUsername.vue'
export default {
  name: 'Home',
  components: {
    GetUsername
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(to top, rgb(180, 180, 140), white);
}
img {
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  margin: 0;
}
h1 {
  font-family: 'BBTreeGB';
  color: rgb(33, 33, 33);
}
p, h3 {
  font-family: 'BBTreeGB';
  font-size: 21px;
  color: rgb(33, 33, 33);
}
.get {
  display: flex;
  justify-content: center;
}
.start {
  font-size: 30px;
  width: 70px;
  height: 70px;
  border: 10px solid rgb(33, 33, 33);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0);
}
</style>