import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction'

class ArticleList extends Component {

  //Lifecycle methods
  componentDidMount() {
   this.props.fetchPosts();
  }

  render() {
      const postItems = this.props.posts.map(post => (
      <div key={post.id} className="articlebox">
        <p className="title">{post.title}</p>
        <p className="articlebody">{post.articlebody}</p>
      </div>
    ));
    return (
      <div>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //This is based on what we called it when we exported it in the /reducers/index.js
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(ArticleList);