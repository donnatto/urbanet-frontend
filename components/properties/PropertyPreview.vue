<template>
  <nuxt-link :to="propertyLink">
    <b-card
      :title="title"
      :img-src="imgSrc"
      :img-alt="imgAlt"
      img-top
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
      type: String,
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
    imgAlt: {
      type: String,
      required: true
    },
    cardText: {
      type: String,
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

<style scoped>
  a {
    color: black;
  }
</style>
