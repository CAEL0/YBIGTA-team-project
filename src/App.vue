<template>
  <div id="app">
    <main>
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </main>
  </div>
</template>


<script>

export default {
  
  name: "App",
  data() {
    return {
      transitionName: "",
    }
  },
  watch: {
    $route(to,from){
      if(to.meta.page==null || from.meta.page == null){
        this.transitionName = "fade";
      }else{
        this.transitionName = to.meta.page > from.meta.page ? "next" : "prev";
      }
      console.log(this.transitionName);
    }
  },
};
</script>

<style>
body {
  text-align: center;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rga(0,0,0,0.03);
}

</style>



<style>
@font-face {
    font-family: 'BBTreeGB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGB.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'BBTreeGR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#app {
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: #f6fdfd;
}
</style>

// 페이지 전환 효과 스타일 코드
<style>
.next-leave-to { animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; }
.next-enter-to { animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1; }
.prev-leave-to { animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1; }
.prev-enter-to { animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; }
@keyframes leaveToLeft { from { transform: translateX(0); } to { transform: translateX(-25%); filter: brightness(0.5); } }
@keyframes enterFromLeft { from { transform: translateX(-25%); filter: brightness(0.5); } to { transform: translateX(0); } }
@keyframes leaveToRight { from { transform: translateX(0); } to { transform: translateX(100%); } } 
@keyframes enterFromRight { from { transform: translateX(100%); } to { transform: translateX(0); } }

.fade-enter-active, .fade-leave-active { transition: opacity .8s; } 
.fade-enter, .fade-leave-to { opacity: 0; }
</style>



