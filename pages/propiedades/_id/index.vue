<template>
  <b-container>
    <b-jumbotron :header="loadedProperty.category" :lead="loadedProperty.description" text-variant="info" class="jumbo mt-3" :style="'background-image: url(' + loadedProperty.imageURL + ')'" />
    <h1>{{ loadedProperty.propertyType }}</h1>
    <p>{{ loadedProperty.description }}</p>
    <b-row>
      <b-col>
        Numero de Habitaciones: {{ loadedProperty.numberOfRooms }}
      </b-col>
      <b-col>
        Numero de Baños: {{ loadedProperty.numberOfBathrooms }}
      </b-col>
      <b-col>
        Numero de Estacionamientos: {{ loadedProperty.numberOfParkingLots }}
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        Numero de Pisos: {{ loadedProperty.numberOfFloors }}
      </b-col>
      <b-col>
        Area de terreno: {{ loadedProperty.landArea }} m2
      </b-col>
      <b-col>
        Area construida: {{ loadedProperty.houseArea }} m2
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>
          Precio: {{ loadedProperty.currency === 'USD' ? '$' : 'S/' }} {{ loadedProperty.price }}
        </h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$axios.$get('/properties/' + context.params.id)
      .then((data) => {
        return {
          loadedProperty: data
        }
      })
      .catch(e => context.console.log(e))
  }
}
</script>

<style scoped>
  .jumbo {
    background-position: center;
    background-blend-mode: darken;
    background-size: cover;
  }
</style>
