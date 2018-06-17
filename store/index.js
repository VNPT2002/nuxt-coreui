import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import sysuser from './modules/sysuser'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({    
    modules: {
      login,
      sysuser
    }
  })
}
export default createStore
