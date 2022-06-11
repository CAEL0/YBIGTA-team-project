<template>
  <section>
    <section class="first">
      <div class="title">
        오늘 {{username}}님에게 어울리는 와인은?
      </div>
      <div class="top3">
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
            <img class="wine" src="https://images.vivino.com/thumbs/eRYN776cQmaSzKEJQRcRhA_pb_600x600.png" alt="머드 하우스, 피노 누아">
            <p>
              · 이름 : 머드 하우스, 피노 누아<br><br>
              · 가격 : 70,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 3 / 5<br><br>
              · 종류 : 레드<br><br>
              · 어울리는 음식 : 양갈비<br><br>
            </p><br><br>
          </div>
        </div>
      </div>
    </section>
    <section class="second">
      <div>
        <div class="title">
          여름에 잘 어울리는 드라이한 파티 와인
        </div><br>
        <img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95summer_party_dry.png?raw=trues" alt="워드클라우드" style="width: 500px;">
      </div>
      <br><br>
      <div class="last">
        그 외 추천 와인
      </div><br><br>
      <div class="other">
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/fjBaM_ZHTxqQtDa5Qj94JQ_pb_600x600.png" alt="메이오미, 피노 누아">
          <p>
            · 이름 : 메이오미, 피노 누아<br><br>
            · 가격 : 90,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://cdn.shopify.com/s/files/1/0043/9258/3217/products/Pierre-Gaillard-Saint-Joseph-Rouge_grande.jpg?v=1620340043" alt="피에르 가이야르, 생 조셉 루즈">
          <p>
            · 이름 : 피에르 가이야르, 생 조셉 루즈<br><br>
            · 가격 : 90,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://www.viviilvino.it/wp-content/uploads/2020/03/Chianti-Classico-DOCG-Gran-Selezione-Lornano.jpg" alt="로르나노, 키안티 클라시코 그랑 셀레지오네">
          <p>
            · 이름 : 로르나노, 키안티 클라시코 그랑 셀레지오네<br><br>
            · 가격 : 100,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/2VMr_OpcQtyJrK8lsQR3tw_pb_600x600.png" alt="루이스 엠 마티니, 나파 밸리">
          <p>
            · 이름 : 루이스 엠 마티니, 나파 밸리<br><br>
            · 가격 : 45,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/H3Ep9ydpRLKMtDCZoqUfbQ_pb_600x600.png" alt="마르케시 디 바롤로, 랑게 브릭 아멜">
          <p>
            · 이름 : 마르케시 디 바롤로, 랑게 브릭 아멜<br><br>
            · 가격 : 78,000원<br><br>
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
  background: linear-gradient(to bottom, rgb(100, 190, 255), white);
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
  color: rgb(140, 210, 250);
  margin: 100px 0px 100px 0px;
}
.second .other {
  display: flex;
  justify-content: center;
}
.second .recommend {
  float: left;
  margin: 100px 30px 100px 30px;
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
  color: rgb(100, 190, 255);
  margin-top: 100px;
}
.buttons i {
  font-size: 50px;
  color: rgb(33, 33, 33);
  margin: 0px 30px 50px 30px;
  cursor: pointer;
}
</style>