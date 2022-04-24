import React,{Component} from 'react';
import {connect} from 'react-redux';

class Rows extends Component{
    render(){
        return (<table></table>);
    }
}

export default connect((state)=>{
    return {};
})(Rows);
