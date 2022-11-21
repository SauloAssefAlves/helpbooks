import logo from "../../imagens/logo.svg";
import "./estilo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img"></img>
      <p>
        <strong>Help</strong>Books
      </p>
    </div>
  );
}
