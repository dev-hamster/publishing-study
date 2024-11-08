import { useEffect, useState } from 'react';

import IcoClock from '@/assets/ico-clock.svg?react';
import IcoBid from '@/assets/ico-currency-ethereum.svg?react';
import IcoHeart from '@/assets/ico-heart.svg?react';
import cardStyles from '@/Card/card.module.scss';
import Button from '@/components/Button';

const Card = ({ data }: { data: unknown[] }) => {
  const [visibleCards, setVisibleCards] = useState<(typeof data)[0][]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let count;

      if (width >= 1024) {
        count = 5;
      } else if (width >= 768) {
        count = 3;
      } else {
        count = 2;
      }

      setVisibleCards(data.slice(0, count));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cardStyles.cardContainer}>
      {visibleCards.map(
        ({ time, title, isLiked, contentSrc, userList, currentBid }) => (
          <div className={cardStyles.card}>
            <div className={cardStyles.thumbnailBox}>
              <div className={cardStyles.utils}>
                <button className={cardStyles.heartButton}>
                  <IcoHeart fill={isLiked ? 'red' : '#fff'} />
                </button>
                <div className={cardStyles.timeBox}>
                  <IcoClock />
                  {time}
                </div>
              </div>
              <div className={cardStyles.thumbnail}>
                <img src={contentSrc} alt='' />
              </div>
            </div>

            <div className={cardStyles.infoBox}>
              <div className={cardStyles.cardTitle}>{title}</div>
              <div className={cardStyles.userListContainer}>
                <div className={cardStyles.userProfileContainer}>
                  {userList.map(({ profileSrc, userId }) => {
                    return (
                      <div key={userId} className={cardStyles.userProfile}>
                        <img src={profileSrc} alt='' />
                      </div>
                    );
                  })}
                </div>
                <div className={cardStyles.userIdContainer}>
                  {userList.map(({ userId }, idx) => {
                    return (
                      <span className={cardStyles.userId} key={userId}>
                        @{userId}
                        {idx < userList.length - 1 && ', '}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={cardStyles.Divider} />

            <div className={cardStyles.bidBox}>
              <div className={cardStyles.currentBid}>
                <div className={cardStyles.title}>Current Bid:</div>
                <div className={cardStyles.bid}>
                  <IcoBid />
                  {currentBid}
                </div>
              </div>
              <div className={cardStyles.buttonContainer}>
                <Button filled>Place a Bid</Button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
