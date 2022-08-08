import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  list:[],
  counter: 10
};

export const main = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};