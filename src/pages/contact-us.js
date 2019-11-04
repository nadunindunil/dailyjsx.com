import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function ContactUs({ location }) {
  return (
    <React.Fragment>
      <Layout location={location} title="DailyJSX">
        <h1> Contact Us </h1>
        <p>
          If you whish to publish an article in our site please drop an email to{' '}
          <a href="mailto:dailyjsxblog@gmail.com">dailyjsxblog@gmail.com</a> or{' '}
          <a href="mailto:nadun1indunil@gmail.com">nadun1indunil@gmail.com</a>.
        </p>
        <p>We would love to help you. ❤️</p>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}
