<template>
  <v-container>
    <v-card class="d-flex flex-column align-center justify-center pa-2">
      <div class="d-flex align-center">
        <v-avatar size="64">
          <img :src="userAvatarUrl" alt="User photo" />
        </v-avatar>
        <div>
          <v-card-title>{{ userName }}</v-card-title>
          <v-card-subtitle>{{ userEmail }}</v-card-subtitle>
        </div>
      </div>

      <div v-if="userLoaded" class="tagsGroup">
        <TagsGroup :user="user" />
      </div>
    </v-card>
    <v-card class="mt-10 pa-4">
      <v-card-title>Ideias de TCCs</v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="(tcc, i) in tccs" :key="i" cols="12" sm="6">
            <TccPreviewCard :idea="tcc"></TccPreviewCard>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TccPreviewCard from '~/components/TccPreviewCard'

export default {
  components: {
    TccPreviewCard,
  },
  middleware: 'auth',
  data() {
    return {
      user: {},
      userLoaded: false,
      userId: '',
      userEmail: this.$route.query.email,
      userName: '',
      userAvatarUrl: '',
      tccs: [],
    }
  },

  async mounted() {
    const { data } = await this.$axios.get(`/api/user/email/${this.userEmail}`)
    this.userLoaded = true
    this.user = data
    this.userId = data.firebase_uid
    this.userName = data.name
    this.userEmail = data.email
    this.userAvatarUrl = data.avatar_url
    const tccResponse = await this.$axios.get(`/api/tcc/author/${this.userId}`)
    console.log('Data', data)
    console.log('TCCS', tccResponse.data)
    this.tccs = tccResponse.data
  },
}
</script>

<style scoped>
.tagsGroup {
  max-width: 80%;
}
</style>
