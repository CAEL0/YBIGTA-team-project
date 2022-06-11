<template>
    <section>
        <h1>Result Page</h1>
        <h3>{{username}}님의 결과</h3>
        <h3>{{answer1}}</h3>
        <h3>{{answer2}}</h3>
        <h3>{{answer3}}</h3>
        <h3>{{answer4}}</h3>
        <button>
            <router-link :to="{name: 'Home'}">처음으로 돌아가기</router-link>
        </button>
    </section>
    
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters({
        username: 'getUsername',
        answer1: 'getAnswer1',
        answer2: 'getAnswer2',
        answer3: 'getAnswer3',
        answer4: 'getAnswer4',
    })
}
</script>