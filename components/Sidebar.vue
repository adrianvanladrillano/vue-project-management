<template>
  <v-navigation-drawer
    color
    mini-variant-width="94"
    permanent
    width="300"
    mini-variant
    class="hidden-sm-and-down"
    app
    style="border-top-right-radius: 36px;border-bottom-right-radius: 36px;"
  >
    <v-list>
      <v-list-item class="px-0 align-center justify-center fill-height">
        <v-list-item-content>
          <v-list-item
            link
            v-for="item in items"
            :key="item.link"
            :to="item.to"
            router
            exact
            class="mt-5"
          >
            <v-list-item-icon>
              <v-icon color="grey">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="px-5 py-1 mb-5">
        <v-list-item-avatar style="width: 100%; height: 100%">
          <v-img alt="user_avatar" :src="require('../assets/avatar.jpg')" />
        </v-list-item-avatar>
      </div>
    </template>

    <template v-slot:prepend>
      <div class="px-5 py-1">
        <v-list-item-avatar style="width: 100%; height: 100%">
          <v-img
            src="https://images.vexels.com/media/users/3/137617/isolated/preview/c45afb857e72b86e87baaf255f71ff37-geometric-logo-abstract-by-vexels.png"
          />
        </v-list-item-avatar>
      </div>
    </template>
  </v-navigation-drawer>
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
