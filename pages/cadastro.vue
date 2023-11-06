<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1 class="mt-12">Cadastrar Ideia</h1>
    <v-card class="pa-4 cadastro mt-12">
      <v-card-title>
        <v-text-field
          v-model="title"
          label="Título"
          placeholder="Título da sua ideia"
          outlined
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-textarea
          v-model="body"
          label="Corpo"
          placeholder="Descreva sua ideia"
          outlined
        ></v-textarea>
      </v-card-text>
      <v-card-actions class="d-flex align-center justify-center">
        <v-btn :disabled="!isValidTCC" color="primary" @click="sendTCCIdea()"
          >Enviar</v-btn
        >
        <v-btn color="error" @click="goToHome()">Voltar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      title: '',
      body: '',
    }
  },

  computed: {
    isValidTCC() {
      return this.title.length > 0 && this.body.length > 0
    },
  },

  methods: {
    goToHome() {
      this.$router.push('/')
    },

    async sendTCCIdea() {
      console.log('mandando tcc')
      await this.$axios.post('/api/tcc', {
        title: this.title,
        body: this.body,
      })

      const email = this.$fire.auth.currentUser.email
      this.$router.push({
        name: 'user',
        query: { email },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.cadastro {
  height: 100%;
  width: 100vw;
  background-color: #f5f5f5;
}
</style>
