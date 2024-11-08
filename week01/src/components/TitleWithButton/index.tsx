import Title from '@/components/Title';
import titleStyles from '@/components/TitleWithButton/titleWithButton.module.scss';

const TitleWithButton = ({
  text,
  color = 'black',
  size = 'medium',
  Button,
}: {
  text: string;
  color?: 'purple' | 'black';
  size?: 'medium' | 'small';
  Button: React.ReactNode;
}) => {
  return (
    <div className={titleStyles.titleContainer}>
      <Title color={color} text={text} size={size} />

      {Button}
    </div>
  );
};
export default TitleWithButton;
