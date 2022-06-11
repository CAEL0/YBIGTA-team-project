<template>
<div>
<div> <h2 class="title"> 이름님의 오늘 하루에 어울리는 와인은? </h2> </div><br><br>
<div> 
    <h3 class="recommend"> 추천1 </h3><br>
    <div><img class="wine" src="https://github.com/eunddodi/wine4u/blob/main/pic/Napa%20Highlands,%20Chardonnay.png?raw=true" alt="나파 하이랜즈, 샤도네이" style="width: 200px;">
    <p> <span class="info"> · 이름: 나파 하이랜즈, 샤도네이	 </span> <span class="info1"> · 당도: 1.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 124,000 </span> <span class="info1"> · 바디 : 4.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 화이트 </span> <span class="info1" > ·어울리는 음식: 돼지고기, 돼지 </span><br>
    </p>
    
</div>
   
</div>

<div> 
    <h3 class="recommend"> 추천2 </h3><br>
    <div><img class="wine" src="https://images.vivino.com/thumbs/j_pO3hA6RdeGn37TffYc5Q_pb_600x600.png" alt="카판넬레, 로사토" style="width: 200px;">
    <p> <span class="info"> · 이름: 카판넬레, 로사토 </span> <span class="info1"> · 당도: 1.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 75,000 </span> <span class="info1"> · 바디 : 3.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 로제 </span> <span class="info1" > ·어울리는 음식: 디저트, 과일 </span><br>
    </p>

</div>
   
</div>

<div> 
    <h3 class="recommend"> 추천3 </h3><br>
    <div><img class="wine" src="https://lh3.googleusercontent.com/proxy/oSpTEdUvD4hXQOSo8sMFTP-V5x7VDihHuUpJVobpQgPJnQ9DmVokJRd8QB1yCB6dfZvco3N1rEWdeIERAFq67Aoiceqvz5fPBMU_46qa287r_OBwPQ" alt="메이오미, 피노 누아" style="width: 200px;">
    <p> <span class="info"> · 이름: 메이오미, 피노 누아 </span> <span class="info1"> · 당도: 1.0 / 5.0</span><br><br>
    <span class="info"> · 가격: 90,000 </span> <span class="info1"> · 바디 : 3.0 / 5.0 </span> <br><br>
    <span class="info"> · 종류: 레드 </span> <span class="info1" > ·어울리는 음식: 피자, 파스타, 양고기 </span><br>
    </p>
    
</div>
   
</div>
<br><br>
<div>
    <h3> 여름에 잘 어울리는 드라이한 힐링 와인  </h3>
    <div><img class="wordcloud" src="https://github.com/CAEL0/ybigtaTeamProject/blob/master/Modeling/%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95/%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95summer_rest_dry.png?raw=true" alt="워드클라우드" style="width: 500px;">
    
</div></div>
<br><br>

<div>
    <h3> 그 외 추천 와인 </h3><br><br>
    <div><img class="wine1" src="https://images.vivino.com/thumbs/H3Ep9ydpRLKMtDCZoqUfbQ_pb_600x600.png" alt="마르케시 디 바롤로, 랑게 브릭 아멜" style="width: 100px;">
    <p> <span class="info"> · 이름: 마르케시 디 바롤로, 랑게 브릭 아멜 </span> <span class="info1"> · 가격: 78,000</span></p></div><br><br>

    <div><img class="wine1" src="https://github.com/eunddodi/wine4u/blob/main/pic/Gerard%20Bertrand,%20Cote%20des%20Roses%20Rose.png?raw=true" alt="제라르 베르트랑, 꼬뜨 로즈 로제" style="width: 100px;">
    <p> <span class="info"> · 이름: 제라르 베르트랑, 꼬뜨 로즈 로제 </span> <span class="info1"> · 가격: 33,000</span> </p> </div><br><br>

    
    <div><img class="wine1" src="https://images.vivino.com/thumbs/XNrTPuL5RF-brKqneLQEWw_pb_600x600.png" alt="알렉산드린 비오니에" style="width: 100px;">
    <p> <span class="info"> · 이름: 알렉산드린 비오니에 </span> <span class="info1"> · 가격: 50,000</span> </p> </div><br><br>

    <div><img class="wine1" src="https://github.com/eunddodi/wine4u/blob/main/pic/M.%20Chapoutier,%20Deschants%20Saint%20Joseph%20artist.png?raw=true" alt="엠 샤푸티에, 데샹트 생 조셉 '아티스트 레이블'" style="width: 100px;">
    <p> <span class="info"> · 이름: 엠 샤푸티에, 데샹트 생 조셉 '아티스트 레이블' </span> <span class="info1"> · 가격: 120,000</span> </p> </div><br><br> 



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