<template>
  <v-card class="userItem pa-4" @click="goToUser(user.email)">
    <div class="d-flex align-center">
      <v-avatar size="64">
        <img :src="user.avatar_url" alt="User photo" />
      </v-avatar>
      <div>
        <v-card-title>{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      </div>
    </div>

    <TagsGroup v-show="user.tags.length > 0" :user="user"></TagsGroup>
  </v-card>
</template>

<script>
import TagsGroup from './TagsGroup.vue'
export default {
  name: 'UserCard',
  components: { TagsGroup },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  created() {
    console.log('userCard user', this.user)
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
.userItem {
  max-width: 80%;
  min-width: 80%;
  cursor: pointer;
}
</style>
