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
  csaktermekek(state){
    return state.csaktermekek;
  },
  rendeles(state){
    return state.rendeles;
  },
  csakkosar(state){
    return state.csakkosar
  },
  species(state){
    return state.species;
  },
  selected(state){
    return state.selected;
  },
  sortType(state){
    return state.sortType;
  },
  sortOptions(state){
    return state.sortOptions;
  },
  search(state){
    return state.search;
  },
  szurttombhossz(state){
    return state.szurttombhossz;
  },
  itemsPerRow(state){
    return state.itemsPerRow;
  },
  pageNumber(state){
    return state.pageNumber;
  }
}
