<template>
  <v-card class="tcc-card d-flex flex-column pa-4" @click="goToTCC(id)">
    <h2 class="text-center">{{ title }}</h2>
    <p class="tcc-body text-justify">{{ body }}</p>
  </v-card>
</template>

<script>
export default {
  name: 'TccPreviewCard',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToTCC(id) {
      this.$router.push(`/tcc/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.tcc-card {
  background-color: #fafafa;
  /* min-width: 500px;
  max-width: 500px; */
  max-height: 250px;
  max-height: 250px;
}

.tcc-body {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  white-space: pre-wrap;
}
</style>
