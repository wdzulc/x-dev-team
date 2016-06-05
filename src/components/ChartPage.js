import React from 'react';
import {Line as LineChart} from 'react-chartjs';

const db = [
{period:"2004/01",nacional:"8.961688797721",yucatan:"-6.111816956182"},
{period:"2004/02",nacional:"0.427989443841",yucatan:"-33.503757551769"},
{period:"2004/03",nacional:"10.873561154455",yucatan:"-0.230547696084"},
{period:"2004/04",nacional:"8.857768107036",yucatan:"-12.239440269317"},
{period:"2004/05",nacional:"8.690931968566",yucatan:"-0.395543100767"},
{period:"2004/06",nacional:"8.979831002334",yucatan:"15.220829995826"},
{period:"2004/07",nacional:"5.005103048455",yucatan:"2.49513314664"},
{period:"2004/08",nacional:"2.223438425743",yucatan:"-0.257714916318"},
{period:"2004/09",nacional:"6.577010742977",yucatan:"-19.293004268648"},
{period:"2004/10",nacional:"5.72856347475",yucatan:"1.543158555617"},
{period:"2004/11",nacional:"11.407954264356",yucatan:"1.709315842773"},
{period:"2004/12",nacional:"7.286812910163",yucatan:"15.102759620563"},
{period:"2005/01",nacional:"2.797850459549",yucatan:"19.931530945475"},
{period:"2005/02",nacional:"2.609658903141",yucatan:"40.560445176674"},
{period:"2005/03",nacional:"-0.275137644778",yucatan:"-17.088481335083"},
{period:"2005/04",nacional:"4.870800378133",yucatan:"7.0326033588"},
{period:"2005/05",nacional:"4.052044315567",yucatan:"27.126207932119"},
{period:"2005/06",nacional:"1.883429813327",yucatan:"-4.777782169154"},
{period:"2005/07",nacional:"2.249954559448",yucatan:"13.635715174794"},
{period:"2005/08",nacional:"3.543634837186",yucatan:"-0.154000875172"},
{period:"2005/09",nacional:"2.132360964535",yucatan:"23.367630488556"},
{period:"2005/10",nacional:"3.68329670483",yucatan:"22.448564008456"},
{period:"2005/11",nacional:"6.787012381671",yucatan:"46.107570208233"},
{period:"2005/12",nacional:"8.647101393129",yucatan:"22.957108784915"},
{period:"2006/01",nacional:"2.691392045672",yucatan:"20.195165512279"},
{period:"2006/02",nacional:"5.106056904664",yucatan:"6.959154579219"},
{period:"2006/03",nacional:"9.889995112537",yucatan:"27.336344324859"},
{period:"2006/04",nacional:"5.539307851469",yucatan:"-2.405307413172"},
{period:"2006/05",nacional:"9.404700929492",yucatan:"-24.836004254837"},
{period:"2006/06",nacional:"7.976925838361",yucatan:"12.624680764097"},
{period:"2006/07",nacional:"10.913205772008",yucatan:"23.717901612607"},
{period:"2006/08",nacional:"12.524019666957",yucatan:"29.547116012201"},
{period:"2006/09",nacional:"11.561343526063",yucatan:"41.563773792702"},
{period:"2006/10",nacional:"12.620874617852",yucatan:"25.530032831306"},
{period:"2006/11",nacional:"8.552556146207",yucatan:"-7.584656728211"},
{period:"2006/12",nacional:"7.303803919839",yucatan:"-5.180867838508"},
{period:"2007/01",nacional:"4.916269435934",yucatan:"4.275629336873"},
{period:"2007/02",nacional:"7.706580231279",yucatan:"9.011322114317"},
{period:"2007/03",nacional:"4.02883902335",yucatan:"16.73757979868"},
{period:"2007/04",nacional:"3.837474609441",yucatan:"2.552692272252"},
{period:"2007/05",nacional:"3.240587051636",yucatan:"34.295275725262"},
{period:"2007/06",nacional:"1.369000622135",yucatan:"5.984700716381"},
{period:"2007/07",nacional:"3.251794914437",yucatan:"13.023685624427"},
{period:"2007/08",nacional:"2.210267817693",yucatan:"-14.7514355858"},
{period:"2007/09",nacional:"2.628654413846",yucatan:"-12.07053960361"},
{period:"2007/10",nacional:"6.734660448926",yucatan:"-6.845774743095"},
{period:"2007/11",nacional:"7.311503184983",yucatan:"27.721996387927"},
{period:"2007/12",nacional:"9.000727195715",yucatan:"5.651261611899"},
{period:"2008/01",nacional:"8.06468846256",yucatan:"61.466871671055"},
{period:"2008/02",nacional:"7.357395107092",yucatan:"40.684950749943"},
{period:"2008/03",nacional:"0.12478119014",yucatan:"21.757418948676"},
{period:"2008/04",nacional:"9.421956457333",yucatan:"24.579984623216"},
{period:"2008/05",nacional:"8.110909576464",yucatan:"-9.340334565421"},
{period:"2008/06",nacional:"10.572599439722",yucatan:"-12.46158314329"},
{period:"2008/07",nacional:"8.516360604459",yucatan:"-4.694009528226"},
{period:"2008/08",nacional:"0.413796803446",yucatan:"7.376012050986"},
{period:"2008/09",nacional:"-0.609769791452",yucatan:"2.532641497275"},
{period:"2008/10",nacional:"1.727608070885",yucatan:"-17.216296526306"},
{period:"2008/11",nacional:"-2.411873339139",yucatan:"-23.100932746995"},
{period:"2008/12",nacional:"-2.77738076598",yucatan:"-0.171947266747"},
{period:"2009/01",nacional:"-5.208024123393",yucatan:"-19.265762299253"},
{period:"2009/02",nacional:"-7.263890639949",yucatan:"-35.715006658879"},
{period:"2009/03",nacional:"-5.553805571373",yucatan:"-3.424709828818"},
{period:"2009/04",nacional:"-9.507499118678",yucatan:"-15.238374507891"},
{period:"2009/05",nacional:"-7.537116896182",yucatan:"37.225743426679"},
{period:"2009/06",nacional:"-4.624580432276",yucatan:"35.806668328429"},
{period:"2009/07",nacional:"-7.472013271001",yucatan:"-14.143899112594"},
{period:"2009/08",nacional:"-5.853361325327",yucatan:"-2.641503964637"},
{period:"2009/09",nacional:"-5.887274977954",yucatan:"-8.745357750649"},
{period:"2009/10",nacional:"-5.678805006933",yucatan:"0.198973180205"},
{period:"2009/11",nacional:"-2.835401755891",yucatan:"6.752952292158"},
{period:"2009/12",nacional:"-5.325982895283",yucatan:"-1.65888905761"},
{period:"2010/01",nacional:"-1.760019201003",yucatan:"22.740101979775"},
{period:"2010/02",nacional:"-3.015380390871",yucatan:"39.755775058769"},
{period:"2010/03",nacional:"0.922041849739",yucatan:"-2.894591274595"},
{period:"2010/04",nacional:"0.216858052566",yucatan:"8.963603698889"},
{period:"2010/05",nacional:"-0.37644106488",yucatan:"-19.695415732887"},
{period:"2010/06",nacional:"-3.653989273822",yucatan:"-9.288411754149"},
{period:"2010/07",nacional:"-1.800844464282",yucatan:"2.95490844377"},
{period:"2010/08",nacional:"2.253126626943",yucatan:"4.065036611346"},
{period:"2010/09",nacional:"4.098277057244",yucatan:"6.455584270488"},
{period:"2010/10",nacional:"4.606382551703",yucatan:"35.688493645124"},
{period:"2010/11",nacional:"3.107922966046",yucatan:"-7.050618830573"},
{period:"2010/12",nacional:"4.040865837413",yucatan:"-7.872833974335"},
{period:"2011/01",nacional:"1.666808444591",yucatan:"-29.926121992011"},
{period:"2011/02",nacional:"3.287139245876",yucatan:"5.870578500557"},
{period:"2011/03",nacional:"0.658347228385",yucatan:"-0.837111774684"},
{period:"2011/04",nacional:"3.331054562033",yucatan:"21.512842059214"},
{period:"2011/05",nacional:"5.414371944462",yucatan:"-1.058357073873"},
{period:"2011/06",nacional:"5.348548611965",yucatan:"25.010226156324"},
{period:"2011/07",nacional:"3.28504251738",yucatan:"-6.302276136363"},
{period:"2011/08",nacional:"4.547684365571",yucatan:"-0.362407098664"},
{period:"2011/09",nacional:"6.316915686075",yucatan:"-4.022565777272"},
{period:"2011/10",nacional:"4.81097418883",yucatan:"-6.99001173469"},
{period:"2011/11",nacional:"6.695475854176",yucatan:"18.094818324369"},
{period:"2011/12",nacional:"3.009723758019",yucatan:"12.72161808598"},
{period:"2012/01",nacional:"2.0286454896",yucatan:"22.333356326447"},
{period:"2012/02",nacional:"4.562186385208",yucatan:"8.558990942873"},
{period:"2012/03",nacional:"3.471977321145",yucatan:"30.157771970015"},
{period:"2012/04",nacional:"3.700721135805",yucatan:"5.488375209473"},
{period:"2012/05",nacional:"5.405399843293",yucatan:"16.556963239225"},
{period:"2012/06",nacional:"3.259873666141",yucatan:"-14.347526675775"},
{period:"2012/07",nacional:"4.296544179224",yucatan:"14.301611696733"},
{period:"2012/08",nacional:"2.362828078441",yucatan:"6.400683765407"},
{period:"2012/09",nacional:"0.964248809584",yucatan:"6.042798833642"},
{period:"2012/10",nacional:"0.072611198147",yucatan:"2.666348437654"},
{period:"2012/11",nacional:"1.914209298961",yucatan:"-1.280836503425"},
{period:"2012/12",nacional:"-1.581834966344",yucatan:"-4.659560866389"},
{period:"2013/01",nacional:"-3.808424575517",yucatan:"-16.964165355488"},
{period:"2013/02",nacional:"-2.335084641755",yucatan:"-24.336144158065"},
{period:"2013/03",nacional:"-3.518149470891",yucatan:"-33.060083951419"},
{period:"2013/04",nacional:"-1.379378356167",yucatan:"-7.045711997087"},
{period:"2013/05",nacional:"-4.82511499612",yucatan:"-22.04151728354"},
{period:"2013/06",nacional:"-5.837353812475",yucatan:"-12.674940797984"},
{period:"2013/07",nacional:"-6.476878323462",yucatan:"-18.532362673877"},
{period:"2013/08",nacional:"-6.215869737951",yucatan:"-11.392200071973"},
{period:"2013/09",nacional:"-8.122884457052",yucatan:"-11.335325848198"},
{period:"2013/10",nacional:"-7.60407607719",yucatan:"-8.4129073056"},
{period:"2013/11",nacional:"-4.757075008762",yucatan:"2.380182014973"},
{period:"2013/12",nacional:"-1.822811702459",yucatan:"9.817421340651"},
{period:"2014/01",nacional:"-1.938427974189",yucatan:"29.032931741092"},
{period:"2014/02",nacional:"-1.987949134111",yucatan:"5.865260856746"},
{period:"2014/03",nacional:"-0.419264454694",yucatan:"22.113380751193"},
{period:"2014/04",nacional:"-3.824970860346",yucatan:"-10.79850816544"},
{period:"2014/05",nacional:"-0.068046877804",yucatan:"-9.587042169539"},
{period:"2014/06",nacional:"2.291295761757",yucatan:"6.053416178642"},
{period:"2014/07",nacional:"3.65594995154",yucatan:"14.902745829755"},
{period:"2014/08",nacional:"3.935576107002",yucatan:"18.658802057865"},
{period:"2014/09",nacional:"4.689773160328",yucatan:"20.117627150809"},
{period:"2014/10",nacional:"5.460664949792",yucatan:"15.628536984173"},
{period:"2014/11",nacional:"4.469375536216",yucatan:"1.671410829524"},
{period:"2014/12",nacional:"6.706795000958",yucatan:"-5.648498232534"},
{period:"2015/01",nacional:"6.354695174049",yucatan:"-12.082927565439"},
{period:"2015/02",nacional:"1.003469173839",yucatan:"-7.77739724714"},
{period:"2015/03",nacional:"6.002799900108",yucatan:"-0.90436655711"},
{period:"2015/04",nacional:"5.63279792123",yucatan:"-6.343851299941"},
{period:"2015/05",nacional:"0.930941017003",yucatan:"5.243545295622"},
{period:"2015/06",nacional:"2.327429104106",yucatan:"3.469914104453"},
{period:"2015/07",nacional:"4.408108810172",yucatan:"-6.320733868304"},
{period:"2015/08",nacional:"2.487497560585",yucatan:"-5.558480003362"},
{period:"2015/09",nacional:"3.64534683835",yucatan:"-12.587829361039"},
{period:"2015/10",nacional:"1.085887142038",yucatan:"-8.175764633625"},
{period:"2015/11",nacional:"-1.210577001155",yucatan:"-5.402899448382"},
{period:"2015/12",nacional:"-1.418698973036",yucatan:"7.047820906336"},
{period:"2016/01",nacional:"3.928566872186",yucatan:"-1.123947119449"}
];

let dataPeriod = db.map((data) => {
            return data.period;
        });

let dataNacional = db.map((data, index) => {

            if(db[index + 1]){
                return (((db[index + 1].yucatan / data.nacional)-1) * 100);
            }
});

let dataYucatan = db.map((data, index) => {
            if(db[index + 1]){
            return (((db[index + 1].nacional / data.nacional)-1) * 100);
            }

});

const chartData = {
    labels: dataPeriod,
    datasets: [
        {
            label: "Nacional",
            fillColor: "rgba(220,220,220,0.2)",
            pointColor: "rgba(220,220,220,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            strokeColor: "rgba(220,220,220,1)",
            data: dataNacional
        },
        {
            label: "Yucatan",
            fillColor: "rgba(150,220,220,0.2)",
            pointColor: "rgba(150,220,220,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(150,220,220,1)",
            pointStrokeColor: "#fff",
            strokeColor: "rgba(150,220,220,1)",
            data: dataYucatan
        }
    ]
    };
let chartOptions = {
        responsive: true
    };

class ChartPage extends React.Component {
	render() {
		return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
	}
}

export default ChartPage;
