import React, { Component } from 'react'

import SongList from './SongList'
import History from './History'

import { Link, Routes, Route } from 'react-router-dom'

export default class My extends Component {
  render() {
    return (
      <div>
        <h3>我是My组件</h3>
        <ul>
          <li>
            <Link to="/my/songList">我的歌单</Link>
          </li>
          <li>
            <Link to="/my/history">听歌历史</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/my/songList" element={<SongList></SongList>}></Route>
          <Route path="/my/history" element={<History></History>}></Route>
        </Routes>
      </div>
    )
  }
}
