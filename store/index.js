import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedProperties: [],
      token: null,
      user: null
    },
    mutations: {
      setProperties (state, properties) {
        state.loadedProperties = properties
      },
      addProperty (state, property) {
        state.loadedProperties.push(property)
      },
      editProperty (state, editedProperty) {
        const propertyIndex = state.loadedProperties.findIndex(property => property.id === editedProperty.id)
        state.loadedProperties[propertyIndex] = editedProperty
      },
      setToken (state, token) {
        state.token = token
      },
      clearToken (state) {
        state.token = null
      },
      setUser (state, user) {
        state.user = user
        if (process.browser) {
          localStorage.setItem('user', user)
        }
      },
      clearUser (state) {
        state.user = null
        localStorage.removeItem('user')
      },
      clearAuth (state) {
        state.auth = null
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return context.app.$axios
          .$get('/properties')
          .then((data) => {
            const propertyArray = []
            for (const key in data) {
              propertyArray.push({ ...data[key], id: +key + 1 })
            }
            vuexContext.commit('setProperties', propertyArray)
          })
          .catch(e => context.error(e))
      },
      setProperties (vuexContext, properties) {
        vuexContext.commit('setProperties', properties)
      },
      addProperty (vuexContext, property) {
        return this.$axios.$post('/properties', property)
          .then((data) => {
            vuexContext.commit('addProperty', data)
          })
      },
      editProperty (vuexContext, property) {
        return this.$axios.$put('/properties/' + property.id, property)
          .then((res) => {
            vuexContext.commit('editProperty', property)
          })
      },
      authenticateUser (vuexContext, authData) {
        this.$auth.loginWith('local', {
          data: {
            identifier: authData.identifier,
            password: authData.password
          }
        })
          .then((res) => {
            vuexContext.commit('setUser', res.data.user)
            this.$auth.setUser(res.data.user)
            vuexContext.commit('setToken', res.data.jwt)
          })
          .catch(e => console.log(e))
      },
      registerUser (vuexContext, data) {
        this.$axios.post('/auth/local/register', data)
          .catch(e => console.log(e))
      },
      logout (vuexContext) {
        vuexContext.commit('clearToken')
        vuexContext.commit('clearAuth')
        vuexContext.commit('clearUser')
        Cookie.remove('auth._token.local')
        localStorage.removeItem('auth._token.local')
      }
    },
    getters: {
      loadedProperties (state) {
        return state.loadedProperties
      }
    }
  })
}

export default createStore
