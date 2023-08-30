<template>
  <div class="d-flex flex-column justify-center align-center mt-12">
    <v-row>
      <v-text-field
        v-model="search"
        background-color="#fafafa"
        class="my-12 flex-grow-1 flex-shrink-0"
        style="min-width: 300px; max-width: 80%"
        autocomplete="nick"
        solo
        rows="1"
      >
        <template #label>
          Procure por palavras-chave
          <v-icon small style="vertical-align: middle"> mdi-magnify </v-icon>
        </template>
      </v-text-field>
    </v-row>
    <v-row justify="space-between" align="center" style="max-width: 1100px">
      <v-col
        v-for="(idea, i) in ideas"
        :key="i"
        class="my-2 d-flex justify-center"
        cols="12"
        sm="6"
        style="max-width: 550px"
      >
        <TccPreviewCard :body="idea.body" :title="idea.title" />
      </v-col>
    </v-row>
  </div>
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
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
        {
          title: 'Uma Ideia de TCC',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste distinctio autem recusandae minima qui, architecto nulla aliquam possimus. Quidem quas quam et libero. Atque, recusandae. Exercitationem voluptas quos fugiat! At sed architecto perferendis et enim iusto provident ipsa aliquid. Earum culpa ex perspiciatis accusantium voluptate fuga ipsa minima. Dolorum ab veritatis praesentium laborum commodi. Aliquid suscipit reprehenderit excepturi aut. Odio asperiores nesciunt nulla ea sunt! Ut eius porro atque labore fugiat cupiditate beatae, fuga officia delectus ipsam doloremque et dolor praesentium, neque enim repellat quod esse. Earum, illum alias. Aperiam nisi facilis similique fugiat natus ipsa expedita non sequi atque placeat porro molestias voluptate dicta quidem, molestiae, dolorum ipsam modi. Atque soluta quibusdam minima. Laudantium consequuntur praesentium dolor reiciendis!',
        },
      ],
    }
  },
}
</script>

<style scoped>
.tcc-card {
  background-color: #fafafa;
  min-width: 500px;
  max-width: 500px;
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
