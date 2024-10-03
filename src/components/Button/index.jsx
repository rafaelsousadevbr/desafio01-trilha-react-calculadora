/* eslint-disable react/prop-types */

import { ButtonContainer} from './styles';


const Button = ({id, label, onClick}) => {
    return (
      <ButtonContainer id={id} onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;