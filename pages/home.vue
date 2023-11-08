<template>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <div style="height: 100px"></div>
      <v-card class="pa-10 rounded-xl" elevation="12" shaped>
        <p class="font-weight-bold text-center poppinsFont">
          Tenho que Concluir o Curso
        </p>
        <v-divider></v-divider>
        <p class="text-h5 font-weight-bold text-center mt-4">
          Um lugar para o aluno encontrar professores orientadores e seus temas
          de TCC disponíveis!
        </p>

        <p class="text-subtitle-1 text-center">
          Os temas cadastrados pelos professores só podem ser vistos pelos
          alunos, e os alunos só podem ver os temas cadastrados pelos
          professores.
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
