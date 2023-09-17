import { Link } from "react-router-dom"
import { HearderStyled } from "./styles"

const Header = () => {

    return(
        <HearderStyled>
            <div>
                <h2>Arnia Trello</h2>
            </div>
            <div>
                <p>Olá, Alberto</p>
                <Link to="/login">Sair</Link>
            </div>
        </HearderStyled>
    )
}

export default Header