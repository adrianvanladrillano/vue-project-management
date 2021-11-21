<template>
  <div>
    <v-bottom-navigation color="primary" class="hidden-md-and-up">
      <v-btn value="recent" v-for="item in items" :key="item.link" :to="item.to">
        <span>Recent</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mini: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        {
          title: 'Projects',
          icon: 'mdi-folder-multiple',
          to: '/Projects'
        },
        { title: 'Tasks', icon: 'mdi-clipboard-list', to: '/Tasks' }
      ],
      links: ['Home', 'Contacts', 'Settings']
    }
  }
}
</script>
