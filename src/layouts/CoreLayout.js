import React from 'react'
import { Link } from 'react-router'
import themeDecorator from 'material-ui/lib/styles/theme-decorator'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import AppBar from 'material-ui/lib/app-bar'
import RaisedButton from 'material-ui/lib/raised-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'

class CoreLayout extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    }

    render () {
        const buttonStyle = {
            margin: 5
        }

        const homeIconStyle = {
            margin: 5,
            paddingTop: 5
        }

        let menuLinksJSX = (
            <span>
                <Link to='/register'>
                    <RaisedButton label='Register' style={buttonStyle} />
                </Link>
                <Link to='/login'>
                    <RaisedButton label='Login' style={buttonStyle} />
                </Link>
            </span>
        )

        let homePageButtonJSX = (
            <Link to='/'>
                <RaisedButton label={<ActionHome />} style={homeIconStyle} />
            </Link>
        )

        return (
            <div>
                <AppBar
                    title='Publishing App'
                    iconElementLeft={homePageButtonJSX}
                    iconElementRight={menuLinksJSX} />
                <br />
                {this.props.children}
            </div>
        )
    }
}

export default themeDecorator(getMuiTheme(null, {userAgent: 'all'}))(CoreLayout)
