import React,{Component} from 'react';

export default class Statbox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-lg-2 statbox">
                <h2>{this.props.title}</h2>
                <p>{this.props.val1}</p>
                <p>{this.props.val2}</p>
            </div>
        );
    }
}