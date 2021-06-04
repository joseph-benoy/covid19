import React,{Component} from 'react';
import axios from 'axios';

export default class India extends Component{
    constructor(props){
        super(props);
        this.state = {
            states:{}
        };
    }
    componentDidMount(){
        axios.get("https://api.covid19india.org/state_district_wise.json")
        .then((response)=>{
            let statesList = [];
            for(let i in response.data){
                statesList.push({stateName:i,data:response.data[i]});
            }
            this.setState({states:statesList});
            console.log(statesList);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return(<h1>India</h1>);
    }
}