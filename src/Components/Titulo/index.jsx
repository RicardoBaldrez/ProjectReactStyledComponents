import styled from 'styled-components';

// Assim que usamos o styled. -> Temos acesso a todas as tags html's
// Styled-components já entende que estamos passando um { children }
const Titulo = styled.h1`
  color: grey;
  padding: 25px 0;
`;

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
export default Titulo;
