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
            <img class="wine" src="https://cdn.shopify.com/s/files/1/1504/5726/products/APWCHA18-R.png?v=1601881185" alt="아멜리아 파크, 리저브 샤도네이">
            <p>
              · 이름 : 아멜리아 파크, 리저브 샤도네이<br><br>
              · 가격 : 175,000원<br><br>
              · 당도 : 5 / 5<br><br>
              · 바디 : 5 / 5<br><br>
              · 종류 : 화이트<br><br>
              · 어울리는 음식 : 디저트, 과일, 샐러드<br><br>
            </p><br><br>
          </div>
        </div>
        <div class="recommend">
          <div>
            <img class="wine" src="https://images.vivino.com/thumbs/uNXGeRcgSi2HjSqEBM--mQ_pb_600x600.png" alt="또스띠, 모스카토 다스티 하트">
            <p>
              · 이름 : 또스띠, 모스카토 다스티 하트<br><br>
              · 가격 : 35,000원<br><br>
              · 당도 : 4 / 5<br><br>
              · 바디 : 2 / 5<br><br>
              · 종류 : 화이트<br><br>
              · 어울리는 음식 : 디저트, 과일<br><br>
            </p><br><br>
          </div>
        </div>
      </div>
    </section>
    <section class="second">
      <div>
        <div class="title">
          여름에 잘 어울리는 달콤, 상큼한 파티 와인
        </div><br>
        <img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95summer_party_sweet.png?raw=true" alt="워드클라우드" style="width: 500px;">
      </div>
      <br><br>
      <div class="last">
        그 외 추천 와인
      </div><br><br>
      <div class="other">
        <div class="recommend">
          <img class="wine" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI22c8Z0_ePH8R39-o6LHSS0irUkTDwUb5zQ&usqp=CAU" alt="트라이마리">
          <p>
            · 이름 : 트라이마리<br><br>
            · 가격 : 42,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/S1bCLE-ERc-aJnSsH7dYTg_pb_600x600.png" alt="에라스모, 로제 드 무르베드르">
          <p>
            · 이름 : 에라스모, 로제 드 무르베드르<br><br>
            · 가격 : 56,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Frontera,%20Premium%20Sparkling%20Sweet%20Rose.png?raw=true" alt="프론테라, 프리미엄 스파클링 스위트 로제">
          <p>
            · 이름 : 프론테라, 프리미엄 스파클링 스위트 로제<br><br>
            · 가격 : 14,900원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://media-verticommnetwork1.netdna-ssl.com/wines/masca-del-tacco-rosato-rosi-1676773-s514_e.jpg" alt="마스카 델 타코, 로시 피노 네로 로사토">
          <p>
            · 이름 : 마스카 델 타코, 로시 피노 네로 로사토<br><br>
            · 가격 : 38,000원<br><br>
          </p><br><br>
        </div>
        <div class="recommend">
          <img class="wine" src="https://images.vivino.com/thumbs/2VPYzIHMTv2vjp5nlgJFWA_pb_600x600.png" alt="로클랜드, 초콜릿 박스 스파클링 쉬라즈">
          <p>
            · 이름 : 로클랜드, 초콜릿 박스 스파클링 쉬라즈<br><br>
            · 가격 : 38,000원<br><br>
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