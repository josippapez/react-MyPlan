import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';


function Navbar(props){
    const {isNotAuthenticated, profile} = props;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MyPlan</Link>
                { isNotAuthenticated ? <SignedOutLinks /> : <SignedInLinks profile={profile}/>  }
            </div>
        </nav>
    )
}
const mapStateToProps=(state)=>{
    return {
        isNotAuthenticated: state.firebase.auth.isEmpty,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);