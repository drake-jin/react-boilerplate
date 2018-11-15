import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PostContainer from 'views/domains/post'

import * as routes from 'lib/service/routes'


class App extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path={routes.MATCH_PATH_ROOT} component={PostContainer} />
        </Switch>
      </Fragment>
    )
  }
}
export default connect(
  () => ({
  }),
  () => ({

  }),
)(App)
