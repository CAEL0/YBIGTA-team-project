<template>
  <section>
    <h1 @timeupdate="refreshAll"></h1>
    <div v-if="finalResult == 'result1'">
      <button>
        <router-link :to="{name: 'result1'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result2'">
      <button>
        <router-link :to="{name: 'result2'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result3'">
      <button>
        <router-link :to="{name: 'result3'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result4'">
      <button>
        <router-link :to="{name: 'result4'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result5'">
      <button>
        <router-link :to="{name: 'result5'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result6'">
      <button>
        <router-link :to="{name: 'result6'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result7'">
      <button>
        <router-link :to="{name: 'result7'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result8'">
      <button>
        <router-link :to="{name: 'result8'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result9'">
      <button>
        <router-link :to="{name: 'result9'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result10'">
      <button>
        <router-link :to="{name: 'result10'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result11'">
      <button>
        <router-link :to="{name: 'result11'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result12'">
      <button>
        <router-link :to="{name: 'result12'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result13'">
      <button>
        <router-link :to="{name: 'result13'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result14'">
      <button>
        <router-link :to="{name: 'result14'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result15'">
      <button>
        <router-link :to="{name: 'result15'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <div v-else-if="finalResult == 'result16'">
      <button>
        <router-link :to="{name: 'result16'}">
          <span style="color:white">
            <i class="fas fa-caret-right"></i>
          </span>
        </router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      finalResult: localStorage.getItem('finalResult')
    }
  },
  methods: {
    refreshAll() {
      // 새로고침
      this.$router.go();
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right bottom, rgb(140, 200, 200), rgb(30, 50, 190));
}
button {
  font-size: 100px;
  width: 150px;
  height: 150px;
  border: 15px solid white;
  border-radius: 90px;
  background-color: rgba(0, 0, 0, 0);
}
</style>