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
    let osszeg=0;
    state.rendeles.forEach((v, k) => { osszeg+=v.reszosszeg });
    return osszeg;
  },
  rendeleshossz(state){
    return state.rendeles.length;
  }
}
