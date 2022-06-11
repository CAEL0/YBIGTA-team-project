<template>
<div>
<div> <h2 class="title"> 이름님의 오늘 하루에 어울리는 와인은? </h2> </div><br><br>
<div> 
    <h3 class="recommend"> 추천1 </h3><br>
    <div><img class="wine" src="https://media-verticommnetwork1.netdna-ssl.com/wines/paul-jaboulet-aine-crozes-hermitage-domaine-de-thalabert-843881-s632.jpg" alt="폴 자불레 애네, 크로즈 에르미타주 '도멘 드 탈라베'" style="width: 200px;">
    <p> <span class="info"> · 이름: 폴 자불레 애네, 크로즈 에르미타주 '도멘 드 탈라베'	 </span> <span class="info1"> · 당도: 1.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 135,000 </span> <span class="info1"> · 바디 : 4.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 레드 </span> <span class="info1" > ·어울리는 음식: 양고기 </span><br>
    </p>
    
</div>
   
</div>

<div> 
    <h3 class="recommend"> 추천2 </h3><br>
    <div><img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Napa%20Highlands,%20Chardonnay.png?raw=true" alt="나파 하이랜즈, 샤도네이" style="width: 200px;">
    <p> <span class="info"> · 이름: 나파 하이랜즈, 샤도네이	 </span> <span class="info1"> · 당도: 1.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 124,000 </span> <span class="info1"> · 바디 : 4.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 화이트 </span> <span class="info1" > ·어울리는 음식: 돼지고기, 돼지 </span><br>
    </p>
    
</div>
   
</div>

<div> 
    <h3 class="recommend"> 추천3 </h3><br>
    <div><img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Ch%C3%A2teau-Rombeau-Rierre-de-La-Fabr%C3%A8gue.jpg?raw=true" alt="샤또 롱보, 뀌베 삐에르 드 라 파브레귀" style="width: 200px;">
    <p> <span class="info"> · 이름: 샤또 롱보, 뀌베 삐에르 드 라 파브레귀 </span> <span class="info1"> · 당도: 1.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 65,000 </span> <span class="info1"> · 바디 : 4.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 레드 </span> <span class="info1" > ·어울리는 음식: 소고기 </span><br>
    </p>
    
</div>
   
</div>
<br><br>
<div>
    <h3> 겨울에 잘 어울리는 드라이한 힐링 와인  </h3>
    <div><img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95winter_rest_dry.png?raw=true" alt="워드클라우드" style="width: 500px;">
    
</div></div>
<br><br>

<div>
    <h3> 그 외 추천 와인 </h3><br><br>
    
    <div><img class="wine1" src="https://images.vivino.com/thumbs/j_pO3hA6RdeGn37TffYc5Q_pb_600x600.png" alt="카판넬레, 로사토" style="width: 100px;">
    <p> <span class="info"> · 이름: 카판넬레, 로사토 </span> <span class="info1"> · 가격: 75,000</span> </p> </div><br><br>

    <div><img class="wine1" src="https://github.com/eunddodi/wine4u/blob/main/pic/Agricola%20Punica,%20Barrua.png?raw=true" alt="아그리콜라 푸니카, 바루아" style="width: 100px;">
    <p> <span class="info"> · 이름: 아그리콜라 푸니카, 바루아 </span> <span class="info1"> · 가격: 140,000</span> </p> </div><br><br> 

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