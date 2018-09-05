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
          {{rendeleshossz}} tétel
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

<paginatedData v-if="csaktermekek"></paginatedData>

<b-navbar toggleable="md" variant="dark" class="bottom">
  <div class="footer" style="color:white;  margin: 0px auto;">
    © 2018. Minden jog fenntartva
  </div>
</b-navbar>
</div>
</template>

<script>

import {mapGetters, mapMutations, mapActions, mapState} from 'vuex';
import paginatedData from './components/paginatedData.vue';

export default {
  name: "app",
  components: {
    paginatedData: paginatedData
  },
  data() {
    return {

    }
  },
  watch: {

  },
  methods: {
    ...mapMutations(['create_selection','initrouter','basketrouter']),
    ...mapActions(['loadData','szur','szur2','init'])
  },
  mounted() {
    this.loadData();
    console.log("App init");
  },
  computed: {
    ...mapGetters(['rendeleshossz']),
    ...mapState(['csaktermekek','sortOptions','sortType','species']),
    selected:{
      get(){ return this.$store.state.selected; },
      set( value ){ this.$store.commit("selected", value );}
    },
    sortType:{
      get(){ return this.$store.state.sortType; },
      set( value ){ this.$store.commit("sortType", value );}
    },
    search:{
      get(){ return this.$store.state.search; },
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
