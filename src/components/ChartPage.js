import React from 'react';
import {Line as LineChart} from 'react-chartjs';

let data = [ {
    period: "2015/10",
    state: "nacional",
    value: "0.427473608955"
},
{
    period: "2015/11",
    state: "nacional",
    value: "0.198357253439"
}
]

let dataYuc = [
    {
    period: "2015/10",
    state: "yucatan",
    value: "8.168076744638"
},
{
    period: "2015/11", 
    state: "yucatan",
    values: "2.384237617361"
}
]

let dataNacionalValues = data.map( (object) => {
    return object.value;
});

let dataYucValues = dataYuc.map( (object) => {
    return object.value;
});


let chartData = {

	labels: ["2015/10", "2015/11"],
    datasets: [
        {
            label: "Nacional",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: dataNacionalValues,
        },
        {
            label: "Yucatan",
            backgroundColor: "rgba(151,187,205,1)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: dataYucValues,
        },
    ]
    };

let chartOptions = {
        responsive: true,
    };

class ChartPage extends React.Component {
	render() {
		return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
	}
}

export default ChartPage;
