import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

// import React from 'react';
// import SwaggerUI from 'swagger-ui-react';
// import 'swagger-ui-react/swagger-ui.css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            x-file.ai Tutorial ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <div className="api-docs">
          <h1>API Documentation</h1> */}
          {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
          {/* <SwaggerUI url= "https://assets.ctfassets.net/lmz2w5z92b9u/AIelheSjZboNDQGA6Sixp/56ebf38d41c3c976044137763329a250/global_filings_api-v2.yaml" /> */}
          {/* 로컬 JSON 파일도 사용 가능 */}
          {/* <SwaggerUI spec={require('./swagger.json')} /> */}
        {/* </div> */}
      </main>
    </Layout>
  );
}
