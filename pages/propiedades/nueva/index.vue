<template>
  <b-container class="mt-5">
    <b-row class="justify-content-md-center">
      <b-col col lg="4">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            label="Tipo de Propiedad"
          >
            <b-form-select v-model="propertyType" :options="ptype" />
          </b-form-group>
          <b-form-group
            label="Numero de Habitaciones"
          >
            <b-form-input v-model="numberOfRooms" type="number" required />
          </b-form-group>
          <b-form-group
            label="Numero de baños"
          >
            <b-form-input v-model="numberOfBathrooms" type="number" required />
          </b-form-group>
          <b-form-group
            label="Numero de estacionamientos"
          >
            <b-form-input v-model="numberOfParkingLots" type="number" required />
          </b-form-group>
          <b-form-group
            label="Numero de pisos del inmueble"
          >
            <b-form-input v-model="numberOfFloors" type="number" required />
          </b-form-group>
          <b-form-group
            label="Alquiler / Venta"
          >
            <b-form-select v-model="category" :options="cat" />
          </b-form-group>
          <b-form-group
            label="Precio"
          >
            <b-form-input v-model="price" type="number" required />
          </b-form-group>
          <b-form-group
            label="Moneda"
          >
            <b-form-select v-model="currency" :options="curr" />
          </b-form-group>
          <b-form-group
            label="Numero de piso en donde se ubica"
          >
            <b-form-input v-model="floorNumber" type="number" required />
          </b-form-group>
          <b-form-group
            label="Area de terreno (m2)"
          >
            <b-form-input v-model="landArea" type="number" required />
          </b-form-group>
          <b-form-group
            label="Area construida (m2)"
          >
            <b-form-input v-model="houseArea" type="number" required />
          </b-form-group>
          <b-form-group
            label="Descripcion de Inmueble"
          >
            <b-form-textarea v-model="description" placeholder="Ingrese una descripcion para el inmueble" rows="3" required />
          </b-form-group>
          <b-form-group
            label="URL de Imagen"
          >
            <b-form-input v-model="imageURL" type="text" placeholder="Ingresa el URL de la imagen" required />
          </b-form-group>
          <b-button type="submit" variant="info">
            Subir Propiedad
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
      ptype: [
        { value: null, text: 'Seleccione el tipo de propiedad' },
        { value: 'CASA', text: 'Casa' },
        { value: 'DEPARTAMENTO', text: 'Departamento' },
        { value: 'LOCAL_COMERCIAL', text: 'Local Comercial' },
        { value: 'OFICINA', text: 'Oficina' },
        { value: 'ESTACIONAMIENTO', text: 'Estacionamiento' },
        { value: 'TERRENO', text: 'Terreno' }
      ],
      cat: [
        { value: null, text: 'Seleccione la categoria' },
        { value: 'ALQUILER', text: 'Alquiler' },
        { value: 'VENTA', text: 'Venta' }
      ],
      curr: [
        { value: null, text: 'Seleccione la moneda' },
        { value: 'USD', text: 'Dolares' },
        { value: 'PEN', text: 'Soles' }
      ],
      propertyType: null,
      numberOfRooms: null,
      numberOfBathrooms: null,
      numberOfParkingLots: null,
      numberOfFloors: null,
      category: null,
      price: null,
      currency: null,
      floorNumber: null,
      landArea: null,
      houseArea: null,
      description: '',
      imageURL: ''
    }
  },
  middleware: 'auth',
  methods: {
    onSubmit () {
      this.$store.dispatch('addProperty', {
        propertyType: this.propertyType,
        numberOfRooms: this.numberOfRooms,
        numberOfBathrooms: this.numberOfBathrooms,
        numberOfParkingLots: this.numberOfParkingLots,
        numberOfFloors: this.numberOfFloors,
        category: this.category,
        price: this.price,
        currency: this.currency,
        floorNumber: this.floorNumber,
        landArea: this.landArea,
        houseArea: this.houseArea,
        description: this.description,
        imageURL: this.imageURL
      })
        .then(() => {
          this.$router.push('/propiedades')
        })
        .catch(e => console.log(e))
    }
  }
}
</script>
