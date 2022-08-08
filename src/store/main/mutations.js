export const mutations = {
  setList (state, payload) {
    state.list = payload;
  },
  setCounterValue(state, payload) {
    state.counter = state.counter + payload;
  },
};