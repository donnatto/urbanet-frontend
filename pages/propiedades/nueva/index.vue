<template>
  <PropertyForm @submit="onSubmit" />
</template>

<script>
import algoliasearch from 'algoliasearch'
import PropertyForm from '@/components/properties/PropertyForm'

const client = algoliasearch('9786XJSV62', process.env.ALGOLIA_SEARCH_API_KEY)
const index = client.initIndex('dev_PROPERTIES')

export default {
  components: {
    PropertyForm
  },
  middleware: 'auth',
  methods: {
    onSubmit (property) {
      this.$store.dispatch('addProperty', property)
        .then((res) => {
          this.$router.push('/propiedades')
          index.saveObject(res, {autoGenerateObjectIDIfNotExist: true})
          .then(({objectID}) => {
            console.log('object created: ' + objectID)
          })
        })
        .catch(e => console.log(e))
    }
  }
}
</script>
