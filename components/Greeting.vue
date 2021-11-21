<template>
  <div>
    <v-list-item two-line style="padding: 0">
      <v-list-item-avatar size="100" class="mr-7">
        <v-img alt="user_avatar" :src="require('../assets/avatar.jpg')" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          <h1 class="font-weight-regular">
            Good morning,
            <span class="font-weight-bold">{{ heading }}</span>
          </h1>
        </v-list-item-title>
        <v-list-item-subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          id cum odit, ad pariatur magnam impedit accusantium harum autem
          doloribus labore veritatis.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
    },
    subheading: {
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>
