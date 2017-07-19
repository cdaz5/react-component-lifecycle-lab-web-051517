import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount = (props) => {
    this.setState({
      tweets: [...this.state.tweets, ...this.props.newTweets]
    })
  }

  componentWillReceiveProps = (nextProps) => {
    // debugger
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }

  shouldComponentUpdate = (nextProps) => {
    // debugger
    return (nextProps.newTweets.length > 0)
  }

  // TODO: shouldComponentUpdate()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
