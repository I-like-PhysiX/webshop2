import router from '../router'

export default {
  updatepageNumber(state, diff){
    state.pageNumber+=diff;
  },
  tomb(state, adat){
    state.tomb=adat;
  },
  addtocart(state, elem, step){
    elem.alap = Math.round((elem.alap + step) * 10) / 10;
    state.rendeles.push(elem);
    state.rendeles=Array.from(new Set(state.rendeles));
  },
  removefromcart(elem, step){
    elem.alap = Math.round((elem.alap - step) * 10) / 10;
    if (elem.alap==0){
      del(elem);
    }
  },
  del(state, elem){
    elem.alap=0;
    state.rendeles.splice(state.rendeles.indexOf(elem), 1);
  },
  init(state){
    state.szurttomb = state.tomb.filter(v => v.info=="Akció!");
    state.itemsPerRow=state.szurttomb.length;
    state.szurttombhossz=state.szurttomb.length;
    state.pageNumber=0;
    state.search='';
    state.sortType='';
    state.selected='';
    initrouter();
  },
  create_selection(state) {
    let mySet = new Set();
    state.tomb.forEach(v => mySet.add(v.type));
    let myArray = Array.from(mySet);
    state.species=[];
    myArray.forEach(v => state.species.push({
      text: v,
      value: v,
      isdisabled: false
    })
  );
},
resetcart(state) {
  state.rendeles=[];
  console.log('Reset cart');
},
initrouter(state){
  router.push(`/`);
  state.csaktermekek=true;
},
searchrouter(state){
  router.push(`/kereses/${state.search}/`);
  state.csaktermekek=true;
  state.search='';
},
categoryrouter(state){
  router.push(`/${state.selected}/${state.sortType+"_szerinti_rendezes"}/`);
  state.csaktermekek=true;
},
basketrouter(state){
  router.push(`/kosar/`);
  state.search='';
  state.csaktermekek=false;
},
datarouter(state){
  router.push(`/adatok/`);
  state.csaktermekek=false;
},
szur(state) {
  state.pageNumber=0;
  state.szurttomb = state.tomb.filter(v => v.type==state.selected);
  switch (state.sortType) {
    case 'termek':
    state.szurttomb=state.szurttomb.sort((a,b) => a.termek > b.termek);
    break;
    case 'egysar':
    state.szurttomb=state.szurttomb.sort((a,b) => a.egysar > b.egysar);
    break;
  };
  state.itemsPerRow=state.szurttomb.length;
  state.szurttombhossz=state.szurttomb.length;
  categoryrouter();
},
szur2(state){
  state.pageNumber=0;
  if (state.search!='') {
    state.szurttomb =state.tomb.filter(v => RegExp(state.search,'i').test(v.termek)).slice(0,9);
    state.itemsPerRow=state.szurttomb.length;
    state.szurttombhossz=state.szurttomb.length;
    searchrouter(state);
  }
},
selected(state, payload){
  state.selected=payload;
},
sortType(state, payload){
  state.sortType=payload;
},
search(state, payload){
  state.search=payload;
},
input1(state, payload){
  state.input1=payload;
},
input2(state, payload){
  state.input2=payload;
},
input3(state, payload){
  state.input3=payload;
},
input4(state, payload){
  state.input4=payload;
},
input5(state, payload){
  state.input5=payload;
},
onReset(state){
  state.input1='';
  state.input2='';
  state.input3='';
  state.input4='';
  state.input5='';
}
}
