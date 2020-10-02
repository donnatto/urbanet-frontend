<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3">
    <b-container>
      <b-navbar-brand to="/">
        Urbanet
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/propiedades">
            Propiedades
          </b-nav-item>
          <b-nav-item to="/agentes">
            Agentes
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar Propiedades"
            />
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </b-button>
          </b-nav-form>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item href="#">
              Login
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Registro
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
