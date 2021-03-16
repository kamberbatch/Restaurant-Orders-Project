<template>
  <div>
    <ul>
      <li v-for="item in itemsSelected" :key="item.name">
        {{item[0]}} x {{item[1]}}
      </li>
    </ul>
    <button v-on:click="findTotal();sendOrder()">Calculate Total</button>
    <p v-show="show">Subtotal: ${{total}}</p>
    <p v-show="show">Grand Total: ${{grandTotal}}</p>
  </div>
</template>

<script>
import database from '../firebase.js'
export default {
  data() {
    return {
      total: 0,
      show: false,
      grandTotal: 0
    }
  },
  props: {
    itemsSelected: {
      type: Array
    }
  },
  methods:{
    findTotal: function() {
      this.total = 0;
      for (var item of this.itemsSelected) {
        this.total += item[1]*item[2];
      }
      this.show = true;
    },
    sendOrder: function() {
      var order={};
      var len = this.itemsSelected.length;
      for(let i=0; i<len; i++) {
        order[i] = {
          name: this.itemsSelected[i][0],
          count: this.itemsSelected[i][1],
          price: this.itemsSelected[i][2]
        }
      }
      database.collection('orders').add(order).then(() => {location.reload()});
    }
  },
  watch: {
    total: function() {
      this.grandTotal = (this.total*1.07).toFixed(2);
    }
  }
  
}

</script>

<style>


</style>
