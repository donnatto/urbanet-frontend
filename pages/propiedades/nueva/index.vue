<template>
  <PropertyForm @submit="onSubmit" />
</template>

<script>
import PropertyForm from '@/components/properties/PropertyForm'

export default {
  components: {
    PropertyForm
  },
  middleware: 'auth',
  methods: {
    onSubmit (property) {
      this.$store.dispatch('addProperty', property)
        .then(() => {
          this.$router.push('/propiedades')
        })
        .catch(e => console.log(e))
    }
  }
}
</script>
