<template>
  <v-row>
    <v-col cols="12" sm="12">
      <span> {{ hintText }} </span>
      <v-chip-group v-model="selectedTags" multiple column dark>
        <v-chip
          v-for="(tag, i) in tags"
          :key="i"
          class="ma-2"
          :filter="isSelectable"
          :active="isSelectable || selectedTags.includes(i)"
          :disabled="!isSelectable && !selectedTags.includes(i)"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    hintText: {
      type: String,
      default: 'Tags de interesse:',
    },
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      tagTextFieldShouldAppear: false,
      newTagText: '',
      selectedTags: this.user.tags,
      tags: [
        'Engenharia de Software',
        'Informática na Educação',
        'Inteligência Artificial',
        'Redes e Sistemas Distribuídos',
        'Sistemas de Informação e Banco de Dados',
      ],
    }
  },

  computed: {
    isSelectable() {
      return this.isCurrentUser()
    },
  },

  watch: {
    selectedTags() {
      this.updateTags()
    },
  },

  methods: {
    isCurrentUser() {
      return this.$store.getters.user?.email === this.user?.email
    },

    async updateTags() {
      if (this.isCurrentUser()) {
        const data = await this.$axios.post(`/api/user/tags`, {
          tags: this.selectedTags,
        })
        console.log(data)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
