import React, { Component } from 'react';
import './App.css';

import AllPost from './AllPost';
import PostForm from './PostForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
