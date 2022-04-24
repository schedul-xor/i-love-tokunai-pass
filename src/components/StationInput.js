import React,{Component} from 'react';
import {connect} from 'react-redux';
import {onStationQueryUpdate} from '../actions';

class StationInput extends Component{
    __onChange(e){
        this.props.onChange(e.target.value,this.props.isFromFrom);
    }
    
    render(){
        return (<input type="text" onChange={(e)=>{this.__onChange(e);}}/>);
    }
}

export default connect((state)=>{
    return {};
},(dispatch)=>{
    return {
        onChange:(query,isFrom)=>dispatch(onStationQueryUpdate(query,isFrom))
    };
})(StationInput);
