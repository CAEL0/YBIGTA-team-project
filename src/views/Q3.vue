  
<template>
  <section>
    <div class="title">
      어떤 분위기에서 와인을 즐기고 싶으신가요?
    </div>
    <div class="choice">
      <label class="party">
          <input type="radio" v-model="answer" value="party" @change="submit">
          <span>
            즐거운 날의 시끌벅적 신나는 파티 분위기
            <i class="fas fa-birthday-cake"></i>
          </span>
      </label>
      <label class="rest">
          <input type="radio" v-model="answer" value="rest" @change="submit">
          <span>
            여유로운 날의 조용하고 평화로운 힐링 분위기
            <i class="fas fa-cat"></i>
          </span>
      </label>
    </div>
    <div class="buttons">
      <button>
        <router-link :to="{name: 'Q2'}">
          <i class="fas fa-long-arrow-alt-left"></i>
        </router-link>
      </button>
      <button>
        <form @click="[computeResult(), refreshAll()]">
          <router-link :to="{name: 'result_loading'}">
            <i class="fas fa-long-arrow-alt-right"></i>
          </router-link>
        </form>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      answer: "",
      answer1: localStorage.getItem('answer1'),
      answer2: localStorage.getItem('answer2')
    }
  },
  methods: {
    refreshAll() {
      // 새로고침
      this.$router.go();
      console.log("새로고침");
    },
    submit(){
      localStorage.setItem('answer3', this.answer);
      // this.computeResult();
    },
    computeResult(){
      if(this.answer1 == 'spring' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result1');
      }
      else if(this.answer1 == 'spring' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result2');
      }
      else if(this.answer1 == 'spring' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result3');
      }
      else if(this.answer1 == 'spring' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result4');
      }
      else if(this.answer1 == 'summer' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result5');
      }
      else if(this.answer1 == 'summer' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result6');
      }
      else if(this.answer1 == 'summer' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result7');
      }
      else if(this.answer1 == 'summer' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result8');
      }
      else if(this.answer1 == 'fall' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result9');
      }
      else if(this.answer1 == 'fall' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result10');
      }
      else if(this.answer1 == 'fall' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result11');
      }
      else if(this.answer1 == 'fall' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result12');
      }
      else if(this.answer1 == 'winter' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result13');
      }
      else if(this.answer1 == 'winter' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'rest'){
        localStorage.setItem('finalResult', 'result14');
      }
      else if(this.answer1 == 'winter' && this.answer2 == 'sweet' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result15');
      }
      else if(this.answer1 == 'winter' && this.answer2 == 'dry' && localStorage.getItem('answer3') == 'party'){
        localStorage.setItem('finalResult', 'result16');
      }
      console.log(localStorage.getItem('finalResult'));
    },
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
.party input:checked + span {
  color: rgb(60, 30, 120);
  border-color: white;
  background-color: white;
}
.rest input:checked + span {
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
  margin: 150px 50px 100px 50px;
}
.buttons i {
  font-size: 50px;
  color: white;
}
</style>