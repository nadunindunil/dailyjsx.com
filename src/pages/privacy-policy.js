import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <React.Fragment>
      <Layout location={location} title="DailyJSX">
        <h1> Privacy Policy for www.dailyjsx.com </h1>
        <p>
          If you require any more information or have any questions about our
          privacy policy, please feel free to contact us by email at
          dailyjsxblog@gmail.com.
        </p>
        <p>
          At <a>www.dailyjsx.com</a>, the privacy of our visitors is of extreme
          importance to us. This privacy policy document outlines the types of
          personal information is received and collected by <a>www.dailyjsx.com</a> and
          how it is used.
        </p>
        <p>
          <b>Log Files</b>
          <br /> Like many other Web sites, <a>www.dailyjsx.com</a> makes use of log
          files. The information inside the log files includes internet protocol
          ( IP ) addresses, type of browser, Internet Service Provider ( ISP ),
          date/time stamp, referring/exit pages, and number of clicks to analyze
          trends, administer the site, track users movement around the site, and
          gather demographic information. IP addresses, and other such
          information are not linked to any information that is personally
          identifiable.
        </p>
        <p>
          <b>Cookies and Web Beacons</b>
          <br /> <a>www.dailyjsx.com</a> does not use cookies.
        </p>
        <b>DoubleClick DART Cookie</b>
        <br />
        <p>
          <ul>
            <li>
              Google, as a third party vendor, uses cookies to serve ads on
              {' '}<a>www.dailyjsx.com</a>.
            </li>
            <li>
              Google's use of the DART cookie enables it to serve ads to your
              users based on their visit to <a>www.dailyjsx.com</a> and other sites on
              the Internet.
            </li>
            <li>
              Users may opt out of the use of the DART cookie by visiting the
              Google ad and content network privacy policy at the following URL
              -
              <a href="https://policies.google.com/technologies/ads">
                https://policies.google.com/technologies/ads
              </a>
            </li>
          </ul>
        </p>
        <p>
          Some of our advertising partners may use cookies and web beacons on
          our site. Our advertising partners include ....... <br /> Google
          Adsense
          <br />
        </p>
        <p>
          
          These third-party ad servers or ad networks use technology to the
          advertisements and links that appear on <a>www.dailyjsx.com</a> send directly
          to your browsers. They automatically receive your IP address when this
          occurs. Other technologies ( such as cookies, JavaScript, or Web
          Beacons ) may also be used by the third-party ad networks to measure
          the effectiveness of their advertisements and / or to personalize the
          advertising content that you see.
        </p>
        <p>
          
          <a>www.dailyjsx.com</a> has no access to or control over these cookies that
          are used by third-party advertisers.
        </p>
        <p>
          
          You should consult the respective privacy policies of these
          third-party ad servers for more detailed information on their
          practices as well as for instructions about how to opt-out of certain
          practices. <a>www.dailyjsx.com</a>'s privacy policy does not apply to, and we
          cannot control the activities of, such other advertisers or web sites.
        </p>
        <p>
          
          If you wish to disable cookies, you may do so through your individual
          browser options. More detailed information about cookie management
          with specific web browsers can be found at the browsers' respective
          websites.
        </p>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}
