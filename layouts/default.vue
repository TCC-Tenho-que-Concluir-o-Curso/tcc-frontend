<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" color="primary" fixed app>
      <v-btn v-show="user" plain @click="logout">
        <v-icon>mdi-logout</v-icon>
        sair
      </v-btn>

      <v-spacer />

      <v-row justify="center">
        <div class="py-1">
          <v-img
            :src="require('../assets/logoTCC2.png')"
            height="60"
            min-width="600"
            aspect-ratio="10/1"
            cover
            style="cursor: pointer"
            @click="goHome"
          ></v-img>
        </div>
      </v-row>

      <v-spacer />

      <v-btn v-show="user" plain @click="goToProfile">
        <v-icon>mdi-account</v-icon>
        perfil
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tenho que Terminar o Curso',
    }
  },

  computed: {
    user() {
      return this.$store.getters.isLoggedIn
    },
  },

  methods: {
    async logout() {
      try {
        console.log('logout')
        await this.$fire.auth.signOut()
        this.$router.push('/login')
      } catch (error) {
        console.log('Erro ao deslogar')
        console.log(error)
      }
    },

    goHome() {
      this.$router.push('/')
    },

    goToProfile() {
      const email = this.$fire.auth.currentUser.email
      this.$router.push({
        name: 'user',
        query: { email },
      })
    },
  },
}
</script>

<style>
.v-card {
  border-radius: 12px !important;
  background-color: #f9f9f9 !important;
}
</style>
