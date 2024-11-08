import card01 from '@/assets/card01.jpeg';
import card02 from '@/assets/card02.jpeg';
import user01 from '@/assets/user01.jpeg';
import user02 from '@/assets/user02.jpeg';
import user03 from '@/assets/user03.jpeg';

import layout from './app.module.scss';
import IcoLeft from './assets/ico-left.svg?react';
import IcoRight from './assets/ico-right.svg?react';
import Card from './Card';
import TitleWithButton from './components/TitleWithButton';
import Creators from './Creators';

import Explore from './Explore';
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
        <Card data={CARD_DATA} />
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

      <section className={layout.creatorsContainer}>
        <Explore data={CARD_DATA} />
      </section>
    </>
  );
}

export default App;

const CARD_DATA = [
  {
    time: '2h:24m:04s',
    title: 'Iron Man',
    isLiked: false,
    contentSrc: card01,
    userList: [
      { userId: 'CosmicArtisan', profileSrc: user01 },
      {
        userId: 'Sculptor',
        profileSrc: user02,
      },
    ],
    currentBid: '1.35 ETH',
  },
  {
    time: '2h:24m:04s',
    title: 'Illuminated Enigma',
    isLiked: true,
    contentSrc: card02,
    userList: [
      { userId: 'EtherFlow', profileSrc: user03 },
      {
        userId: 'NanoNebula',
        profileSrc: user01,
      },
    ],
    currentBid: '2.05 ETH',
  },
  {
    time: '2h:24m:04s',
    title: 'Illuminated Enigma',
    isLiked: true,
    contentSrc: card02,
    userList: [
      { userId: 'EtherFlow', profileSrc: user03 },
      {
        userId: 'NanoNebula',
        profileSrc: user01,
      },
    ],
    currentBid: '2.05 ETH',
  },
  {
    time: '2h:24m:04s',
    title: 'Illuminated Enigma',
    isLiked: true,
    contentSrc: card02,
    userList: [
      { userId: 'EtherFlow', profileSrc: user03 },
      {
        userId: 'NanoNebula',
        profileSrc: user01,
      },
    ],
    currentBid: '2.05 ETH',
  },
  {
    time: '2h:24m:04s',
    title: 'Illuminated Enigma',
    isLiked: true,
    contentSrc: card02,
    userList: [
      { userId: 'EtherFlow', profileSrc: user03 },
      {
        userId: 'NanoNebula',
        profileSrc: user01,
      },
    ],
    currentBid: '2.05 ETH',
  },
];
