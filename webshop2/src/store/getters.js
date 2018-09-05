export default {
  pageCount(state){
    if (state.szurttomb.length<=state.size){
      return 0;
    } else {
      return Math.floor(state.szurttomb.length/state.size);
    }
  },
  paginatedData(state){
    return state.szurttomb.slice(state.pageNumber * state.size, state.pageNumber * state.size + state.size);
  },
  osszeg(state){
    return Math.round(state.rendeles.reduce((o,v)=>o+v.egysar*v.alap,0)/5)*5;
  },
  rendeleshossz(state){
    return state.rendeles.length;
  }
}
