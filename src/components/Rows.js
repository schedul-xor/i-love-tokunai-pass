import React,{Component} from 'react';
import {connect} from 'react-redux';
import {onDeleteRow} from '../actions';
import OpenJprailFares from '../openjprailfares';

class Rows extends Component{
    __deleteRow(idx){
        this.props.onDeleteRow(idx);
    }
    
    render(){
        return (
            <table>
              <tbody>
                {
                    this.props.rows.map((row,idx)=>{
                        var fare = this.props.fares[idx];
                        return (<tr><th>{idx}</th><td>{OpenJprailFares.stationId2name(row.fromStationId)}</td><td>{OpenJprailFares.stationId2name(row.toStationId)}</td><td>{fare} yen</td><td><button onClick={e=>this.__deleteRow(idx)}>x</button></td></tr>);
                    })
                }
            </tbody>
                <tfoot>
                <tr><th/><th/><th/><td>{this.props.fareSum} yen</td></tr></tfoot>
                </table>);
    }
}

export default connect((state)=>{
    return {
        rows: state.rows,
        fares: state.fares,
        fareSum: state.fareSum
    };
},dispatch=>{
    return {
        onDeleteRow: idx => dispatch(onDeleteRow(idx))
    };
})(Rows);
