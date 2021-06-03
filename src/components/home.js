import React,{Component} from 'react';
import axios from 'axios';
import Statbox from './statbox';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            covid :{}
        };
    }
    componentWillMount(){
        axios.get("https://corona.lmao.ninja/v2/all?today")
        .then((response)=>{
            this.setState({covid:response.data});
        })
        .catch((error)=>console.log(error));
    }
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <Statbox title="Cases" val1={`Total : ${this.state.covid.cases}`} val2={`Today : ${this.state.covid.todayCases}`}/>
                        <Statbox title="Current" val1={`Active : ${this.state.covid.active}`} val2={`Countries : ${this.state.covid.affectedCountries}`}/>
                        <Statbox title="Deaths" val1={`Total : ${this.state.covid.deaths}`} val2={`Today : ${this.state.covid.todayDeaths}`}/>
                        <Statbox title="Patients" val1={`Recovered : ${this.state.covid.recovered}`} val2={`Critical : ${this.state.covid.critical}`}/>                     
                    </div>
                </div>
            </>
        );
    }
}