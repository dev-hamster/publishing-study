import IcoAlarm from '@/assets/header/ico_alarm.svg?react';
import IcoMenu from '@/assets/header/ico_menu.svg?react';
import IcoSearch from '@/assets/header/ico_search.svg?react';
import logo from '@/assets/header/logo.png';
import profilePic from '@/assets/header/profilePic.png';
import headerStyles from '@/Header/header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={headerStyles.container}>
        <div className={headerStyles.logo}>
          <div className={headerStyles.icon}>
            <img className={headerStyles.iconImage} src={logo} alt='logo' />
          </div>
          <div className={headerStyles.titleWrapper}>
            <h1 className={headerStyles.title}>NFT logoplace</h1>
          </div>

          <div className={headerStyles.searchContainer}>
            <form className={headerStyles.search} action=''>
              <button className={headerStyles.searchButton}>
                <IcoSearch />
              </button>
              <input
                className={headerStyles.searchInput}
                type='text'
                name=''
                id=''
                placeholder='search'
              />
            </form>
          </div>
        </div>

        <div className={headerStyles.menu}>
          <div className={headerStyles.menuIcon}>
            <IcoMenu />
          </div>

          <ul className={headerStyles.menuList}>
            <li className={headerStyles.menuItem}>
              <a href='#'>Home</a>
            </li>
            <li className={headerStyles.menuItem}>
              <a href='#'>Brows</a>
            </li>
            <li className={headerStyles.menuItem}>
              <a href='#'>Create</a>
            </li>
            <li className={headerStyles.menuItem}>
              <a href='#'>MyNFT's</a>
            </li>
            <li>
              <div className={headerStyles.alarmBox}>
                <div className={headerStyles.noti} />
                <IcoAlarm />
              </div>
            </li>
            <li>
              <div className={headerStyles.accountBox}>
                <div>Account</div>
                <div className={headerStyles.profile}>
                  <img src={profilePic} alt='profile' width={44} height={44} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
