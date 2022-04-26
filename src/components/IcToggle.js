import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setIsIc} from '../actions';

class IcToggle extends Component{
    __onToggleButton(e){
        this.props.setIsIc(e.target.checked);
    }
    
    render(){
        return (<input type="checkbox" checked={this.props.isIc} onChange={e=>this.__onToggleButton(e)}/>);
    }
}

export default connect(state=>{
    return {
        isIc: state.isIc
    };
},dispatch=>{
    return {
        setIsIc: isIc => dispatch(setIsIc(isIc))
    };
})(IcToggle);
