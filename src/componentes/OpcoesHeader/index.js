import "./estilo.css";

export default function OpcoesHeader() {
  const textOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
  return (
    <ul className="opcoes">
      {textOpcoes.map((op) => (
        <li className="opcao">{op}</li>
      ))}
    </ul>
  );
}
