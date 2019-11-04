import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <React.Fragment>
      <Layout location={location} title="DailyJSX">
        <h1> About DailyJSX </h1>
        <p>DailyJSX is an open-source blog for developers which anyone can edit and contribute.</p>
        <p>I am Nadun Indunil. A Senior Softaware Engineer at Sysco Labs, Sri Lanka and AWS Certified Solution Architect-Associate.</p>
        <p>This Website contains my innovations, open-source projects and technology discussions which are related to Software Engineering.</p>
        <p>Please contact us through <a href="mailto:dailyjsxblog@gmail.com">dailyjsxblog@gmail.com</a>. </p>
        <p>or</p>
        <p>use <a href="mailto:nadun1indunil@gmail.com">nadun1indunil@gmail.com</a> to contact me personally.</p>
      <Footer/>
      </Layout>
    </React.Fragment>
  );
}
