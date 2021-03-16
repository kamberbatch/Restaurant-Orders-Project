<template>
  <div>
    <button class="eqs" v-on:click="decrement">-</button>
    <span id="value">{{counter}}</span>
    <button class="eqs" v-on:click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'QuantityCounter',
  props: {
    item: {

    }
  },
  data () {
    return {
     counter: 0
    }
  },
  methods: {
    increment: function() {
      if (this.counter == 10) {
        alert( "You cannot buy more than 10 items.")
      } else {
        this.counter = this.counter + 1
      }
      this.$emit('counter', this.item, this.counter)
    },
    decrement: function() {
      if (this.counter==0) {
        return
      } else {
        this.counter = this.counter - 1
      }
      this.$emit('counter', this.item, this.counter)
    }
  }

}

</script>

<style>
.eqs {
  display: inline-block;
  height: 70px;
  width: 70px;
  border-radius: 8px;
  font-size: 40px;
  background-color: rgb(255, 202, 202);
  margin-left: 10px;
  margin-right: 10px;
}
#value {
  font-size: 50px;
}

</style>
