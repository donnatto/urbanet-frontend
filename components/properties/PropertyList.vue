<template>
  <b-card-group columns>
    <PropertyPreview
      v-for="property in properties"
      :id="property.id"
      :key="property.id"
      :title="property.propertyType"
      :img-src="property.imageURL"
      :card-text="property.description"
      :is-edit="isEdit"
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
    },
    isEdit: {
      type: Boolean,
      required: true
    }
  }
}
</script>
