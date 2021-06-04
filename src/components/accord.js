import React,{Component} from 'react';

export default class Accord extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    {this.props.title}
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <table>
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>
                                    Total cases
                                </th>
                                <th>
                                    Today's cases
                                </th>
                                <th>
                                    Total deaths
                                </th>
                                <th>
                                    Today's deaths
                                </th>
                                <th>
                                    Active cases
                                </th>
                                <th>
                                    Recovered cases
                                </th>
                                <th>
                                    Critical cases
                                </th>
                                <th>
                                    Tests per million
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={this.props.src} alt="country-flag" className="img-fluid"/>
                                </td>
                                <td>
                                    {this.props.totalCases}
                                </td>
                                <td>
                                    {this.props.todayCases}
                                </td>
                                <td>
                                    {this.props.totalDeaths}
                                </td>
                                <td>
                                    {this.props.todayDeaths}
                                </td>
                                <td>
                                    {this.props.active}
                                </td>
                                <td>
                                    {this.props.recovered}
                                </td>
                                <td>
                                    {this.props.critical}
                                </td>
                                <td>
                                    {this.props.testsPerMillion}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}