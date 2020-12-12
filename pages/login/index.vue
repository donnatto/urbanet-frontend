<template>
  <b-container class="mt-5">
    <b-row class="justify-content-md-center">
      <b-col col lg="4">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            label="Usuario / Correo Electronico"
          >
            <b-form-input v-model="identifier" type="text" placeholder="Ingresa tu usuario o correo electronico" required />
          </b-form-group>
          <b-form-group
            label="Password"
          >
            <b-form-input v-model="password" type="password" placeholder="Ingresa tu password" required />
          </b-form-group>
          <b-button type="submit" variant="info">
            Acceder
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      identifier: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authenticateUser', {
        identifier: this.identifier,
        password: this.password
      })
    }
  }
}
</script>
