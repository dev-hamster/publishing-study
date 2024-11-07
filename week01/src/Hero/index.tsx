import heroStyles from '@/Hero/hero.module.scss';
import activeUsersImage from '@/assets/hero/active_users.png';
import IcoArrow from '@/assets/hero/ico_arrow.svg?react';
import IcoDiamond from '@/assets/hero/ico_jewel.svg?react';
import profileImage1 from '@/assets/hero/profile_pic1.png';
import profileImage2 from '@/assets/hero/profile_pic2.png';
import profileImage3 from '@/assets/hero/profile_pic3.png';

const Hero = () => {
  return (
    <section>
      <div className={heroStyles.heroContainer}>
        <div className={heroStyles.textContainer}>
          <p className={heroStyles.title}>
            Explore Unique Digital Art and Collectibles
          </p>
          <p className={heroStyles.content}>
            Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
            facilisi ultrices sed faucibus proin cum ut. Eu dictum nisi
            facilisis non habitant senectus eget sollicitudin.
          </p>
          <div className={heroStyles.buttonContainer}>
            <button className={`${heroStyles.button} ${heroStyles.filled}`}>
              <div className={heroStyles.buttonContent}>
                Discover now
                <IcoArrow />
              </div>
            </button>
            <button className={`${heroStyles.button} ${heroStyles.lined}`}>
              <div className={heroStyles.buttonContent}>
                <IcoDiamond />
                Create
              </div>
            </button>
          </div>
        </div>

        <div className={heroStyles.activeUsersBox}>
          <div className={heroStyles.activeUsersImageWrapper}>
            <img src={activeUsersImage} alt='' className='activeUsersImage' />
          </div>
          <p className={heroStyles.activeUsersCount}>12K</p>
          <p className={heroStyles.activeUsersTitle}>Active users</p>
        </div>

        <div className={heroStyles.activeUsersList}>
          <div className={heroStyles.userList}>
            <div className={heroStyles.userItem}>
              <img
                src={profileImage1}
                alt=''
                className={heroStyles.userProfile}
              />
            </div>
            <div className={heroStyles.userItem}>
              <img
                src={profileImage2}
                alt=''
                className={heroStyles.userProfile}
              />
            </div>
            <div className={heroStyles.userItem}>
              <img
                src={profileImage3}
                alt=''
                className={heroStyles.userProfile}
              />
            </div>
          </div>
          <div className={heroStyles.activeUsersText}>
            <p className={heroStyles.activeUsersCount}>12K</p>
            <p className={heroStyles.activeUsersTitle}>Active users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
