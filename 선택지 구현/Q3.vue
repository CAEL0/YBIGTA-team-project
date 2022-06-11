<template>
    <section>
        <h1>It's the Q3</h1>
        <br>
        <h2>당도</h2><br>
        <h3>단 게 좋아
            <input type="radio" v-model="answer" value="7" @change="submit">
        </h3><br>
        <h3>단 게 싫어
            <input type="radio" v-model="answer" value="8" @change="submit">
        </h3><br>
        <h3>적당한 게 좋아
            <input type="radio" v-model="answer" value="9" @change="submit">
        </h3><br>
        <button>
            <router-link :to="{name: 'Q2'}">prev</router-link>
        </button>
        <button>
            <router-link :to="{name: 'Q4'}">next</router-link>
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
            this.$store.commit('setAnswer3', this.answer);
        }
    }
}
</script>