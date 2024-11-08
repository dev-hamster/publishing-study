import layout from './app.module.scss';
import Card from './Card';
import TitleWithButton from './components/TitleWithButton';
import Header from './Header';
import Hero from './Hero';

function App() {
  return (
    <>
      <Header />

      <Hero />
      <section className={layout.nftContainer}>
        <TitleWithButton color='purple' text='Featured NFTs' />
        <Card />
      </section>
    </>
  );
}

export default App;
