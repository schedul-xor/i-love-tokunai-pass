import React,{Component} from 'react';
import {connect} from 'react-redux';
import {onDeleteRow} from '../actions';

class Rows extends Component{
    __deleteRow(idx){
        this.props.onDeleteRow(idx);
    }
    
    render(){
        return (<table>{
            this.props.rows.map((row,idx)=>{
                var fare = this.props.fares[idx];
                return (<tr><th>{idx}</th><td>{row.fromStationId}</td><td>{row.toStationId}</td><td>{fare} yen</td><td><button onClick={e=>this.__deleteRow(idx)}>x</button></td></tr>);
            })
        }</table>);
    }
}

export default connect((state)=>{
    return {
        rows: state.rows,
        fares: state.fares
    };
},dispatch=>{
    return {
        onDeleteRow: idx => dispatch(onDeleteRow(idx))
    };
})(Rows);
