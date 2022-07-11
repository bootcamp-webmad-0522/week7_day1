import './Navigation.css'
import logo from './logo.svg'

const Navigation = () => {

    return (
        <header className='navbar'>

            <a href="#">
                <img src={logo} alt="Logotipo" />
            </a>

            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation