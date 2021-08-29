<template>
  <section>
    <section class="first">
      <div class="title">
        오늘 {{username}}님에게 어울리는 와인은?
      </div>
      <div class="top3">
        <div class="recommend">
          <div>
            <img class="wine" src="https://www.wine-searcher.com/images/labels/30/88/10923088.jpg?width=327&height=280&fit=bounds&canvas=327,280" alt="크리스마스 아스티">
            <p>
              · 이름 : 크리스마스 아스티<br><br>
              · 가격 : 30,000원<br><br>
              · 당도 : 4 / 5<br><br>
              · 바디 : 2 / 5<br><br>
              · 종류 : 스파클링<br><br>
              · 어울리는 음식 : 과일, 샐러드<br><br>
            </p><br><br>
          </div>
        </div>
        <div class="recommend">
          <div>
            <img class="wine" src="https://images.vivino.com/thumbs/S1bCLE-ERc-aJnSsH7dYTg_pb_600x600.png" alt="에라스모, 로제 드 무르베드르">
            <p>
              · 이름 : 에라스모, 로제 드 무르베드르<br><br>
              · 가격 : 56,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 2 / 5<br><br>
              · 종류 : 로제<br><br>
              · 어울리는 음식 : 파스타, 샐러드<br><br>
            </p><br><br>
          </div>
        </div>
        <div class="recommend">
          <div>
            <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Ch%C3%A2teau-Rombeau-Rierre-de-La-Fabr%C3%A8gue.jpg?raw=true" alt="샤또 롱보, 뀌베 삐에르 드 라 파브레귀">
            <p>
              · 이름 : 샤또 롱보, 뀌베 삐에르 드 라 파브레귀<br><br>
              · 가격 : 65,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 4 / 5<br><br>
              · 종류 : 레드<br><br>
              · 어울리는 음식 : 소고기<br><br>
            </p><br><br>
          </div>
        </div>
      </div>
    </section>
    <section class="second">
      <div>
        <div class="title">
          겨울에 잘 어울리는 달콤, 상큼한 파티 와인
        </div><br>
        <img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95winter_party_sweet.png?raw=true" alt="워드클라우드" style="width: 500px;">
      </div>
      <br><br>
      <div class="last">
        그 외 추천 와인
      </div><br><br>
      <div class="other">
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/TRml9zZORZSdpmOVvBXOQQ_pb_600x600.png" alt="도미니오 데 라 베가, 디 엔드">
          <p>
            · 이름 : 도미니오 데 라 베가, 디 엔드<br><br>
            · 가격 : 45,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/j_pO3hA6RdeGn37TffYc5Q_pb_600x600.png" alt="카판넬레, 로사토">
          <p>
            · 이름 : 카판넬레, 로사토<br><br>
            · 가격 : 75,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Taittinger,%20Nocturne%20Citi%20Light%20'Luminous'.png?raw=true" alt="떼땅져, 녹턴 시티 라이트 '루미너스'">
          <p>
            · 이름 : 떼땅져, 녹턴 시티 라이트 '루미너스'<br><br>
            · 가격 : 319,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://cliimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=999&simg=2019070409535302808204ead079111420541196.jpg" alt="얄리, 프리미엄 릴리즈 언오크드 샤르도네">
          <p>
            · 이름 : 얄리, 프리미엄 릴리즈 언오크드 샤르도네<br><br>
            · 가격 : 19,800원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="http://cdn.shopify.com/s/files/1/0397/3509/products/TropicalBosioMoscatoPassionfruit_1200x1200.png?v=1626517711" alt="보시오, 트로피칼 모스카토 패션 후르츠">
          <p>
            · 이름 : 보시오, 트로피칼 모스카토 패션 후르츠<br><br>
            · 가격 : 24,000원<br><br>
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
  background: linear-gradient(to bottom, rgb(100, 120, 180), white);
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
  color: rgb(100, 120, 180);
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
  color: rgb(100, 120, 180);
  margin-top: 100px;
}
.buttons i {
  font-size: 50px;
  color: rgb(33, 33, 33);
  margin: 0px 30px 50px 30px;
  cursor: pointer;
}
</style>