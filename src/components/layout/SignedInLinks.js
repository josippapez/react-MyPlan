import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {signOut} from '../../store/actions/authActions'

function SignedInLinks(props){
    return(
        <ul className="right">    
            <li><NavLink to='/createproject'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating dark lighten-1'>JP</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks);