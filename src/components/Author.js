import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    const { author, profilePicUrl } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePicUrl}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 560 }}>
          Article by {' '}
          <a href={`https://mobile.twitter.com/${author.twitter}`}>{author.name}</a>.
          <br/>
          {author.meta}
        </p>
      </div>
    );
  }
}

export default Bio;
