<template>
  <div>
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="avatar" alt v-if="avatar != null" />
        <v-avatar :color="title == 'vue' ? 'green' : 'primary'" size="62" v-else>
          <span class="white--text headline">{{ title.charAt(0) }}</span>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-subtitle>{{ subheading }}</v-list-item-subtitle>
        <v-list-item-subtitle class="text--primary">
          <a :href="subheader_link" class="text-decoration-none">
            {{
            subheader
            }}
          </a>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>{{ actions }}</v-list-item-action-text>

        <v-btn @click="$emit('showDeleteDialog')" fab plain>
          <v-icon color="red darken-3">mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    subheading: {
      type: String
    },
    subheader: {
      type: String
    },
    subheader_link: {
      type: String
    },
    actions: {
      type: String
    },
    methods: {
      type: String
    },
    avatar: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {
    showDialog() {
      console.log('something')
    }
  },
  mounted() {
    console.log(this.title)
  }
}
</script>
