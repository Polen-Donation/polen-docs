import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Facil de usar',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Nossa API foi projeteda para que qualquer usuário possa usa-la de maneira simples e intuitiva.
        Seja você junior ou sênior, nossa API vai te atender.
      </>
    ),
  },
  {
    title: 'Concentre-se no que é importante',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        A API do polen permite que você foque em fazer e não em como fazer, nós cuidamos disso para você com funções e métodos prontos feitos para varias linguagens de programação diferentes.
      </>
    ),
  },
  {
    title: 'Sua biblioteca esta aqui',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        A biblioteca para sua linguagem de programação esta aqui. Temos bibliotecas construídas para node, ruby e python. Consulte a nossa documentação e saiba mais.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.containerFeature}>
      {imgUrl && (
        <div className={styles.imageFeatureContainer}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className={styles.textFeatureContainer}>
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Vamos Começar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="column">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
