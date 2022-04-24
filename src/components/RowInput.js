import React,{Component} from 'react';
import {connect} from 'react-redux';
import StationInput from './StationInput';
import StationSelector from './StationSelector';

class RowInput extends Component{
    __onAddButtonClick(e){
        console.log(e);
    }
    
    render(){
        return (<dl>
                <dt>From</dt>
                <dd><StationInput isFromFrom={true}/></dd>
                <dd><StationSelector/></dd>
                <dt>To</dt>
                <dd><StationInput isFromFrom={false}/></dd>
                <dd><StationSelector/></dd>
                <dt><button onClick={(e)=>{this.__onAddButtonClick(e);}}>Add</button></dt>
                </dl>);
    }
}

export default connect((state)=>{
    return {};
})(RowInput);
