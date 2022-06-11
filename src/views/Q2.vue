<template>
  <section>
    <div class="title">
      어떤 맛의 와인을 원하시나요?
    </div>
    <div class="choice">
      <label class="sweet">
          <input type="radio" v-model="answer" value="sweet" @change="submit">
          <span>
            입문자들도 가볍게 마시기 좋은 달콤하고 가벼운 와인
            <i class="fas fa-feather-alt"></i>
          </span>
      </label>
      <label class="dry">
          <input type="radio" v-model="answer" value="dry" @change="submit">
          <span>
            다양한 맛을 음미할 수 있는 드라이하고 무거운 와인
            <i class="fas fa-weight-hanging"></i>
          </span>
      </label>
    </div>
    <div class="note">
      <p>
        드라이한*= 달지 않고 신 맛 혹은 떫떠름한 맛이 나는<br><br>
        무거운*= 바디감이 무거운
        (예시: 물 → 오렌지주스 → 우유 순으로 더 무거운 음료라고 할 수 있습니다!)
      </p>
    </div>
    <div class="buttons">
      <button>
        <router-link :to="{name: 'Q1'}">
          <i class="fas fa-long-arrow-alt-left"></i>
        </router-link>
      </button>
      <button>
        <router-link :to="{name: 'Q3'}">
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
      localStorage.setItem('answer2', this.answer);
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
  margin: 200px 0px 120px 0px;
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
  margin: 50px;
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
.sweet input:checked + span {
  color: rgb(60, 30, 120);
  border-color: white;
  background-color: white;
}
.dry input:checked + span {
  color: rgb(60, 30, 120);
  border-color: white;
  background-color: white;
}
.note {
  font-family: 'BBTreeGB';
  font-size: 17px;
  color: white;
  border-radius: 50px;
  margin: 50px 0px 0px 0px;
}
.buttons button {
  height: 80px;
  width: 80px;
  cursor: pointer;
  border: 5px solid white;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0);
  margin: 100px 50px 100px 50px;
}
.buttons i {
  font-size: 50px;
  color: white;
}
</style>