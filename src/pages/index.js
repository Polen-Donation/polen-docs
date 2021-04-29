import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Curadoria de OSCs',
    imageUrl: 'https://polen.com.br/content/v6/images/formas-de-doar/mockup-04.png',
    description: (
      <>
        Doar não precisa ser burocrático.
        O Polen conta com um portfólio de mais de 350 instituições que para estarem aprovadas no Polen passaram por uma curadoria criteriosa com toda documentação, registros e impacto verificado. <a href=": https://polen.com.br/ajudar-ongs">Veja todas as OSCs apoiadas  aqui</a>
      </>
    ),
  },
  {
    title: 'Transparência e Conteúdo',
    imageUrl: 'https://polen.com.br/content/v6/images/descubra/widget-home-03-transparencia.png',
    description: (
      <>
        No Polen, a doação é apenas o início de um processo de impacto.
        Todo repasse financeiro das doações são realizadas via sistema Polen automaticamente. Em contrapartida as OSCs precisam enviar o recibo de doação e mostrar com transparência através de fotos, vídeos e recibos como o recurso está sendo utilizado.
        Tudo isso é feito via sistema Polen e sua empresa tem acesso a todo conteúdo gerado via API ou painel administrativo.
      </>
    ),
  },
  {
    title: 'A criatividade é o limite',
    imageUrl: 'https://polen.com.br/content/v6/images/formas-de-doar/Telinhas/widget-formas-de-doar-do-seu-jeito-01-mecanica-personalizada.png',
    description: (
      <>
        Como você quer colocar impacto social no seu negócio?
        A melhor maneira é sempre envolvendo o seu usuário na ação. Você cria um diferencial pra sua marca, engaja e retém seus usuários e ainda ajuda a melhorar a vida de pessoas que precisam.
        Tem dúvidas de como fazer isso? Entre em contato conosco <a href="polen:eupolinizo@opolen.com.br?subject = Feedback&body = Message">
        eupolinizo@opolen.com.br
      </a>
      </>
    ),
  },
  {
    title: 'Comunidade do Discord',
    imageUrl: 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-3.png',
    description: (
      <>
        Acreditamos que juntos de centavos em centavos doados vamos causar um grande impacto no mundo. Da mesma maneira acreditamos no poder da comunidade. Nos ajude a melhorar nossa API e tire suas dúvidas no nosso canal do Discord: <a
        href="https://discord.gg/6YVtUbKS4b">Polen Devs</a>
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
          <p>Acesse nossa documentação e coloque impacto social em seu app/loja/empresa.</p>
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
          <img className={styles.bannerApresentation} src="https://polen.com.br/content/v6/images/descubra/widget-home-01-formas-de-doar.png" alt="Imagem de apresentação"/>
        </div>
      </header>
      <main>

        <div className={styles.textApresentation}>
          <h2>Fácil e Seguro</h2>
          <p>A Polen é uma empresa especializada em intermediar doações corporativas entre empresas e instituições brasileiras do terceiro setor e em gerar transparência das doações. Através da nossa API e SDKs você tem:</p>
        </div>
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
