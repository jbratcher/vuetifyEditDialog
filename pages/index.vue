<template>
  <v-layout
      column
      justify-center
      align-center
    >
      <v-flex>

        <!-- Add Event Button -->
        <p>
          <v-icon class="add-new-event">
            mdi-calendar-plus
          </v-icon>
          <span>Add Event</span>
        </p>

        <!-- Calendar -->
        <v-sheet width="80vw">
          <v-calendar
              type="month"
              value="2019-11-01"
              :events="events"
              event-color="primary"
              width="800px"
            />
        </v-sheet>

        <!-- Dialogs -->
        <template v-for="event in events">
          <EventDialog
            :key="event.id"
            :event="event"
          />
        </template>

        <!-- Add New Event Dialog -->
        <NewEventDialog />

      </v-flex>
    </v-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import EventDialog from '../components/EventDialog.vue';
import NewEventDialog from '../components/NewEventDialog.vue';

export default {
  components: {
    EventDialog,
    NewEventDialog,
  },
  computed: {
    ...mapState('events', [
      'events',
    ]),
  },
  created () {
    this.fetchEvents();
  },
  methods: {
    ...mapActions('events', [
      'fetchEvents',
    ]),
  }
}
</script>

<style lang="scss">
  .add-new-event {
    cursor: pointer;
  }
</style>
