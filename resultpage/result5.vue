<template>
<div>
<div> <h2 class="title"> 이름님의 오늘 하루에 어울리는 와인은? </h2> </div><br><br>
<div> 
    <h3 class="recommend"> 추천1 </h3><br>
    <div><img class="wine" src="https://www.wine-searcher.com/images/labels/30/88/10923088.jpg?width=327&height=280&fit=bounds&canvas=327,280" alt="크리스마스 아스티" style="width: 200px;">
    <p> <span class="info"> · 이름: 크리스마스 아스티 </span> <span class="info1"> · 당도: 1.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 30,000 </span> <span class="info1"> · 바디 : 4.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 스파클링</span> <span class="info1" > ·어울리는 음식: 치즈, 스테이크, 생선, 파스타 </span><br>
    </p>
    
</div>
   
</div>

<div> 
    <h3 class="recommend"> 추천2 </h3><br>
    <div><img class="wine" src="https://cdn.shopify.com/s/files/1/1504/5726/products/APWCHA18-R.png?v=1601881185" alt="아멜리아 파크, 리저브 샤도네이" style="width: 200px;">
    <p> <span class="info"> · 이름: 아멜리아 파크, 리저브 샤도네이 </span> <span class="info1"> · 당도: 5.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 175,000 </span> <span class="info1"> · 바디 : 5.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 화이트 </span> <span class="info1" > ·어울리는 음식: 디저트, 과일, 샐러드 </span><br>
    </p>
    
</div>
   
</div>

<div> 
    <h3 class="recommend"> 추천3 </h3><br>
    <div><img class="wine" src="https://images.vivino.com/thumbs/uNXGeRcgSi2HjSqEBM--mQ_pb_600x600.png" alt="또스띠, 모스카토 다스티 하트" style="width: 200px;">
    <p> <span class="info"> · 이름: 또스띠, 모스카토 다스티 하트 </span> <span class="info1"> · 당도: 4.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 35,000 </span> <span class="info1"> · 바디 : 2.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 화이트 </span> <span class="info1" > ·어울리는 음식: 디저트, 과일</span><br>
    </p>
    
</div>
   
</div>
<br><br>
<div>
    <h3> 여름에 잘 어울리는 달콤,상큼한 힐링 와인  </h3>
    <div><img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95summer_rest_sweet.png?raw=true" alt="워드클라우드" style="width: 500px;">
    
</div></div>
<br><br>

<div>
    <h3> 그 외 추천 와인 </h3><br><br>
    <div><img class="wine1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI22c8Z0_ePH8R39-o6LHSS0irUkTDwUb5zQ&usqp=CAU" alt="트라이마리" style="width: 100px;">
    <p> <span class="info"> · 이름: 트라이마리 </span> <span class="info1"> · 가격: 42,000</span></p></div><br><br>

    <div><img class="wine1" src="https://images.vivino.com/thumbs/S1bCLE-ERc-aJnSsH7dYTg_pb_600x600.png" alt="에라스모, 로제 드 무르베드르" style="width: 100px;">
    <p> <span class="info"> · 이름: 에라스모, 로제 드 무르베드르 </span> <span class="info1"> · 가격: 56,000</span> </p> </div><br><br>


    </div>





<br><br>


 <div> <b-button variant="outline-danger" @click=Nextpage()>다시하기</b-button>

 <b-button class="button" variant="outline-danger" @click=Nextpage()>공유하기</b-button></div><br><br> </div> 

</template>

<script>

export default {
data(){

    return{

    };
},

methods:{
        Nextpage: function(){
        location.href = "./";    
    
    }

    

}


};
</script>


<style>

    .wine{

        border: solid black;
        border-radius: 50%;
        object-fit: cover;
        float: left;
        margin-left: 25%;
        display:block

    }

    .recommend{

        text-align: left;
        margin-left: 25%;
    }

    .info{
      text-align: left;  
      position: relative;
      font-size: 2em;
    }

    .info1{
        font-size: 2em;
        margin-left: 20px;
        margin-right: 20%;
    }

        .wine1{

        border: solid black;
        border-radius: 50%;
        object-fit: cover;
        float: left;
        margin-left: 25%;
    }

    .button{
        margin-left: 10px;
    }
</style>