<template>
  <b-card-group columns>
    <PropertyPreview
      v-for="property in properties"
      :id="property.id"
      :key="property.id"
      :title="property.propertyType"
      :img-src="'http://localhost:1337' + property.mainPicture.formats.thumbnail.url"
      :img-alt="property.mainPicture.alternativeText"
      :card-text="property.description"
    />
  </b-card-group>
</template>

<script>
import PropertyPreview from '@/components/properties/PropertyPreview'

export default {
  name: 'PropertyList',
  components: {
    PropertyPreview
  },
  props: {
    properties: {
      type: Array,
      required: true
    }
  },
  computed: {
    propertyLink () {
      return '/propiedades/' + this.id
    }
  }
}
</script>
