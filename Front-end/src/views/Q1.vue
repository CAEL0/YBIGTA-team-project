<template>
  <section>
    <div class="title">
      어떤 계절과 어울리는 와인을 원하시나요?
    </div>
    <div class="choice">
      <label class="spring">
          <input type="radio" v-model="answer" value="spring" @change="submit">
          <span>
            살랑거리는 바람에 벚꽃이 흩날리는 봄
            <i class="fas fa-seedling"></i>
          </span>
      </label>
      <label class="summer">
          <input type="radio" v-model="answer" value="summer" @change="submit">
          <span>
            무더운 날 칠링하고 싶은 여름
            <i class="fas fa-umbrella-beach"></i>
          </span>
      </label>
      <label class="fall">
          <input type="radio" v-model="answer" value="fall" @change="submit">
          <span>
            선선한 바람이 불기 시작하는 가을
            <i class="fab fa-canadian-maple-leaf"></i>
          </span>
      </label>
      <label class="winter">
          <input type="radio" v-model="answer" value="winter" @change="submit">
          <span>
            소복소복 눈이 쌓이는 겨울
            <i class="far fa-snowflake"></i>
          </span>
      </label>
    </div>
    <div class="buttons">
      <button>
        <router-link :to="{name: 'Home'}">
          <i class="fas fa-long-arrow-alt-left"></i>
        </router-link>
      </button>
      <button>
        <router-link :to="{name: 'Q2'}">
          <i class="fas fa-long-arrow-alt-right"></i>
        </router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      answer: ""
    }
  },
  methods: {
    submit(){
      localStorage.setItem('answer1', this.answer);
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(to right bottom, rgb(140, 200, 200), rgb(30, 50, 190));
}
.title {
  font-family: 'BBTreeGB';
  font-size: 40px;
  color: white;
  margin: 200px 0px 200px 0px;
}
label {
  display: inline-block;
  cursor: pointer;
  margin: 0px 50px 0px 50px;
}
input {
  display: none;
}
.choice span {
  display: block;
  padding: 30px 30px 30px 30px;
  font-family: 'BBTreeGB';
  font-size: 22px;
  color: white;
  border: 5px solid white;
  border-radius: 50px;
  position: relative;
  transition: all 0.5s linear;
}
input:checked + span {
  box-shadow: 0 0 30px 3px white;
}
.spring input:checked + span {
  color: rgb(60, 30, 120);
  border-color: white;
  background-color: white;
}
.summer input:checked + span {
  color: rgb(60, 30, 120);
  border-color: white;
  background-color: white;
}
.fall input:checked + span {
  color: rgb(60, 30, 120);
  border-color: white;
  background-color: white;
}
.winter input:checked + span {
  color: rgb(60, 30, 120);
  border-color: white;
  background-color: white;
}
.buttons button {
  height: 80px;
  width: 80px;
  margin: 50px;
  cursor: pointer;
  border: 5px solid white;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0);
  margin: 250px 50px 100px 50px;
}
.buttons i {
  font-size: 50px;
  color: white;
}
</style>