import React, { Component } from 'react'
import PostPanel from 'views/domains/post/components/PostPanel'

import './PostListPanel.scss'

class PostListPanel extends Component {
  state = {}

  render() {
    return (
      <div className="PostListPanel">
        PostListPanel
        <PostPanel />
      </div>
    )
  }
}

export default PostListPanel
