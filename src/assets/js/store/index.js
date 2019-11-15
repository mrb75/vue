import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA={
    state:{
        text:"daramad sarshar",
    },getters:{

    },mutations:{

    },actions:{

    }
}

export default new Vuex.Store({
    modules: {
        a:moduleA,
    },
    state: {
        text: "text",
        texts: [{ name: "ali", age: 10 }, { name: "mohammad", age: 16 }],
    },
    getters: {
        getAli: state => {
            return state.texts.find(texts => texts.name =="ali")
        }
    },
    mutations: {
        increament(state) {
            state.texts[0].age += 1;
        }
    },
    actions: {
        increamentAsync({ commit }) {
            setTimeout(() => {
                commit("increament")
            },1000)
        },
        async inc({ commit }) {
            setTimeout(() => {
                commit("increament")
            }, 100)
        }
    }
})