import React,{Component} from 'react';
import {connect} from 'react-redux';
import OpenJprailFares from '../openjprailfares';

class TokunaiMeter extends Component{
    render(){
        if(this.props.fareSum < OpenJprailFares.tokunai_pass_price){
            return (<div>{this.props.fareSum} yen? Buy tickets.</div>);
        }else{
            return (<div>{this.props.fareSum} yen? Buy {OpenJprailFares.tokunai_pass_price} yen tokunai pass.</div>);
        }
    }
}

export default connect((state)=>{
    return {
        fareSum: state.fareSum
    };
})(TokunaiMeter);
