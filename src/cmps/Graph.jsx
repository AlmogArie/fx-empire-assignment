import React from 'react';
import Button from './Button'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


function Graph(props) {

    // btnData is an array for creating the time stamps buttons, it contains desplay and the two parameters which will be passed 
    // ownards for the onChangePeriod funciton
    const btnData = [
        { txt: '1 Minute', precision: 'Minutes', period: '1', id: 1 },
        { txt: '5 Minutes', precision: 'Minutes', period: '5', id: 2 },
        { txt: '1 Hour', precision: 'Hour', period: '1', id: 3 },
        { txt: '1 Week', precision: 'Hour', period: '168', id: 4 },
    ]

    // setting for Highcharts graph
    const options = {
        chart: {
            reflow: true
        },
        rangeSelector: {
            inputEnabled: false,
            buttonTheme: {
                visibility: 'hidden'
            },
            labelStyle: {
                visibility: 'hidden'
            },
        },
        title: {
            text: 'FX Empire - Stock API'
        },
        subtitle: {
            text: 'Dates 8/28/2020 - 9/4/2020'
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            series: {
                showInLegend: true
            }
        },
        series: [{
            type: 'ohlc',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: props.data
        },
        ],
        containerProps: {

        },
        credits: {
            text: 'FX Empire',
            href: 'https://www.fxempire.com/',
            style: {
                color: 'grey',
                fontSize: '15px'
            }
        },



    }


    return (
        <section className='graph-section flex column align-center'>
            <div className="btns flex space-around">
                {btnData.map(data => <Button key={data.id} data={data} onChangePeriod={props.onChangePeriod} />)}
            </div>

            <div className='graph-container'>
                <HighchartsReact
                    containerProps={{ style: { height: "100%" } }}
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            </div>
        </section>
    );
}

export default Graph;