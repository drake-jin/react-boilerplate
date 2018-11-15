import React, { Component } from 'react'

import PostHeaderSearchBar from 'views/domains/post/components/PostHeaderSearchBar'

import './PostHeader.scss'

class PostHeader extends Component {
  state = {}

  render() {
    return (
      <div className="PostHeader">
        <div className="container">
          <PostHeaderSearchBar />
        </div>
      </div>
    )
  }
}

export default PostHeader
