<template>
    <section>
        <h1>It's the Q2</h1>
        <br>
        <h2>바디감</h2><br>
        <h3>나는 무거운 게 좋아
            <input type="radio" v-model="answer" value="4" @change="submit">
        </h3><br>
        <h3>나는 목넘김이 가벼운 게 좋아
            <input type="radio" v-model="answer" value="5" @change="submit">
        </h3><br>
        <h3>나는 잘 모르겠어
            <input type="radio" v-model="answer" value="6" @change="submit">
        </h3><br>
        <button>
            <router-link :to="{name: 'Q1'}">prev</router-link>
        </button>
        <button>
            <router-link :to="{name: 'Q3'}">next</router-link>
        </button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            answer: 0,
        }
    },
    methods: {
        submit(){
            this.$store.commit('setAnswer2', this.answer);
        }
    }
}
</script>