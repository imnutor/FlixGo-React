import React, { Component } from 'react'
import {connect} from "react-redux";
import * as action from "../redux/action/indexAPI"

class DeleteMovie extends Component {
    componentDidMount(){
        console.log(this.props)
        
        
    }
    render() {
        return (
            <div style={{color:"#fff"}}>
                Delete Movie Component
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteMovie: id => {
            dispatch(action.actDeleteMovie(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(DeleteMovie);