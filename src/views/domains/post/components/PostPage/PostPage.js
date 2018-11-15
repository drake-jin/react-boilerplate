import React, { Component } from 'react'

import PostHeader from 'views/domains/post/components/PostHeader'
import PostWriteCardTrigger from 'views/domains/post/components/PostWriteCardTrigger'
import PostListPanel from 'views/domains/post/components/PostListPanel'
import PostFooter from 'views/domains/post/components/PostFooter'

import './PostPage.scss'

class PostPage extends Component {
  state = {}

  render() {
    return (
      <div className={'PostPage'}>
        <PostHeader />
        <div className="container">
          <PostWriteCardTrigger />
          <PostListPanel />
        </div>
        <PostFooter />
      </div>
    )
  }
}

export default PostPage
