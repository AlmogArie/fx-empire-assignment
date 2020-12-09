import storageService from './storageService'

import axios from 'axios'


// Async dinamic function which gets two parameters (period and precision) and returns organized data for later use in the graph
// In this function I saved the data in sessionStorage and before each call for the API i checked if their is data stored in 
// SessionStorage

async function getGraphData(period, precision) {

    const PORT = `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`

    const localGraphData = storageService.load(`${period}-${precision}`)

    if (localGraphData.length) return localGraphData

    try {
        console.log('calling server');
        const data = await axios.get(PORT)
        const graphData = data.data

        let graphDataArray = graphData.map(Object.values)

        graphDataArray.forEach(arr => {
            arr.splice(0, 2)
            arr.splice(4, 1)
            arr[4] = new Date(arr[4]).getTime()
            _arrayArrangment(arr)
        })

        storageService.store(`${period}-${precision}`, graphDataArray)

        return graphDataArray

    } catch (error) {
        console.log('error', error);
    }
}



// Local function which organize a given array in a mode that Highcharts library can read from.

function _arrayArrangment(array) {
    const timeValue = array[4]
    array.splice(4, 1)
    array.unshift(timeValue)
}

export default getGraphData