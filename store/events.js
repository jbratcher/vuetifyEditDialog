export const state = () => ({
  events: [
    {
      name: '1st event',
      description: 'This is the first event',
      start: '2019-11-20'
    },
    {
      name: '2nd event',
      description: 'This is the second event',
      start: '2019-11-23'
    }
  ],
  newEventName: '',
  newEventDescription: '',
  newEventStart: new Date().toISOString().substr(0, 10),
});

export const actions = {
  createEvent({ commit, state }) {
    commit('appendSpaceEvent', {
      name: state.newEventName,
      description: state.newEventDescription,
      start: state.newEventStart,
    });
  },
  // updateSpaceEvent({ commit, state, rootState }, spaceEvent) {
  //   this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
  //   return this.$axios.$patch(`/space-events/${spaceEvent.id}`, spaceEvent);
  // },
  // deleteSpaceEvent({ commit, rootState }, spaceEvent) {
  //   this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
  //   return this.$axios.$delete(`/space-events/${spaceEvent.id}`, spaceEvent)
  //     .then(() => {
  //       commit('removeSpaceEvent', spaceEvent)
  //     })
  //     .catch((error) => {
  //       console.log(`Remove event error: ${error}`);
  //     })
  // },
  fetchEvents () {
    return state.events;
  },
};

export const mutations = {
  setNewEventName (state, name) {
    state.newEventName = name;
  },
  setNewEventDescription (state, description) {
    state.newEventDescription = description;
  },
  setNewEventStart (state, start) {
    state.newEventStart = start;
  },
  appendSpaceEvent (state, event) {
    state.events.push(event);
  },
  removeSpaceEvent(state, event) {
    state.events.splice(state.events.indexOf(event), 1);
  },
};
