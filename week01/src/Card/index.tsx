import card01 from '@/assets/card01.jpeg';
import card02 from '@/assets/card02.jpeg';
import IcoClock from '@/assets/ico-clock.svg?react';
import IcoBid from '@/assets/ico-currency-ethereum.svg?react';
import IcoHeart from '@/assets/ico-heart.svg?react';
import user01 from '@/assets/user01.jpeg';
import user02 from '@/assets/user02.jpeg';
import user03 from '@/assets/user03.jpeg';
import cardStyles from '@/Card/card.module.scss';
import Button from '@/components/Button';

const Card = () => {
  return (
    <div className={cardStyles.cardContainer}>
      {CARD_DATA.map(
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
];
