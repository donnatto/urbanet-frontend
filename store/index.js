import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedProperties: [],
      token: null
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
              propertyArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setProperties', propertyArray)
          })
          .catch(e => context.error(e))
      },
      setProperties (vuexContext, properties) {
        vuexContext.commit('setProperties', properties)
      },
      authenticateUser (vuexContext, authData) {
        this.$auth.loginWith('local', {
          data: {
            identifier: authData.identifier,
            password: authData.password
          }
        })
          .then((res) => {
            this.$auth.setUser(res.data.user)
            vuexContext.commit('setToken', res.data.jwt)
          })
          .catch(e => console.log(e))
      },
      logout (vuexContext) {
        vuexContext.commit('clearToken')
        vuexContext.commit('clearAuth')
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
