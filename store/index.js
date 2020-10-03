import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedProperties: []
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
