<template>
  <v-row justify="center" class="mt-12">
    <v-row class="mx-5" justify="center">
      <v-col cols="6">
        <v-text-field
          v-model="search"
          :loading="loading"
          rows="1"
          @keyup.enter="searchByKeywords"
        >
          <template #label>
            Procure por palavras-chave
            <v-icon small style="vertical-align: middle"> mdi-magnify </v-icon>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="auto" align-self="center">
        <v-btn color="primary" @click="searchByKeywords"> Pesquisar </v-btn>
      </v-col>
      <v-col cols="auto" align-self="center">
        <v-btn color="accent" @click="$router.push('/cadastro')">
          Cadastrar Ideia
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(idea, i) in ideas"
        :key="i"
        class="my-2 d-flex justify-center"
        cols="12"
        md="6"
      >
        <TccPreviewCard
          :id="idea.id"
          class="mx-5"
          :body="idea.body"
          :title="idea.title"
        />
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import TccPreviewCard from '~/components/tccPreviewCard.vue'

export default {
  name: 'IndexPage',
  components: { TccPreviewCard },
  data() {
    return {
      search: '',
      ideas: [
        {
          id: '',
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          id: '',
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          id: '',
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          id: '',
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          id: '',
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
      ],
      loading: false,
    }
  },
  methods: {
    searchByKeywords() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },
}
</script>

<style scoped></style>
