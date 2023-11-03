<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" color="primary" fixed app>
      <v-app-bar-nav-icon
        v-show="isLoggedIn"
        variant="text"
        absolute
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

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
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <template #prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img :src="user?.photoURL" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> {{ user?.displayName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          exact
          @click="item.action"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
      items: [
        { title: 'Home', icon: 'mdi-home', action: this.goHome },
        { title: 'Perfil', icon: 'mdi-account', action: this.goToProfile },
        {
          title: 'Buscar Usuário',
          icon: 'mdi-account-search',
          action: this.goToSearchUser,
        },
        {
          title: 'Cadastrar Tema',
          icon: 'mdi-book-plus',
          action: this.goToTCCRegister,
        },
        { title: 'Sair', icon: 'mdi-logout', action: this.logout },
        // { title: 'Testar feature', icon: 'mdi-cog', action: this.goToTeste },
      ],
    }
  },

  computed: {
    isLoggedIn() {
      const loggedIn =
        this.$store.getters.user?.type !== null &&
        this.$store.getters.user?.type !== undefined
      console.log('isLoggedIn: ', loggedIn)
      return loggedIn
    },

    user() {
      return this.$store.getters.user
    },
  },

  created() {},

  methods: {
    async logout() {
      try {
        console.log('logout')
        await this.$fire.auth.signOut()
        this.$store.dispatch('setUserAuth', null)
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

    goToSearchUser() {
      this.$router.push('/buscar-usuario')
    },

    async goToTeste() {
      const response = await this.$axios.get('/api/users/migrate')
      console.log('TESTE RESPONSE', response)
    },

    goToTCCRegister() {
      this.$router.push('/cadastro')
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
