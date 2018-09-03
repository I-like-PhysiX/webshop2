<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" sticky>
     <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <div id="myContainer">
          <div class="my-3">
            <b-button-group>
              <b-btn
                      class="exPopoverReactive1"
                      size="md"
                      variant="dark"
                      style="text-align: center"
                      v-on:click="init()">
                      Webshop
              </b-btn>
            <b-btn
                   class="exPopoverReactive1"
                   v-on:click="basketrouter()"
                   v-if="csaktermekek"
                   size="md"
                   variant="dark"
                   style="text-align: center">
                   {{rendeles.length}} tétel
             </b-btn>
             <b-btn
                    class="exPopoverReactive1"
                    v-on:click="initrouter()"
                    v-if="!csaktermekek"
                    size="md"
                    variant="dark"
                    style="text-align: center">
                    Termékek
              </b-btn>
             </b-button-group>
          </div>
   </div>
   <b-collapse is-nav id="nav_collapse">
     <b-navbar-nav class="ml-auto">
       <ul class="navbar-nav mr-auto" style="margin-top: 15px;">
         <li class="nav-item active">
           <select id="selecttype" v-model="selected" v-on:change="szur()" class="form-control input-sm">
             <option value="" disabled>Termékfajták</option>
             <option v-for="(item, index) in species" :key="item.text" :value="item.value" :disabled="item.isdisabled">{{item.text}}</option>
           </select>
         </li>
         <li class="nav-item active">
           <select name="sortBy" id="sortBy" v-model="sortType" v-on:change="szur()" class="form-control input-sm">
             <option v-for="(item, index) in sortOptions" :key="item.text" :value="item.value" :disabled="item.isdisabled">{{item.text}}</option>
           </select>
         </li>
         <li class="nav-item active">
           <b-form-group
                         label-for="search">
             <b-form-input
                           class="form-control"
                           size="md"
                           placeholder="Keresés"
                           type="text"
                           id="search"
                           v-model="search"/>
           </b-form-group>
         </li>
         <li class="nav-item active">
           <b-btn
                         class="exPopoverReactive1"
                         v-on:click="szur2()"
                         size="md"
                         variant="dark"
                         style="text-align: center">
                         Keresés
           </b-btn>
         </li>
       </ul>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <router-view></router-view>

  <div class="text-mid" v-if="csaktermekek">
    <div class="center" style="text-align: center;">
      <b-button :disabled="pageNumber == 0 ? true : false" class="pagination-btn" v-on:click="updatepageNumber(-1)"> < </b-button>
      {{pageNumber}}/{{pageCount}}
      <b-button :disabled="pageNumber == pageCount ? true : false" class="pagination-btn" v-on:click="updatepageNumber(1)"> > </b-button>
    </div>
  </div>
  <b-navbar toggleable="md" variant="dark" class="bottom">
    <div class="footer" style="color:white;  margin: 0px auto;">
      © 2018. Minden jog fenntartva
    </div>
  </b-navbar>
 </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex';
import { mapMutations } from 'vuex';
export default {
  name: "app",
  data() {
    return {
    }
  },
  watch: {
   },
  methods: {
    ...mapMutations(['updatepageNumber','init','initrouter','basketrouter','szur','szur2','create_selection'])
  },
  mounted() {
    this.create_selection();
    this.init();
    /*
    this.$store.dispatch('loadData');
    console.log("App init");
    */
  },
  computed: {
    ...mapGetters(['pageCount','pageNumber','sortOptions','sortType','species','rendeles','csaktermekek']),
    selected:{
        get(){ return this.$store.getters.selected; },
        set( value ){ this.$store.commit("selected", value );}
    },
    sortType:{
        get(){ return this.$store.getters.sortType; },
        set( value ){ this.$store.commit("sortType", value );}
    },
    search:{
        get(){ return this.$store.getters.search; },
        set( value ){ this.$store.commit("search", value );}
    }
  }
}
</script>

<style scoped>
#app{
 font-family: courier;
 box-sizing: border-box;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -webkit-flex-direction: column;
   -ms-flex-direction: column;
   flex-direction: column;
   margin: 0 auto;
   min-height: 100vh;
}
.main{
 width:100%;
 overflow:hidden;
}
.bottom,.text-mid {
 padding:20px 10px;
 height:100%;
}
.text-mid {
 margin-top: auto;
 background:white;
}
.form-control {
   display: inline-block;
}
</style>
