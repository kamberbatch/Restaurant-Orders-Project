<template>
    <div>
        <nav>
            <ul>
                <li><router-link to='/' exact>Home</router-link></li>
                <li><router-link to='/orders' exact>Orders</router-link></li>
                <li><router-link to='/dashboard' exact>Dashboard</router-link></li>
            </ul>
            <h1>Bar Chart</h1>
            <chart></chart>
            <callapi></callapi>

        </nav>
    </div>
</template>

<script>
import barchart from './charts/BarChart.vue'
import CallAPI from './CallAPI.vue'
//import BarChart from './Basket.vue';
//import database from "../firebase.js"

export default {
    components: {
        'callapi': CallAPI,
        'chart': barchart
    }
}
</script>
