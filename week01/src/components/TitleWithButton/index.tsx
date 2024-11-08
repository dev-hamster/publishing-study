import Title from '@/components/Title';
import titleStyles from '@/components/TitleWithButton/titleWithButton.module.scss';

const TitleWithButton = ({
  text,
  color = 'black',
}: {
  text: string;
  color?: 'purple' | 'black';
}) => {
  return (
    <div className={titleStyles.titleContainer}>
      <Title color={color} text={text} />

      <a className={titleStyles.button} href='#'>
        See All
      </a>
    </div>
  );
};
export default TitleWithButton;
