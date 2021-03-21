import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../router/index'


Vue.use(Vuex)

export default new Vuex.Store({
  plugin: [createPersistedState()],
  state: {
    auth: "",
    user: "",
  },
  mutations: {
    auth (state, payload) {
      state.auth = payload;
    },
    user (state, payload) {
      state.user = payload;
    },
    logout (state, payload) {
      state.auth = payload;
    },
    changeUserData (state, payload) {
      state.user.profile = payload;
    }
  },
  actions: {
    async login ({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        "https://login-test-success.herokuapp.com/api/login",
        {
          params: {
            email: email,
            password: password
          }
        }
      );
      commit("auth", responseLogin.data.auth);
      router.replace("/home");
    },
    logout ({ commit }) {
      axios
      .post("https://login-test-success.herokuapp.com/api/logout", {
        aith: this.state.auth,
      })
      .then((response) => {
        console.log(response);
        commit("logout", response.data.auth);
        router.replace("/");
      })
        .catch((error) => {
          console.log(error);
      })
      
    }
  },
  modules: {
  }
})
