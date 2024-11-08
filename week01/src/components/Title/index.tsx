import titleStyles from '@/components/Title/title.module.scss';

const Title = ({
  text,
  color = 'black',
}: {
  text: string;
  color?: 'purple' | 'black';
}) => {
  return (
    <div className={titleStyles.titleContainer}>
      <h1 className={`${titleStyles.text} ${titleStyles[color]}`}>{text}</h1>
    </div>
  );
};
export default Title;
