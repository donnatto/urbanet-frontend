<template>
  <b-container class="mb-5">
    <b-jumbotron header="Propiedades" lead="Estas son tus propiedades subidas. Puedes editar su informacion" text-variant="white" class="jumbo mt-3" />
    <PropertyList :properties="loadedProperties" :is-edit="true" />
  </b-container>
</template>

<script>
import PropertyList from '@/components/properties/PropertyList'

export default {
  components: {
    PropertyList
  },
  asyncData (context) {
    return context.app.$axios
      .$get('/users/' + context.$auth.user.id)
      .then((data) => {
        return {
          loadedProperties: data.properties
        }
      })
      .catch(e => context.console.log(e))
  },
  middleware: 'auth'
}
</script>

<style scoped>
  .jumbo {
    background-image : url('https://images.unsplash.com/photo-1542687226-54a9a41eeafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
  }
</style>
