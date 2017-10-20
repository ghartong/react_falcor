import React from 'react'
import Falcor from 'falcor'
import falcorModel from '../falcorModel'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {LoginForm} from '../components/LoginForm'

const mapStateToProps = (state) => ({
    ...state
})

// you can add reducers here
const mapDispatchToProps = (dispatch) => ({})

class DashboardView extends React.Component {
    render() {
        return (
            <div>
                <h1>Dashboard - loggedin!</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
