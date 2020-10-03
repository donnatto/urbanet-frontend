<template>
  <b-container class="mt-5">
    <b-row class="justify-content-md-center">
      <b-col col lg="4">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            label="Usuario"
          >
            <b-form-input v-model="username" type="text" placeholder="Ingresa tu usuario" required />
          </b-form-group>
          <b-form-group
            label="Correo Electronico"
          >
            <b-form-input v-model="email" type="email" placeholder="Ingresa tu correo electronico" required />
          </b-form-group>
          <b-form-group
            label="Password"
          >
            <b-form-input v-model="password" type="password" placeholder="Ingresa tu password" required />
          </b-form-group>
          <b-form-group
            label="Nombre"
          >
            <b-form-input v-model="firstName" type="text" placeholder="Ingresa tu nombre" required />
          </b-form-group>
          <b-form-group
            label="Apellidos"
          >
            <b-form-input v-model="lastName" type="text" placeholder="Ingresa tus apellidos" required />
          </b-form-group>
          <b-form-group
            label="Nro. de Contacto"
          >
            <b-form-input v-model="phoneNumber" type="text" placeholder="Ingresa tu numero de celular" required />
          </b-form-group>
          <b-button type="submit" variant="info">
            Registrarse
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
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  },
  methods: {
    async onSubmit () {
      await this.$axios.post('/auth/local/register', {
        username: this.username,
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber
      })
      this.$store.dispatch('authenticateUser', {
        identifier: this.username,
        password: this.password
      }
      )
    }
  }
}
</script>
