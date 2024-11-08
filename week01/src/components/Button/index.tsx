import buttonStyles from './button.module.scss';

const Button = ({
  children,
  filled,
  lined,
}: {
  children: React.ReactNode;
  filled?: boolean;
  lined?: boolean;
}) => {
  return (
    <button
      className={`${buttonStyles.button}
  ${filled ? buttonStyles.filled : ''}
  ${lined ? buttonStyles.lined : ''}
  `}
    >
      {children}
    </button>
  );
};
export default Button;
