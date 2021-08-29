<template>
  <section>
    <section class="first">
      <div class="title">
        오늘 {{username}}님에게 어울리는 와인은?
      </div>
      <div class="top3">
        <div class="recommend">
          <div>
            <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Eschenhof%20Holzer,%20The%20Orange.png?raw=true" alt="에쉔호프 홀져, 더 오렌지">
            <p>
              · 이름 : 에쉔호프 홀져, 더 오렌지<br><br>
              · 가격 : 100,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 2 / 5<br><br>
              · 종류 : 화이트<br><br>
              · 어울리는 음식 : 해산물, 샐러드<br><br>
            </p><br><br>
          </div>
        </div>
        <div class="recommend">
          <div>
            <img class="wine" src="https://images.vivino.com/thumbs/j_pO3hA6RdeGn37TffYc5Q_pb_600x600.png" alt="카판넬레, 로사토">
            <p>
              · 이름 : 카판넬레, 로사토<br><br>
              · 가격 : 75,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 3 / 5<br><br>
              · 종류 : 로제<br><br>
              · 어울리는 음식 : 디저트, 과일<br><br>
            </p><br><br>
          </div>
        </div>
        <div class="recommend">
          <div>
            <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Napa%20Highlands,%20Chardonnay.png?raw=true" alt="나파 하이랜즈, 샤도네이">
            <p>
              · 이름 : 나파 하이랜즈, 샤도네이<br><br>
              · 가격 : 124,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 4 / 5<br><br>
              · 종류 : 화이트<br><br>
              · 어울리는 음식 : 돼지고기, 돼지<br><br>
            </p><br><br>
          </div>
        </div>
      </div>
    </section>
    <section class="second">
      <div>
        <div class="title">
          봄에 잘 어울리는 드라이한 힐링 와인
        </div><br>
        <img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95spring_rest_dry.png?raw=true" alt="워드클라우드" style="width: 500px;">
      </div>
      <br><br>
      <div class="last">
        그 외 추천 와인
      </div><br><br>
      <div class="other">
        <div class="recommend">
          <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Gerard%20Bertrand,%20Cote%20des%20Roses%20Rose.png?raw=true" alt="제라르 베르트랑, 꼬뜨 로즈 로제">
          <p>
            · 이름 : 제라르 베르트랑, 꼬뜨 로즈 로제<br><br>
            · 가격 : 33,000원<br><br>
          </p><br><br>
        </div>
      </div>
      <div class='buttons'>
        <b-button variant="outline-danger" @click=Nextpage()>
          <i class="fas fa-undo-alt"></i>
        </b-button>
        <b-button class="button" variant="outline-danger" @click=Nextpage()>
          <i class="fas fa-share-alt"></i>
        </b-button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return{
      username: localStorage.getItem('username')
    }
  },
  methods: {
    Nextpage: function(){
      location.href = "./";
    }
  }
}
</script>

<style scoped>
p {
  font-family: 'BBTreeGB';
  font-size: 19px;
  color: rgb(33, 33, 33);
  text-align: left;
}
.first {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(to bottom, rgb(250, 160, 200), white);
}
.first .title {
  font-family: 'BBTreeGB';
  font-size: 40px;
  color: white;
  margin-top: 200px;
}
.first .top3 {
  display: flex;
  justify-content: center;
}
.first .recommend {
  float: left;
  margin: 200px 120px 100px 120px;
}
.first .wine {
  height: 200px;
  width: 200px;
  background: white;
  border: 6px double rgb(33, 33, 33);
  border-radius: 85px;
  margin-bottom: 50px;
}
.second {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  margin-top: 0px;
}
.second .title {
  font-family: 'BBTreeGB';
  font-size: 40px;
  color: rgb(245, 118, 196);
  margin: 100px 0px 100px 0px;
}
.second .other {
  display: flex;
  justify-content: center;
}
.second .recommend {
  float: left;
  margin: 100px 60px 100px 60px;
}
.second .wine {
  height: 150px;
  width: 150px;
  border: 6px double rgb(33, 33, 33);
  border-radius: 60px;
}
.last {
  font-family: 'BBTreeGB';
  font-size: 40px;
  color: rgb(250, 160, 200);
  margin-top: 100px;
}
.buttons i {
  font-size: 50px;
  color: rgb(33, 33, 33);
  margin: 0px 30px 50px 30px;
  cursor: pointer;
}
</style>