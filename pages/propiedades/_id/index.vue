<template>
  <div>
    <div class="pre-hero" />
    <b-container class="pre-hero__container">
      <div class="hero">
        <b-jumbotron
          text-variant="info"
          class="jumbo mb-3 hero__img"
          :style="'background-image: url(' + loadedProperty.imageURL + ')'"
        />
        <div class="hero__data">
          {{ loadedProperty.category }} - {{ loadedProperty.propertyType }}
        </div>
        <div class="hero__data">
          <ul class="section-icon-features">
            <li class="section-icon-features__item">
              <i class="icon-f icon-f-stotal" />
              <br>
              <b>{{ loadedProperty.landArea }}m²</b>
              <br>
              <span>Superficie total</span>
            </li>

            <li class="section-icon-features__item">
              <i class="icon-f icon-f-scubierta" />
              <br>
              <b>{{ loadedProperty.houseArea }}m²</b>
              <br>
              <span>Superficie construida</span>
            </li>

            <li class="section-icon-features__item">
              <i class="icon-f icon-f-bano" />
              <br>
              <b>{{ loadedProperty.numberOfBathrooms }}</b>
              <br>
              <span>Baños</span>
            </li>
            <li class="section-icon-features__item">
              <i class="icon-f icon-f-cochera" />
              <br>
              <b>{{ loadedProperty.numberOfParkingLots }}</b>
              <br>
              <span>Estacionamiento</span>
            </li>

            <li class="section-icon-features__item">
              <i class="icon-f icon-f-dormitorio" />
              <br>
              <b>{{ loadedProperty.numberOfRooms }}</b>
              <br>
              <span>Dormitorios</span>
            </li>

            <li class="section-icon-features__item">
              <i class="icon-f icon-f-inmueble" />
              <br>
              <b>{{ loadedProperty.numberOfFloors }}</b>
              <br>
              <span>Pisos</span>
            </li>

            <li class="section-icon-features__item">
              <i class="icon-f icon-f-antiguedad" />
              <br>
              <b>{{ loadedProperty.antiquity }}</b>
              <br>
              <span>Antigüedad</span>
            </li>
          </ul>
        </div>
        <div class="hero__data pb-3">
          <b-button id="show-btn" variant="success" @click="$bvModal.show('modal-contact-agent')">Contactar al Agente</b-button>
        </div>
        <div class="hero__description">
          <p>{{ loadedProperty.description }}</p>
        </div>
      </div>
    </b-container>

    <b-modal id="modal-contact-agent" hide-footer>
      <template v-slot:modal-title>
        Contactar al Agente
      </template>
      <div class="d-block text-center">
        <b-list-group>

          <b-list-group-item><b-icon-person-circle></b-icon-person-circle> {{ loadedProperty.user.firstName }} {{ loadedProperty.user.lastName }}</b-list-group-item>
          <b-list-group-item><b-icon-mailbox></b-icon-mailbox> {{ loadedProperty.user.email }}</b-list-group-item>
          <b-list-group-item><b-icon-telephone></b-icon-telephone> {{ loadedProperty.user.phoneNumber }}</b-list-group-item>
        </b-list-group>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-contact-agent')">Cerrar</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$axios
      .$get('/properties/' + context.params.id)
      .then((data) => {
        return {
          loadedProperty: data
        }
      })
      .catch(e => context.console.log(e))
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/styles/globals/variables';

$heroNumber: 400px;

.jumbo {
  background-position: center;
  background-blend-mode: darken;
  background-size: cover;
  min-height: $heroNumber;
  max-width: 700px;
  margin: 0 auto;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  h1 {
    text-align: center;
    color: $white;
    text-shadow: 0.02em 0.02em 0 #9cb8b3;
  }
}

.pre-hero {
  height: ($heroNumber / 2);
  background-color: $gray-1;
}

.hero {
  position: relative;
  top: -($heroNumber / 3);
  border-radius: 10px;
  background-color: $green-aqua-1;
  padding: 8px;
  padding-top: 0;

  &__description {
    color: $white;
  }

  &__data {
    color: $white;
    text-align: center;
    margin-bottom: 0.5rem;
  }
}

.section-icon-features {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  padding: 10px;

  &__item {
    font-size: 0.8rem;
    font-weight: 300;
    width: 90px;
    margin: 10px;

    .icon-f {
      font-size: 40px;
      font-weight: 300;
      color: $green-aqua-1;
      height: 40px;
      width: 40px;

      &::before {
        background: $white;
        border-radius: 50%;
      }
    }
  }
}
</style>
