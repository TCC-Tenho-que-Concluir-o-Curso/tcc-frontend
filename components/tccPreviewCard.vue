<template>
  <v-card class="tcc-card d-flex flex-column pa-4" @click="goToTCC()">
    <h2 class="text-center mb-2">{{ idea.title }}</h2>
    <p class="tcc-body text-justify">{{ idea.body }}</p>
  </v-card>
</template>

<script>
export default {
  name: 'TccPreviewCard',
  props: {
    idea: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToTCC() {
      this.$router.push({
        name: 'tcc',
        query: { title: this.idea.title },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tcc-card {
  background-color: #fafafa;
  max-width: 600px;
  min-height: 260px;
  min-width: 200px;
}

.tcc-body {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  white-space: pre-wrap;
}
</style>
