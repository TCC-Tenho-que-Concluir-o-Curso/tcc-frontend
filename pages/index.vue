<template>
  <v-row justify="start" class="mt-12">
    <p style="width: 100%" class="text-h5 text-center">
      Aqui serão listados os temas cadastrados pelos
      {{ $store.getters.userTypeFormattedPlural }}
    </p>
    <v-row class="mx-5" style="width: 100%" justify="center">
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="search"
          :loading="loading"
          rows="1"
          @keyup="searchByKeywords"
        >
          <template #label>
            Procure por palavras-chave
            <v-icon small style="vertical-align: middle"> mdi-magnify </v-icon>
          </template>
        </v-text-field>
      </v-col>

      <v-col
        class="d-flex align-center justify-start"
        cols="12"
        sm="2"
        align-self="center"
      >
        <v-btn color="accent" @click="$router.push('/cadastro')">
          Cadastrar Ideia
        </v-btn>
      </v-col>
    </v-row>

    <v-col
      v-for="(idea, i) in ideasFiltered"
      :key="i"
      class="my-2 d-flex justify-center"
      cols="12"
      md="6"
    >
      <TccPreviewCard :idea="idea" />
    </v-col>
  </v-row>
</template>

<script>
import TccPreviewCard from '~/components/TccPreviewCard'

export default {
  name: 'IndexPage',
  components: { TccPreviewCard },
  middleware: 'auth',
  data() {
    return {
      search: '',
      ideasFiltered: [],
      ideas: [],
      loading: false,
    }
  },

  mounted() {
    this.getTCCList()
    console.log(this.$store.state.authUser.user.type)
  },

  methods: {
    searchByKeywords() {
      this.loading = true
      this.ideasFiltered = this.ideas.filter((idea) => {
        return (
          idea.title.toLowerCase().includes(this.search.toLowerCase()) ||
          idea.body.toLowerCase().includes(this.search.toLowerCase())
        )
      })
      this.loading = false
    },

    async getTCCList() {
      const response = await this.$axios.$get('/api/tcc')

      this.ideas = response
      this.ideasFiltered = response
      console.log('tccs', response)
    },
  },
}
</script>

<style scoped></style>
