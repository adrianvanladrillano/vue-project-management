<template>
  <div>
    <v-list-item two-line style="padding: 0">
      <v-list-item-content>
        <v-list-item-title>
          <h1 class="">
            <span class="font-weight-bold">{{this.data}}</span>
          </h1>
        </v-list-item-title>
        <v-list-item-subtitle>{{this.subheading}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="84">
        <v-icon x-large>mdi-folder-multiple-outline</v-icon>
      </v-list-item-avatar>
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
    data: {
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>
