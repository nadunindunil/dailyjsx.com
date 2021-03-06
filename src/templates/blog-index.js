import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { formatPostDate, formatReadingTime } from '../utils/helpers';
import { rhythm } from '../utils/typography';
import Panel from '../components/Panel';

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <main>
          {langKey !== 'en' && langKey !== 'ru' && (
            <Panel>
              These articles have been{' '}
              <a
                href="https://github.com/nadunindunil/dailyjsx.com#contributing-translations"
                target="_blank"
                rel="noopener noreferrer"
              >
                translated by the community
              </a>
              .
            </Panel>
          )}

          {posts &&
            posts.length > 0 &&
            posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug;
              return (
                <article key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: rhythm(1),
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: 'none' }}
                        to={node.fields.slug}
                        rel="bookmark"
                      >
                        {title}
                      </Link>
                    </h3>
                    <small
                      style={{
                        fontStyle: 'italic',
                        fontSize: rhythm(0.6),
                      }}
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.spoiler,
                      }}
                    />
                    <br />
                    <small>
                      {formatPostDate(node.frontmatter.date, 'en')}
                      {` • ${formatReadingTime(node.timeToRead)}`}
                    </small>
                  </header>
                  <h5
                    style={{
                      marginTop: 7,
                      marginBottom: 3,
                    }}
                  >
                    by{' '}
                    <span style={{ color: 'rgb(255, 167, 196)' }}>
                      {node.frontmatter.author}
                    </span>
                  </h5>
                </article>
              );
            })}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            author
          }
        }
      }
    }
  }
`;
