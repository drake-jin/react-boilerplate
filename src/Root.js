import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from 'views/App'
import PropTypes from 'prop-types'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter getUserConfirmation={(message, callback) => {
      callback(window.confirm(message))
    }}
    >
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.any.isRequired,
}

export default Root
