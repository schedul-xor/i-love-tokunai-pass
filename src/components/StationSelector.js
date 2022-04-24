import React,{Component} from 'react';
import {connect} from 'react-redux';

class StationSelector extends Component{
    render(){
        return (<select>{
                this.props.rows.map((oid,idx)=>{
                    return (<div/>);
                })
        }
            </select>);
    }
}

export default connect((state)=>{
    return {
        rows: state.rows
    };
})(StationSelector);
