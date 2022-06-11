<template>
    <section>
        <h1>It's the Q4</h1>
        <br>
        <h2>분위기</h2><br>
        <h3>연인이나 친구와 둘이 오붓하게
            <input type="radio" v-model="answer" value="10" @change="submit">
        </h3><br>
        <h3>친구들과 여럿이 시끌벅적하게
            <input type="radio" v-model="answer" value="11" @change="submit">
        </h3><br>
        <h3>가족이나 어른들 생신자리
            <input type="radio" v-model="answer" value="12" @change="submit">
        </h3><br>
        <button>
            <router-link :to="{name: 'Q3'}">prev</router-link>
        </button>
        <button>
            <router-link :to="{name: 'Result'}">next</router-link>
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
            this.$store.commit('setAnswer4', this.answer);
        }
    }
}
</script>