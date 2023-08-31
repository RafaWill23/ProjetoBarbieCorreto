import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
                <img id = "logoheader" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barbie_Logo.svg/2560px-Barbie_Logo.svg.png" alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header