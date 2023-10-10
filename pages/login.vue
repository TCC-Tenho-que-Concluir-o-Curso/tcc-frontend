<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-h5"> Login </v-card-title>
          <v-card-text>
            <v-btn color="primary" :loading="loading" @click="login">
              <!-- google icon -->
              <v-icon left>mdi-google</v-icon>
              Entrar com Google
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware: 'loginAuth',
  data() {
    return {
      loading: false,
    }
  },

  computed: {
    user() {
      return this.$store.getters.isLoggedIn
    },
  },

  mounted() {
    if (this.user) {
      this.$router.push('/')
    }
  },

  methods: {
    async login() {
      this.loading = true
      try {
        const authData = await this.$fire.auth.signInWithPopup(
          new this.$fireModule.auth.GoogleAuthProvider()
        )

        const uid = authData.user.uid
        const email = authData.user.email
        console.log(uid)

        this.$store.dispatch('setUserAuth', {
          uid,
          email,
        })

        const data = {
          firebase_uid: this.$fire.auth.currentUser.uid,
          avatar_url: this.$fire.auth.currentUser.photoURL,
          email: this.$fire.auth.currentUser.email,
          name: this.$fire.auth.currentUser.displayName,
        }

        await this.$axios.post('/api/user', data)

        console.log('sucesso no login')
        this.$router.push('/')
      } catch (error) {
        await this.$fire.auth.signOut()
        console.log(error)
        console.log(error.response.data.message)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
