<template>
  <div>
    {{stacks}}
    <v-calendar
      ref="calendar"
      :now="today"
      :value="today"
      :events="events"
      color="primary"
      type="week"
      event-height="100"
      event-margin-bottom="15"
      interval-count="0"
    >
      <template v-slot:event="event">
        <div>
          <v-row class="px-2 py-2">
            <v-col xl="4">
              <v-list-item three-line dark>
                <v-list-item-avatar color="" size="48">
                  <v-img
                    alt="user_avatar"
                    :src="require('../assets/avatar.jpg')"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Admin Dashboard</v-list-item-title>

                  <v-list-item-subtitle>
                    consectetur adipiscing elit.
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    <v-progress-linear
                      v-model="skill"
                      height="20"
                      rounded
                      color="white"
                      light
                      style="width: 200px"
                    >
                      <template v-slot:default="{ value }">
                        <strong>23/30 tasks done</strong>
                      </template>
                    </v-progress-linear>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <p>asd</p>
            </v-col>
          </v-row>
        </div>
      </template>
    </v-calendar>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('stacks/get_stacks')
  },
  data: () => ({
    today: '2019-02-20',

    events: [
      {
        name: 'Admin Dashboard',
        start: '2019-02-17',
        end: '2019-02-20',
      },
      {
        name: 'Admin Dashboard',
        start: '2019-02-17',
        end: '2019-02-22',
      },
    ],
  }),
  computed: {
    ...mapState({
      stacks: (state) => {
        return state.stacks.stacks
      },
    }),
  },
  mounted() {
    this.$refs.calendar.scrollToTime('08:00')
  },
}
</script>
