import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pageNumber: 0,
    size: 4,
    itemsPerRow: 1,
    szurttombhossz:0,
    csaktermekek: true,
    search:'',
    tomb: [],
    szurttomb: [],
    rendeles: [],
    species: [],
    selected: '',
    sortType: '',
    sortOptions: [
      { text: 'Rendezés', value: '', isdisabled: true},
      { text: 'abc szerint', value: 'termek', isdisabled: false},
      { text: 'ár szerint', value: 'egysar', isdisabled: false}
    ],
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: []
  },
  getters: getters,
  mutations: mutations,
  actions: actions
});
