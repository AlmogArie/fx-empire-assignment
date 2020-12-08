import getGraphData from '../services/GraphDataService'
import React, { Component } from 'react';
import ReactLoading from 'react-loading';


// import Graph from '../cmps/Graph'
import Graph from '../cmps/Graph'



class Home extends Component {

    state = {
        graphData: null,
        isLoading: true
    }

    componentDidMount() {
        this.loadGraphData(1, 'Minutes')
    }

    // Load the graph data and setting state.
    loadGraphData = async (period, precision) => {
        var graphData = await getGraphData(period, precision)
        this.setState({ graphData })
        this.setState({ isLoading: false })

    }

    // A function which passed as props for the buttons component to change time stamps when calling the API
    onChangePeriod = async (period, precision) => {
        this.setState({ isLoading: true })
        var newGraphData = await this.loadGraphData(period, precision)
    }


    render() {

        const { graphData, isLoading } = this.state

        return (isLoading) ? <ReactLoading type={`spin`} color={`#60b625`} height={'150px'} width={'150px'} className='loader' /> : (
            <div>
                <Graph data={graphData} onChangePeriod={this.onChangePeriod} />
            </div>
        );
    }
}

export default Home;