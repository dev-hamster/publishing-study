import IcoFilter from '@/assets/ico-filter.svg?react';
import Card from '@/Card';
import Button from '@/components/Button';
import Title from '@/components/Title';
import exploreStyles from './explore.module.scss';

const Explore = ({ data }: { data: any[] }) => {
  return (
    <>
      <Title text='Explore' size='small' />
      <p className={exploreStyles.content}>
        Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
        facilisi ultrices sed faucibus proin cum ut.
      </p>
      <div className={exploreStyles.filterButtonBlock}>
        <div className={exploreStyles.filterButton}>
          <Button filled>
            <div className={exploreStyles.filterButtonContent}>
              Filter
              <IcoFilter />
            </div>
          </Button>
        </div>
      </div>

      <div className={exploreStyles.contentContainer}>
        <Card data={data} />
        <div className={exploreStyles.loadMoreButtonBlock}>
          <div className={exploreStyles.loadMoreButton}>
            <Button lined>Load more</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
