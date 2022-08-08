import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  openMenu: false
};

export const template = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};