import Title from '@/components/Title';
import titleStyles from '@/components/TitleWithButton/titleWithButton.module.scss';

const TitleWithButton = ({
  text,
  color = 'black',
  Button,
}: {
  text: string;
  color?: 'purple' | 'black';
  Button: React.ReactNode;
}) => {
  return (
    <div className={titleStyles.titleContainer}>
      <Title color={color} text={text} />

      {Button}
    </div>
  );
};
export default TitleWithButton;
