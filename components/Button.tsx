type Props = {
  buttonText: string | null;
  className?: string;
};

const Button = ({ buttonText, className }: Props) => {
  return (
    <div>
      <button className={className}>{buttonText}</button>
    </div>
  );
};

export default Button;
