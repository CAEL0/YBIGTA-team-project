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
            <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Yali,%20Premium%20Release%20Unoaked%20Chardonnay.png?raw=true" alt="얄리, 프리미엄 릴리즈 언오크드 샤르도네">
            <p>
              · 이름 : 얄리, 프리미엄 릴리즈 언오크드 샤르도네<br><br>
              · 가격 : 19,800원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 2 / 5<br><br>
              · 종류 : 화이트<br><br>
              · 어울리는 음식 : 치즈, 해산물, 리조또, 파스타<br><br>
            </p><br><br>
          </div>
        </div>
        <div class="recommend">
          <div>
            <img class="wine" src="https://www.ocado.com/productImages/530/530399011_0_640x640.jpg?identifier=39009e1fb31fb791f72edf48f6b4ad40" alt="그랜트 버지, 쏜 리슬링">
            <p>
              · 이름 : 그랜트 버지, 쏜 리슬링<br><br>
              · 가격 : 70,000원<br><br>
              · 당도 : 1 / 5<br><br>
              · 바디 : 3 / 5<br><br>
              · 종류 : 화이트<br><br>
              · 어울리는 음식 : 해산물<br><br>
            </p><br><br>
          </div>
        </div>
      </div>
    </section>
    <section class="second">
      <div>
        <div class="title">
          가을에 잘 어울리는 달콤, 상큼한 힐링 와인
        </div><br>
        <img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95fall_rest_sweet.png?raw=true" alt="워드클라우드" style="width: 500px;">
      </div>
      <br><br>
      <div class="last">
        그 외 추천 와인
      </div><br><br>
      <div class="other">
        <div class="recommend">
          <img class="wine" src="http://cdn.shopify.com/s/files/1/0397/3509/products/TropicalBosioMoscatoPassionfruit_1200x1200.png?v=1626517711" alt="보시오, 트로피칼 모스카토 패션 후르츠">
          <p>
            · 이름 : 보시오, 트로피칼 모스카토 패션 후르츠<br><br>
            · 가격 : 24,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/nYRyJx6TSlegqf-zjYdl6A_pb_600x600.png" alt="실레니, 셀라 셀렉션 스파클링 소비뇽 블랑">
          <p>
            · 이름 : 실레니, 셀라 셀렉션 스파클링 소비뇽 블랑<br><br>
            · 가격 : 60,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://cdn.enviedechamp.com/3658-large_default/grand-rose-brut.jpg" alt="고세, 그랑 로제 브뤼">
          <p>
            · 이름 : 고세, 그랑 로제 브뤼<br><br>
            · 가격 : 222,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/f1nfJpgMQjuR5-e6r8SwkA_pb_600x600.png" alt="도멘 라파주, 꼬떼 플로랄">
          <p>
            · 이름 : 도멘 라파주, 꼬떼 플로랄<br><br>
            · 가격 : 21,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/YnWZDwriRRSpBAUZeRnXLw_pb_600x600.png" alt="캐년 오크, 샤르도네">
          <p>
            · 이름 : 캐년 오크, 샤르도네<br><br>
            · 가격 : 25,000원<br><br>
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