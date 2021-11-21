<template>
  <div>
    <v-card class="overflow-hidden hidden-md-and-up">
      <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600">
        <v-container style="height: 1500px;"></v-container>
      </v-sheet>
    </v-card>
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
        { title: 'Tasks', icon: 'mdi-clipboard-list', to: '/Tasks' },
        { title: 'Calendar', icon: 'mdi-calendar', to: '/Calendar' },
        { title: 'Reports', icon: 'mdi-file-cabinet', to: '/Reports' }
      ],
      links: ['Home', 'Contacts', 'Settings']
    }
  }
}
</script>
