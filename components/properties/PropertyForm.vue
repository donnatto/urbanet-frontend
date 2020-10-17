<template>
  <b-container class="mt-5 mb-5">
    <b-row class="justify-content-md-center">
      <b-col col lg="4">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            label="Tipo de Propiedad"
          >
            <b-form-select v-model="editedProperty.propertyType" :options="ptype" />
          </b-form-group>
          <b-form-group
            label="Numero de Habitaciones"
          >
            <b-form-input v-model="editedProperty.numberOfRooms" type="number" required />
          </b-form-group>
          <b-form-group
            label="Numero de baños"
          >
            <b-form-input v-model="editedProperty.numberOfBathrooms" type="number" required />
          </b-form-group>
          <b-form-group
            label="Numero de estacionamientos"
          >
            <b-form-input v-model="editedProperty.numberOfParkingLots" type="number" required />
          </b-form-group>
          <b-form-group
            label="Numero de pisos del inmueble"
          >
            <b-form-input v-model="editedProperty.numberOfFloors" type="number" required />
          </b-form-group>
          <b-form-group
            label="Alquiler / Venta"
          >
            <b-form-select v-model="editedProperty.category" :options="cat" />
          </b-form-group>
          <b-form-group
            label="Precio"
          >
            <b-form-input v-model="editedProperty.price" type="number" required />
          </b-form-group>
          <b-form-group
            label="Moneda"
          >
            <b-form-select v-model="editedProperty.currency" :options="curr" />
          </b-form-group>
          <b-form-group
            label="Numero de piso en donde se ubica"
          >
            <b-form-input v-model="editedProperty.floorNumber" type="number" required />
          </b-form-group>
          <b-form-group
            label="Area de terreno (m2)"
          >
            <b-form-input v-model="editedProperty.landArea" type="number" required />
          </b-form-group>
          <b-form-group
            label="Area construida (m2)"
          >
            <b-form-input v-model="editedProperty.houseArea" type="number" required />
          </b-form-group>
          <b-form-group
            label="Antiguedad (años)"
          >
            <b-form-input v-model="editedProperty.antiquity" type="text" required />
          </b-form-group>
          <b-form-group
            label="Descripcion de Inmueble"
          >
            <b-form-textarea v-model="editedProperty.description" placeholder="Ingrese una descripcion para el inmueble" rows="3" required />
          </b-form-group>
          <b-form-group
            label="Direccion"
          >
            <b-form-input id="searchTextField" v-model="editedProperty.address" type="text" placeholder="Ingrese la direccion" required />
          </b-form-group>
          <b-form-group
            label="Latitud"
          >
            <b-form-input id="lat" v-model="editedProperty.latitude" type="number" readonly />
          </b-form-group>
          <b-form-group
            label="Longitud"
          >
            <b-form-input id="long" v-model="editedProperty.longitude" type="number" readonly />
          </b-form-group>
          <b-form-group
            label="URL de Imagen"
          >
            <b-form-input v-model="editedProperty.imageURL" type="text" placeholder="Ingresa el URL de la imagen" required />
          </b-form-group>
          <b-button type="submit" variant="info">
            Guardar
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      required: false,
      default: null
    }
  },
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
      editedProperty: this.property
        ? { ...this.property }
        : {
          propertyType: '',
          numberOfRooms: '',
          numberOfBathrooms: '',
          numberOfParkingLots: '',
          numberOfFloors: '',
          category: '',
          price: '',
          currency: '',
          floorNumber: '',
          landArea: '',
          houseArea: '',
          antiquity: '',
          description: '',
          address: '',
          latitude: '',
          longitude: '',
          imageURL: ''
        }
    }
  },
  mounted () {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-12.396988, -77.222710),
      new google.maps.LatLng(-11.560275, -76.543379)
    )
    const input = document.getElementById('searchTextField')
    const options = {
      bounds: defaultBounds
    }

    const autocomplete = new google.maps.places.Autocomplete(input, options)
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace()
      this.editedProperty.latitude = place.geometry.location.lat()
      this.editedProperty.longitude = place.geometry.location.lng()
    })
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.editedProperty)
    }
  }
}
</script>
