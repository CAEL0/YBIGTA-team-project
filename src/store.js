import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        username:"",
        answer1: 0,
        answer2: 0,
        answer3: 0,
    },
    getters:{
        getUsername(state) {
            return state.username;
        },
        getAnswer1(state) {
            return state.answer1;
        },
        getAnswer2(state) {
            return state.answer2;
        },
        getAnswer3(state) {
            return state.answer3;
        },
    },
    mutations: {
        setUsername(state, payload) {
            state.username = payload;
        },
        setAnswer1(state, answer) {
            state.answer1 = answer;
        },
        setAnswer2(state, answer) {
            state.answer2 = answer;
        },
        setAnswer3(state, answer) {
            state.answer3 = answer;
        },
    }
     
});