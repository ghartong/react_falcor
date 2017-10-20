import React from 'react'
import Falcor from 'falcor'
import falcorModel from '../falcorModel'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {RegisterForm} from '../components/RegisterForm'
import {Snackbar} from 'material-ui'

const mapStateToProps = (state) => ({
    ...state
})

//Add reducers here
const mapDispatchToProps = (dispatch) => ({

})

class RegisterView extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        this.state = {
            error: null
        }
    }

    async register (newUserModel) {
        console.info('newUserModel', newUserModel)

        await falcorModel
            .call(['register'], [newUserModel])
            .then( (result) => result)

        const newUserId = await falcorModel.getValue(['register', 'newUserId'])

        if (newUserId === 'INVALID') {
            const errorRes = await falcorModel.getValue('register.error')

            this.setState({error: errorRes})

            return
        }
        
        this.props.history.pushState(null, '/login')
    }

    render() {
        return (
            <div>
                <div style={{maxWidth: 450, margin: '0 auto'}}>
                    <RegisterForm onSubmit={this.register} />
                </div>
                <Snackbar autoHideDuration={4000}
                    open={!!this.state.error}
                    message={this.state.error || ''}
                    onRequestClose={ () => null}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
