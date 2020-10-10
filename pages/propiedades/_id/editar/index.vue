<template>
  <PropertyForm :property="loadedProperty" @submit="onSubmit" />
</template>

<script>
import PropertyForm from '@/components/properties/PropertyForm'

export default {
  components: {
    PropertyForm
  },
  asyncData (context) {
    return context.app.$axios
      .$get('/properties/' + context.params.id)
      .then((data) => {
        return {
          loadedProperty: data
        }
      })
      .catch(e => context.console.log(e))
  },

  middleware: 'auth',
  methods: {
    onSubmit (property) {
      this.$store.dispatch('editProperty', property)
        .then(() => {
          this.$router.push('/propiedades/' + property.id)
        })
        .catch(e => console.log(e))
    }
  }
}
</script>
