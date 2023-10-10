<template>
  <v-container class="mt-12" fluid>
    <v-card class="pa-8 cadastro">
      <v-btn
        v-show="shouldShowDeleteButton"
        class="mt-10"
        color="error"
        fab
        small
        absolute
        right
        top
        @click="deleteIdea()"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <v-card-title class="mb-4 d-flex align-center justify-center">
        <h3>{{ idea.title }}</h3>
      </v-card-title>

      <v-card-subtitle
        class="mb-4 d-flex flex-column align-center justify-center"
      >
        <p class="ma-0">Autor da ideia:</p>
        <h3>{{ authorName }}</h3>

        <p class="ma-0 mt-4">Email para contato:</p>
        <h3>{{ authorEmail }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <v-textarea
          v-model="idea.body"
          label="Corpo"
          placeholder="Descreva sua ideia"
          outlined
          readonly
          rows="10"
          no-resize
        ></v-textarea>
      </v-card-text>
    </v-card>
    <v-card class="pa-8 mt-12">
      <h1 class="mb-2">Comentários</h1>
      <v-card-text v-for="(comment, i) in idea.comments" :key="i">
        <CommentItem :comment="comment" />
      </v-card-text>
      <div class="d-flex align-center justify-center">
        <v-card-text class="d-flex" style="width: 50%">
          <v-textarea
            v-model="commentToSend"
            label="Comentário"
            placeholder="Comente sobre a ideia"
            outlined
            rounded
            rows="1"
            auto-grow
          >
          </v-textarea>
        </v-card-text>
      </div>
      <v-card-actions class="d-flex align-center justify-center">
        <v-btn
          :disabled="!isValidComment"
          color="primary"
          @click="sendComment()"
          >Enviar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      idea: {},
      title: '',
      authorId: '',
      authorName: '',
      authorEmail: '',
      commentToSend: '',
      userAvatarUrl: '',
    }
  },

  computed: {
    isValidComment() {
      return this.commentToSend.length > 0
    },

    shouldShowDeleteButton() {
      return this.$fire.auth.currentUser?.email === this.authorEmail
    },
  },

  async created() {
    this.title = this.$route.query.title
    try {
      const { data } = await this.$axios.get(`/api/tcc/title/${this.title}`)
      this.idea = data
      const user = await this.$axios.get(`/api/user/${this.idea.authorId}`)
      this.authorName = user.data.name
      this.authorEmail = user.data.email
      this.authorAvatarUrl = user.data.avatar_url
    } catch {
      // TODO: handle error
    }
  },

  methods: {
    async sendComment() {
      try {
        const response = await this.$axios.post(`/api/tcc/comment`, {
          title: this.idea.title,
          text: this.commentToSend,
        })
        this.commentToSend = ''
        this.idea.comments = response.data.comments
      } catch {
        console.log('Erro ao enviar comentário')
      }
    },

    async deleteIdea() {
      await this.$axios.delete(`/api/tcc/title/${this.idea.title}`)
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped></style>
