<template>
  <b-container class="mb-5">
    <b-jumbotron header="Propiedades" lead="Mira nuestras propiedades" text-variant="white" class="jumbo mt-3" />
    <PropertyList :properties="loadedProperties" :is-edit="false" />
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
      .$get('/properties/')
      .then((data) => {
        return {
          loadedProperties: data
        }
      })
      .catch(e => context.console.log(e))
  }
}
</script>

<style scoped>
  .jumbo {
    background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-position: center;
    background-blend-mode: darken;
  }
</style>
