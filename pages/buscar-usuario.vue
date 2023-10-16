<template>
  <v-row justify="start" class="mt-12">
    <v-row class="mx-5" style="width: 100%" justify="center">
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="search"
          :loading="loading"
          rows="1"
          @keyup="filterByKeywords"
        >
          <template #label>
            Procure por {{ userType }}
            <v-icon small style="vertical-align: middle"> mdi-magnify </v-icon>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12">
        <v-list>
          <v-list-item
            v-for="(user, i) in filteredUsers"
            :key="i"
            class="my-5 d-flex justify-center align-center"
          >
            <UserCard :user="user" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import UserCard from '~/components/UserCard.vue'
export default {
  name: 'BuscarUsuario',
  components: { UserCard },
  data() {
    return {
      search: '',
      userType: '',
      loading: false,
      users: [],
      filteredUsers: [],
    }
  },

  async created() {
    this.userType = await this.$store.getters.userTypeFormattedPlural
    this.users = await this.$axios.$get(`/api/users`)
    this.filteredUsers = this.users
    // this.filteredUsers.map((user, i) => {
    //   user.name = user.name + i
    // })
    console.log(this.users)
  },

  methods: {
    filterByKeywords() {
      this.filteredUsers = this.users.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
