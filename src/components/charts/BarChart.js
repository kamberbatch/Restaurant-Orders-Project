import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        storage: {},
        datacollection: {
            labels: [],
            datasets: [{
                label: "Orders",
                backgroundColor: ["red","orange","yellow","green","blue","purple"],
                data: []
            }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total:'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1,
                        reverse: false,
                        beginAtZero: true
                        }
                    }]
            }
            
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(snapshot => {
        snapshot.docs.forEach(doc => { 
            var items = Object.values(doc.data())
            for (var i =0; i<items.length; i++) {
                var item = items[i]
                console.log("yoyoyo")
                console.log((item["name"]))
                console.log((this.storage))
                console.log(item.count)
                
                if ((item["name"] in (this.storage))) {
                    this.storage[item["name"]] +=  item.count;
                    
                } else {
                    this.storage[item["name"]] = item.count;
                }
                console.log(this.storage);
            }
        })
      }).then(() => {
            this.datacollection.labels = Object.keys(this.storage);
            this.datacollection.datasets[0].data = Object.values(this.storage);
    
            console.log(this.datacollection)
        
            this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  },

}