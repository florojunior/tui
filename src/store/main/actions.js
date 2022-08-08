import { getList } from '../../services/api/hotel';
export const actions = {
  async fetchList(state, payload) {
    try {
      const list = await getList(state.getters.getCounter, payload)
      state.commit('setList', list.data);
    } catch (error) {
      console.error(error);
    }
  },
  increaseCounterPageValue(state){
    state.commit('setCounterValue', 10);
  }
};
