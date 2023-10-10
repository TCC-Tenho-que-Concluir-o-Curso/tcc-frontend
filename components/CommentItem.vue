<template>
  <v-card class="comment-item" @click="goToUser(comment.authorEmail)">
    <v-card-title>
      <v-avatar size="36">
        <img :src="comment.authorAvatarUrl" alt="User photo" />
      </v-avatar>
      <span class="ml-2">{{ comment.authorName }}</span>
    </v-card-title>
    <v-card-text>
      {{ comment.text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },

  created() {
    console.log('comment', this.comment)
  },

  methods: {
    goToUser(email) {
      console.log('go to user', email)
      this.$router.push({
        name: 'user',
        query: { email },
      })
    },
  },
}
</script>

<style scoped>
/* cursor pointer when hover */
.comment-item {
  cursor: pointer;
}
</style>
