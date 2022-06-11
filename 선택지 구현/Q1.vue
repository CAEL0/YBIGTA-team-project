<template>
    <section>
        <h1>It's the Q1</h1>
        <h2> username 저장 여부 테스트용</h2><br>
        <h2> 이름: {{username}}</h2>
        <br>
        <h2>가격대</h2><br>
        <h3>가성비 좋은 와인
            <input type="radio" v-model="answer" value="1" @change="submit">
        </h3><br>
        <h3>특별한 날, 분위기 내기 좋은 와인
            <input type="radio" v-model="answer" value="2" @change="submit">
        </h3><br>
        <h3>오늘은 내가 일론 머스크
            <input type="radio" v-model="answer" value="3" @change="submit">
        </h3><br>
        <button>
            <router-link :to="{name: 'Home'}">prev</router-link>
        </button>
        <button>
            <router-link :to="{name: 'Q2'}">next</router-link>
        </button>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters({
        username: 'getUsername',
    }),
    data() {
        return {
            answer: 0,
        }
    },
    methods: {
        submit(){
            this.$store.commit('setAnswer1', this.answer);
        }
    }
}
</script>