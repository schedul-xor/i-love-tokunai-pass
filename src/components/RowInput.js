import React,{Component} from 'react';
import {connect} from 'react-redux';
import StationInput from './StationInput';
import StationSelector from './StationSelector';
import {onAddRow} from '../actions';

class RowInput extends Component{
    __onAddButtonClick(e){
        var row = {
            fromStationId: this.props.fromStationIds[this.props.selectedFromStationIdx],
            toStationId: this.props.toStationIds[this.props.selectedToStationIdx],
        };
        this.props.onAddRow(row);
    }
    
    render(){
        return (<dl>
                <dt>From</dt>
                <dd><StationInput value={this.props.fromQuery} isFromFrom={true}/></dd>
                <dd><StationSelector stationIds={this.props.fromStationIds} isFromFrom={true}/></dd>
                <dt>To</dt>
                <dd><StationInput value={this.props.toQuery} isFromFrom={false}/></dd>
                <dd><StationSelector stationIds={this.props.toStationIds} isFromFrom={false}/></dd>
                <dt><button onClick={(e)=>{this.__onAddButtonClick(e);}}>Add</button></dt>
                </dl>);
    }
}

export default connect((state)=>{
    return {
        fromQuery: state.fromQuery,
        toQuery: state.toQuery,
        fromStationIds: state.fromStationIds,
        toStationIds: state.toStationIds,
        selectedFromStationIdx: state.selectedFromStationIdx,
        selectedToStationIdx: state.selectedToStationIdx,
    };
},dispatch=>{
    return {
        onAddRow: (row) => dispatch(onAddRow(row))
    };
})(RowInput);
