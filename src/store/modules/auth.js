import axios from 'axios'
import router from '@/router.js'

const state = {
    token : null,
    loggedInUser: [],
    errorMessage: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    GET_USER: (state, user) => {
        state.loggedInUser = user
    },
    GET_ERROR_MESSAGE: (state, message) => {
        state.errorMessage = message
    }
}

const actions = {
    logout: ({commit}) => {
        commit('SET_TOKEN', null)
    },
    async login({ commit }, { email, password }) {
        try {
            const { data } = await axios.post('http://localhost:3000/api/users/login', { email, password })
            commit('SET_TOKEN', data.token)
            commit('GET_USER', data.user)
            console.log('\n\n\n\n\n', data.user)
            router.push('/')
        } catch (error) {
            commit('GET_ERROR_MESSAGE', error.response.data.message)
        }
    }
}

const getters = {
    isLoggedIn (state) {
        return !!state.token
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}