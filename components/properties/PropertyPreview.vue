<template>
  <nuxt-link :to="propertyLink">
    <b-card
      :title="conditionalTitle"
      :img-src="imgSrc"
      img-top
      v-if="available"
      :bg-variant="cardStyle"
    >
      <b-card-text>
        {{ cardText }}
      </b-card-text>
    </b-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    cardText: {
      type: String,
      required: true
    },
    isEdit: {
      type: Boolean,
      required: true
    },
    separated: {
      type: Boolean,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    propertyLink () {
      return this.isEdit ? '/propiedades/' + this.id + '/editar' : '/propiedades/' + this.id
    },
    cardStyle() {
      return this.separated ? 'info' : 'default'
    },
    conditionalTitle() {
      return this.separated ? this.title + " - SEPARADO" : this.title
    }
  }
}
</script>

<style scoped>
  a {
    color: black;
  }
</style>
