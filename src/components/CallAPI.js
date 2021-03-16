import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        results: null,
        storagevalues: {},
        storagelabels: {},
        regions: {},
        datacollection: {
            labels: [],
            datasets: [{
                label: "west",
                type: "line",
                borderColor: "red",
                data: [],
                fill: false
            },
            {
                label: "national",
                type: "line",
                borderColor: "black",
                data: [],
                fill: false
            },
            {
                label: "east",
                type: "line",
                borderColor: "yellow",
                data: [],
                fill: false
            },
            {
                label: "central",
                type: "line",
                borderColor: "green",
                data: [],
                fill: false
            },
            {
                label: "south",
                type: "line",
                borderColor: "blue",
                data: [],
                fill: false
            },
            {
                label: "north",
                type: "line",
                borderColor: "purple",
                data: [],
                fill: false
            }
        ]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: ''
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes:[{
                    ticks:{
                        precision: 0
                    }
                }]
            }
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get('https://api.data.gov.sg/v1/environment/psi?date=2021-02-23').then( response => {
            this.results = response.data
            var regiondata = this.results.region_metadata
            for (var i = 0; i < (regiondata).length; i++) {
                this.regions[i] = (regiondata[i].name)
            //    this.datacollection.datasets[0].data.push(this.results[key])
            }
            var itemdata = this.results.items
            for (var j = 0; j < (itemdata).length; j++) {
                this.storagevalues[j] = itemdata[j].readings.psi_twenty_four_hourly
                this.storagelabels[j] = itemdata[j].timestamp
            }
            console.log(Object.values(this.storagevalues)[2]["central"])
            //console.log(this.regions)
            //console.log(this.storagevalues)
            //console.log(this.storagelabels)

            //console.log(this.regions[3])
            //
            
            this.datacollection.labels = Object.values(this.storagelabels)

            var lines = this.datacollection.datasets
            for (let k = 0; k < lines.length; k++) {
                
                var regionname = (lines[k]).label

                for (let m = 0; m < Object.values(this.storagevalues).length; m++) {
                    lines[k].data.push(Object.values(this.storagevalues)[m][regionname])

                }
                
            }
            console.log(this.datacollection.datasets)
            this.renderChart(this.datacollection, this.options)
                
        })
        
    }
  },
  mounted() {
    console.log("nani12")
    this.fetchItems()
    
  }
}