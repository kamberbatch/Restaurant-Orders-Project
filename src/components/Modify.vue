<template>
    <div>
        <div v-for="(item,index) in datapacket" :key="index">
            <p>{{item['name']}}: {{item['count']}}</p>
            <input type="number" :id="index" placeholder="0" min="0"/>
        </div><br>
        <button v-on:click="updateOrder()">Update Order</button>
    </div>
</template>

<script>
import database from '../firebase';
export default {
    data() {
        return {
            datapacket: null,
            copy: null
        }
    },
    methods: {
        fetchItems: function() {
            database.collection('orders').doc(this.$route.params.id).get().then(snapshot => {
                this.datapacket = (snapshot.data());
                this.copy = (snapshot.data());
            })
        },
        updateOrder: function() {
            for (var i = 0; i < Object.keys(this.datapacket).length; i++) {
                var newval = parseInt(document.getElementById(i).value);
                this.copy[i]["count"] = newval;
            }
            database.collection('orders').doc(this.$route.params.id).set(this.copy).then(() => {
                this.$router.push({ path: '/orders' })
            });
        }
    },
    created() {
        this.fetchItems();
    }
}

</script>