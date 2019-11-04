import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/nadmatrix"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/nadunindunil"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/4525429/nadun"
          target="_blank"
          rel="noopener noreferrer"
        >
          stack overflow
        </a>
        &bull;{' '}
        <Link to="privacy-policy">privacy policy</Link>
        &bull;{' '}
        <Link to="/about-us">about us</Link>
        &bull;{' '}
        <Link to="/contact-us">contact us</Link>
      </footer>
    );
  }
}

export default Footer;
