<template>
  <div id="paginatedData" class="text-mid">
    <div class="center" style="text-align: center;">
      <b-button :disabled="pageNumber == 0 ? true : false" class="pagination-btn" v-on:click="updatepageNumber(-1)"> < </b-button>
      {{pageNumber}}/{{pageCount}}
      <b-button :disabled="pageNumber == pageCount ? true : false" class="pagination-btn" v-on:click="updatepageNumber(1)"> > </b-button>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapMutations, mapActions, mapState} from 'vuex';

export default {

  data() {
    return {

    }
  },
  watch: {

  },
  methods: {
    ...mapMutations(['updatepageNumber'])
  },
  mounted() {
    console.log("paginatedData init");
  },
  computed: {
    ...mapGetters(['pageCount']),
    ...mapState(['pageNumber'])
  }
}
</script>

<style scoped>

</style>
