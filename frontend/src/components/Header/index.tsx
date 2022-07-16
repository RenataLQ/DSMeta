import logo from "../../assets/img/logo.svg";
import './styles.css';

function Header(): JSX.Element {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta">
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por:
                        <a href="https://www.instagram.com/renatalunag/">@renatalunag.ig</a>
                    </p>
                </img>
                </div>
        </header>
    );
}
export default Header;
