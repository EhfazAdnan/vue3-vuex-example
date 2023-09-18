import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            counter: 0
        }
    },
    mutations : {
        increment(state){
            state.counter++
        },
        incrementByNumber(state, payload){
            state.counter = state.counter + payload
        }
    }
})

createApp(App).use(store).mount('#app')
