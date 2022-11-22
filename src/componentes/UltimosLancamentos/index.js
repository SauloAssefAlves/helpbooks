import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import imagemLivro from "../../imagens/livro2.png";
import CardRecomenda from "../CardRecomenda";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo tamanhoFonte="36px" alinhamento="center">
        Ultimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        imagem={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}
