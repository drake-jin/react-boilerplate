import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as HotContainer } from 'react-hot-loader'
// import { matchPath } from 'react-router'

import store from 'store'

import Root from './Root'
import * as serviceWorker from './serviceWorker'
// import routes from './serverSideRenderRoutes'
import 'styles/base/_all.scss'

const render = async (Component) => {
  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./Root', () => render(Root))
    }
    // 개발 모드에서는 바로 렌더링을 합니다
    return ReactDOM.render(
      (
        <HotContainer>
          <Component store={store} />
        </HotContainer>
      ),
      document.getElementById('root'),
    )
  }

  /*

  // 프로덕션 모드에서는 일치하는 라우트를 찾아 미리 불러온 다음에 렌더링을 합니다
  const getComponents = []
  const { pathname } = window.location

  routes.forEach((route) => {
    // 일치하는 라우트를 찾고, getComponent 를 호출하여 getComponents 에 넣습니다.
    const match = matchPath(pathname, route)
    if (!match) return
    const { getComponent } = route.component
    if (!getComponent) return
    getComponents.push(getComponent())
  })
  // getComponents 가 끝날 때 까지 기다립니다
  await Promise.all(getComponents)
  // render 가 아닌 hydrate 를 사용합니다.
  */
  return ReactDOM.hydrate(<Component store={store} />, document.getElementById('root'))
}

render(Root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
