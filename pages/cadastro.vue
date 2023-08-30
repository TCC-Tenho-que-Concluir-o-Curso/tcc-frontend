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
        <v-btn color="primary">Enviar</v-btn>
        <v-btn color="error">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
    }
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
