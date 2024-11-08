import layout from './app.module.scss';
import IcoLeft from './assets/ico-left.svg?react';
import IcoRight from './assets/ico-right.svg?react';
import Card from './Card';
import TitleWithButton from './components/TitleWithButton';
import Creators from './Creators';
import Header from './Header';
import Hero from './Hero';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <section className={layout.nftContainer}>
        <TitleWithButton
          color='purple'
          text='Featured NFTs'
          Button={
            <>
              <a href='#' className={layout.seeAllButton}>
                See All
              </a>
              <div className={layout.arrowContainer}>
                <button className={layout.left}>
                  <IcoLeft />
                </button>
                <button className={layout.right}>
                  <IcoRight />
                </button>
              </div>
            </>
          }
        ></TitleWithButton>
        <Card />
      </section>

      <section className={layout.creatorsContainer}>
        <TitleWithButton
          text='Meet Our Talented Creators'
          size='small'
          color='black'
          Button={
            <a href='#' className={layout.seeAllButton}>
              See All
            </a>
          }
        />
        <Creators />
      </section>
    </>
  );
}

export default App;
