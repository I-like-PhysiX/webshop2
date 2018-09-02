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
      csakadatok: false,
      csakkosar: false,
      csakvasarlas: false,
      csaktermekek: true,
      search:'',
      url:``,
      tomb: [
        {id:1, type: "gyümölcs", termek: "Alma, gála", info: "Akció!", egysar:310, egys:'kg', alap:0, raktaron:true, url: 'https://4.imimg.com/data4/QY/GN/MY-24065638/fresh-apple-500x500.jpg'},
        {id:2, type: "gyümölcs", termek: "Alma, golden", info: "", egysar:350, egys:'kg', alap:0, raktaron:false, url: 'https://4.imimg.com/data4/QY/GN/MY-24065638/fresh-apple-500x500.jpg'},
        {id:3, type: "gyümölcs", termek: "Alma, jonatán", info: "", egysar:290, egys:'kg', alap:0, raktaron:true, url: 'https://4.imimg.com/data4/QY/GN/MY-24065638/fresh-apple-500x500.jpg'},
        {id:4, type: "gyümölcs", termek: "Körte, vilmos", info: "", egysar:550, egys:'kg', alap:0, raktaron:true, url: 'https://3.imimg.com/data3/WQ/FT/MY-7265137/fresh-pear-500x500.jpg'},
        {id:5, type: "gyümölcs", termek: "Narancs, lédig", info: "Akció!", egysar:350, egys:'kg', alap:0, raktaron:false, url: 'https://www.fruitsinfo.com/images/fruits-list-large/wild-orange-3.jpg'},
        {id:6, type: "gyümölcs", termek: "Banán, lédig", info: "", egysar:350, egys:'kg', alap:0, raktaron:true, url: 'https://5.imimg.com/data5/CT/TI/MY-8900429/ripened-organic-banana-500x500.jpg'},
        {id:7, type: "gyümölcs", termek: "Eper, magyar", info: "Akció!", egysar:600, egys:'kg', alap:0, raktaron:true, url: 'https://5.imimg.com/data5/FY/QK/MY-40752636/fresh-strawberry-500x500.jpg'},
        {id:8, type: "tejtermék", termek: "Tejföl, kunsági, 250 g", info: "", egysar:250, egys:'doboz', alap:0, raktaron:true, url: 'https://i5.walmartimages.com/asr/278c6980-ff4c-4c6f-8bcc-c7a13bd4b987_1.9513a8277bd8464ff661e6ddf8113f8f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'},
        {id:9, type: "tejtermék", termek: "Tejföl, Riska, 250g", info: "Akció!", egysar:350, egys:'doboz', alap:0, raktaron:false, url: 'https://i5.walmartimages.com/asr/278c6980-ff4c-4c6f-8bcc-c7a13bd4b987_1.9513a8277bd8464ff661e6ddf8113f8f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}
            ],
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
