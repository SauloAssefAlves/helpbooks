import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  display: flex;
  min-width: 120px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  text-align: center;
`;

export default function OpcoesHeader() {
  const textOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
  return (
    <Opcoes>
      {textOpcoes.map((op) => (
        <Opcao>
          <p>{op}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}
