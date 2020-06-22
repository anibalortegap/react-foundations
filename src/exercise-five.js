import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesStatic: [
        'My first component in React',
        'Introduction a React',
        'What is React',
      ],
      articlesFetch: [],
    };
  }

  //React LifeCycle method
  //Run page load

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
      response.json().then((data) =>
        this.setState({
          articlesFetch: data,
        })
      )
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.state.articlesStatic.map((title) => {
            return <p>{title}</p>;
          })}
        </div>
        <div>
          {this.state.articlesFetch.map((article) => {
            return <p>{article.title}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
