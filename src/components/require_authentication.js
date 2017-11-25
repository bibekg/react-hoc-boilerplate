import React from 'react'
import { connect } from 'react-redux'

export default (ComposedComponent) => {
  class Authentication extends React.Component {

    // Tell React to make 'router' from React Router available in our component
    // context
    static contextTypes = {
      router: React.PropTypes.object
    }

    checkAuth(auth) {
      if (!auth) {
        this.context.router.push('/')
      }
    }

    componentWillMount() {
      checkAuth(this.props.authenticated)
    }

    componentWillReceiveProps(nextProps) {
      checkAuth(nextProps.authenticated)
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.authenticated
  })

  return connect(mapStateToProps)(Authentication)
}

/*

// In some other location ... not in this file
// We want to use this higher-order component

import Authentication
import Resources

const ComposedComponent = Authentication(Resources)

// In some render method...
<ComposedComponent resources={resourceList} />

*/
