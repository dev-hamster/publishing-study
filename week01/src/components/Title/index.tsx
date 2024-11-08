import titleStyles from '@/components/Title/title.module.scss';

const Title = ({
  text,
  color = 'black',
  size = 'medium',
}: {
  text: string;
  color?: 'purple' | 'black';
  size?: 'medium' | 'small';
}) => {
  return (
    <div className={titleStyles.titleContainer}>
      <h1 className={`${titleStyles[size]} ${titleStyles[color]}`}>{text}</h1>
    </div>
  );
};
export default Title;
