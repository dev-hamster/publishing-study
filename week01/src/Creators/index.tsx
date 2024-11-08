import user01 from '@/assets/user01.jpeg';
import user02 from '@/assets/user02.jpeg';
import user03 from '@/assets/user03.jpeg';
import creatorsStyle from './creators.module.scss';

const Creators = () => {
  return (
    <div className={creatorsStyle.creatorsContainer}>
      {CREATORS.map(({ profileSrc, userId, userName, itemsCount }, idx) => {
        return (
          <div className={creatorsStyle.card}>
            <div className={creatorsStyle.index}>{idx}</div>
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
];
