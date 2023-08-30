<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" color="primary" fixed app>
      <v-spacer />
      <v-img
        :src="require('../assets/logoTCC2.png')"
        height="50"
        min-width="500"
        aspect-ratio="2:1"
        cover
      ></v-img>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tenho que Terminar o Curso',
    }
  },
}
</script>

<style>
.v-card {
  border-radius: 12px !important;
  background-color: #f9f9f9 !important;
}
</style>
