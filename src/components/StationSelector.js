import React,{Component} from 'react';
import {connect} from 'react-redux';
import {onStationIdxSelect} from '../actions';

class StationSelector extends Component{
    __onSelect(e){
        var idx = Number(e.target.value);
        this.props.onStationIdxSelect(idx,this.props.isFromFrom);
    }
    
    render(){
        return (<select onChange={(e)=>{this.__onSelect(e);}}>{
                this.props.stationIds.map((stationId,idx)=>{
                    return (<option value={idx}>{stationId}</option>);
                })
        }
            </select>);
    }
}

export default connect((state)=>{
    return {
    };
},dispatch=>{
    return {
        onStationIdxSelect: (idx,isFrom) => dispatch(onStationIdxSelect(idx,isFrom))
    };
})(StationSelector);
