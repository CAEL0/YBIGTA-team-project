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
            <img class="wine" src="https://images.vivino.com/thumbs/XJe1bz9fQVCAiFLRNCi4Vg_pb_600x600.png" alt="레 파셀레르 드 쏘, 쥬브리 샹베르탱">
            <p>
              · 이름 : 레 파셀레르 드 쏘, 쥬브리 샹베르탱<br><br>
              · 가격 : 579,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 4 / 5<br><br>
              · 종류 : 레드<br><br>
              · 어울리는 음식 : 스테이크, 소고기<br><br>
            </p><br><br>
          </div>
        </div>
        <div class="recommend">
          <div>
            <img class="wine" src="https://images.vivino.com/thumbs/k5pujCQkRU2AtJLSsvcnmw_pb_600x600.png" alt="레이몬드, 리저브 셀렉션 메를로">
            <p>
              · 이름 : 레이몬드, 리저브 셀렉션 메를로<br><br>
              · 가격 : 190,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 4 / 5<br><br>
              · 종류 : 레드<br><br>
              · 어울리는 음식 : 닭고기, 스테이크, 버섯, 치즈<br><br>
            </p><br><br>
          </div>
        </div>
      </div>
    </section>
    <section class="second">
      <div>
        <div class="title">
          가을에 잘 어울리는 드라이한 힐링 와인
        </div><br>
        <img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95fall_rest_dry.png?raw=true" alt="워드클라우드" style="width: 500px;">
      </div>
      <br><br>
      <div class="last">
        그 외 추천 와인
      </div><br><br>
      <div class="other">
        <div class="recommend">
          <img class="wine" src="https://bestwine24.ru/image/cache/catalog/drinks/d96c922d21e2693bc5393c86e9599e24-540x720.jpg" alt="파밀리아 마로네, 랑게 샤도네이 '메문디스'">
          <p>
            · 이름 : 파밀리아 마로네, 랑게 샤도네이 '메문디스'<br><br>
            · 가격 : 60,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Thale,%20Trebbiano%20d'Abruzzo.png?raw=true" alt="탈레, 트레비아노 다브루쪼">
          <p>
            · 이름 : 탈레, 트레비아노 다브루쪼<br><br>
            · 가격 : 100,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/T6RIqhmIQ-Cy2wcFSaDGeg_pb_600x600.png" alt="샤또 푸에슈오, 프레스티지 루즈">
          <p>
            · 이름 : 샤또 푸에슈오, 프레스티지 루즈<br><br>
            · 가격 : 108,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://mediacore.kyuubi.it/anticaenotecagiulianelli/media/img/2020/7/2/152911-large-valdobbiadene-prosecco-superiore-docg-extra-dry-jeio-bisol.jpg" alt="비솔, 제이오 발도비아데네 프로세코 수페리오레 엑스트라 드라이">
          <p>
            · 이름 : 비솔, 제이오 발도비아데네 프로세코 수페리오레 엑스트라 드라이<br><br>
            · 가격 : 70,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Yali,%20Premium%20Release%20Unoaked%20Chardonnay.png?raw=true" alt="얄리, 프리미엄 릴리즈 언오크드 샤르도네">
          <p>
            · 이름 : 얄리, 프리미엄 릴리즈 언오크드 샤르도네<br><br>
            · 가격 : 19,800원<br><br>
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
  background: linear-gradient(to bottom, rgb(180, 140, 40), white);
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
  color: rgb(180, 140, 40);
  margin: 100px 0px 100px 0px;
}
.second .other {
  display: flex;
  justify-content: center;
}
.second .recommend {
  float: left;
  margin: 100px 0px 100px 0px;
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
  color: rgb(180, 140, 40);
  margin-top: 100px;
}
.buttons i {
  font-size: 50px;
  color: rgb(33, 33, 33);
  margin: 0px 30px 50px 30px;
  cursor: pointer;
}
</style>