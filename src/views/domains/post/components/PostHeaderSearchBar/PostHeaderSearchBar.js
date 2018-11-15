import React, { Component } from 'react'
import { MdSearch, MdHighlightOff } from 'react-icons/md'

import './PostHeaderSearchBar.scss'


class PostHeaderSearchBar extends Component {
  state = {
    // word: '',
  }

  render() {
    return (
      <div className="PostHeaderSearchBar">
        <MdSearch className="icon-search" size="32" />
        <input
          className="search-input"
          placeholder="어떤 감성을 찾으시나요"
        />
        <MdHighlightOff className="icon-cancel" size="24" />

      </div>
    )
  }
}

export default PostHeaderSearchBar
