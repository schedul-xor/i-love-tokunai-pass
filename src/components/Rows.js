import React,{Component} from 'react';
import {connect} from 'react-redux';

class Rows extends Component{
    render(){
        return (<table>{
            this.props.rows.map((row,idx)=>{
                return (<tr><th>{idx}</th><td>{row.fromStationId}</td><td>{row.toStationId}</td></tr>);
            })
        }</table>);
    }
}

export default connect((state)=>{
    return {
        rows: state.rows
    };
},dispatch=>{
    return {};
})(Rows);
