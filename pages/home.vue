<template>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <div style="height: 100px"></div>
      <v-card class="pa-10 rounded-xl" elevation="12" shaped>
        <p class="font-weight-bold text-center poppinsFont">
          Tenho que Concluir o Curso
        </p>
        <v-divider></v-divider>
        <p class="text-h6 text-justify mt-4">
          Aqui os alunos podem cadastrar seus temas de TCC e procurar por
          professores que possam orientá-los.
        </p>
        <p class="text-h6 text-justify">
          Os professores também podem se cadastrar e disponibilizar seus temas
          de TCC para os alunos.
        </p>

        <v-card-actions class="d-flex align-center justify-center">
          <div v-if="$store.getters.isLoggedIn">
            <v-btn color="primary" @click="$router.push('/')">
              Ver temas cadastrados por
              {{ $store.getters.userTypeFormattedPlural }}
            </v-btn>
          </div>
          <div v-else>
            <v-btn color="primary" @click="$router.push('/login')">
              Faça o Login
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.poppinsFont {
  font-family: 'Poppins', sans-serif !important;
  font-size: 3.5rem;
}

.homeCard {
  background-color: white !important;
}
</style>
