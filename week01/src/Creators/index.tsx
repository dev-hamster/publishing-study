import user01 from '@/assets/user01.jpeg';
import user02 from '@/assets/user02.jpeg';
import user03 from '@/assets/user03.jpeg';
import { useEffect, useState } from 'react';
import creatorsStyle from './creators.module.scss';

const Creators = () => {
  const [visibleCards, setVisibleCards] = useState<(typeof CREATORS)[0][]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let count;

      if (width >= 1024) {
        count = 7;
      } else if (width >= 768) {
        count = 5;
      } else {
        count = 4;
      }

      setVisibleCards(CREATORS.slice(0, count));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={creatorsStyle.creatorsContainer}>
      {visibleCards.map(({ profileSrc, userId, userName, itemsCount }, idx) => {
        return (
          <div key={userId} className={creatorsStyle.card}>
            <div className={creatorsStyle.index}>{idx + 1}</div>
            <div className={creatorsStyle.profileBox}>
              <div className={creatorsStyle.profile}>
                <img src={profileSrc} alt='' />
              </div>
            </div>
            <div className={creatorsStyle.userName}>{userName}</div>
            <div className={creatorsStyle.userId}>@{userId}</div>
            <div className={creatorsStyle.itemCount}>{itemsCount} items</div>
          </div>
        );
      })}
    </div>
  );
};
export default Creators;

const CREATORS = [
  {
    profileSrc: user01,
    userName: 'sata sculpture',
    userId: 'Sculptor',
    itemsCount: 890,
  },
  {
    profileSrc: user02,
    userName: 'cosmic art',
    userId: 'CosmicArtist',
    itemsCount: 1004,
  },
  {
    profileSrc: user03,
    userName: 'Josmin nan',
    userId: 'NanoNebula',
    itemsCount: 990,
  },
  {
    profileSrc: user03,
    userName: 'Binary Bard',
    userId: 'BinaryBard',
    itemsCount: 1025,
  },
  {
    profileSrc: user01,
    userName: 'sata sculpture',
    userId: 'Sculptor',
    itemsCount: 890,
  },
  {
    profileSrc: user02,
    userName: 'cosmic art',
    userId: 'CosmicArtist',
    itemsCount: 1004,
  },
  {
    profileSrc: user03,
    userName: 'Josmin nan',
    userId: 'NanoNebula',
    itemsCount: 990,
  },
  {
    profileSrc: user03,
    userName: 'Binary Bard',
    userId: 'BinaryBard',
    itemsCount: 1025,
  },
];
