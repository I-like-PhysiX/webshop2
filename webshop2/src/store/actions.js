import axios from 'axios'

export default {
  //Az action prop lénygében arra való, hogy például aszinkron módon meghívhassuk a loadData mutationt (a commit helyett a dispatch paranccsal) anélkül, hogy probléma merülne fel a szinkronizálással.

  loadData({commit}) {
    axios.get('http://localhost:3000')
    .then((res) =>{
      commit('tomb', res.data)
    }).then(() =>{
      commit('create_selection');
    }).then(() =>{
      dispatch('init');
    })
    .catch((error) => {
      console.log(error);
    });
  },
  szur( {commit} ) {
    commit('szur');
    commit('categoryrouter');
  },
  szur2( {commit} ) {
    commit('szur2');
    commit('searchrouter');
  },
  init( {commit} ) {
    commit('init');
    commit('initrouter');
  },
  reset_and_init( {commit, dispatch} ) {
    commit('onReset');
    commit('resetcart');
    dispatch('init');
  }
}
