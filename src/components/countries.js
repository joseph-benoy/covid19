import axios from 'axios';
import React,{Component} from 'react';
import Accord from './accord';

export default class Countries extends Component{
    constructor(props){
        super(props);
        this.state = {
            countries:[]
        };
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries?today&sort")
        .then((response)=>{
            this.setState({countries:response.data});
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="accordion" id="accordionExample">
                        {this.state.countries.map((item,key)=>(
                            <Accord title={item.country} src={item.countryInfo.flag} totalCases={item.}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}