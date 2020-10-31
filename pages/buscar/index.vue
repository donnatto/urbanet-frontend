<template>
  <b-container class="mt-3 mb-5">
    <b-jumbotron header="Buscar Propiedades" lead="Encuentra propiedades que te interesen" text-variant="white" class="jumbo mt-3" />
    <property-search />
  </b-container>
</template>

<script>
import PropertySearch from '@/components/properties/PropertySearch'

export default {
  components: {
    PropertySearch
  }
}
</script>

<style scoped>
.jumbo {
    background-image : url('https://images.unsplash.com/photo-1518306896927-d58c59c07b82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
    background-position: 0 35%;
  }
</style>