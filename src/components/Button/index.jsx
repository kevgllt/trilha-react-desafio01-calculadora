import { ButtonContainer } from "./styles";

const Button = ({label, variant, onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
