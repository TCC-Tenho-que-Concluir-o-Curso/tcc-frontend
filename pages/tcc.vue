<template>
  <v-container fluid>
    <v-card class="pa-8 cadastro mt-12">
      <v-card-title class="mb-4 d-flex align-center justify-center">
        <h3>{{ title }}</h3>
      </v-card-title>

      <v-card-subtitle
        class="mb-4 d-flex flex-column align-center justify-center"
      >
        <p class="ma-0">Autor da ideia:</p>
        <h3>{{ author }}</h3>

        <p class="ma-0 mt-4">Email para contato:</p>
        <h3>{{ email }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <v-textarea
          v-model="body"
          label="Corpo"
          placeholder="Descreva sua ideia"
          outlined
          readonly
          rows="10"
          no-resize
        ></v-textarea>
      </v-card-text>
    </v-card>
    <v-card class="pa-8 mt-12">
      <h1 class="mb-2">Comentários</h1>
      <div class="d-flex align-center justify-center">
        <v-card-text style="width: 50%">
          <v-textarea
            v-model="comment"
            prepend-icon="mdi-account"
            label="Comentário"
            placeholder="Comente sobre a ideia"
            outlined
            rounded
            rows="1"
            auto-grow
          ></v-textarea>
        </v-card-text>
      </div>
      <v-card-actions class="d-flex align-center justify-center">
        <v-btn color="primary">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Titulo de uma ideia',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
      comment: '',
      author: 'Leonardo Veiga',
      email: 'leonardo.porfirio@ccc.ufcg.edu.br',
    }
  },
}
</script>

<style lang="scss" scoped></style>
