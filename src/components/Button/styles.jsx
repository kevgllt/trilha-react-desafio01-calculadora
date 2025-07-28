import styled from 'styled-components';

const variantColors = {
  number: '#00aaf0',   // Azul Aço
  operator: '#ff8c00', // Laranja Escuro
  equals: '#2E8B57',   // Verde Mar
  clear: '#DC143C',    // Vermelho Carmesim
};

export const ButtonContainer = styled.button`
  /* Pega a cor do nosso mapa de variantes. 
    Se a variante não for encontrada, usa a cor de 'number' como padrão.
  */
  background-color: ${props => variantColors[props.variant] || variantColors.number};
  
  /* Estilos que você já tinha, que são comuns a todos os botões */
  padding: 2rem; /* 20px */
  border: 0.1rem solid #cdcdcd; /* 1px */
  color: #ffffff;
  font-size: 2.4rem; /* 24px */
  font-weight: 700;
  flex: 1;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem; /* 25px 15px */
    font-size: 3.2rem; /* 32px */
  }

  /* &.orange {
    background-color: DarkOrange;
  } */
`;