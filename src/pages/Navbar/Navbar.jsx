import styles from '../../styles'
import logoImage from '../../assets/logo-light.png'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className={`${styles.outerWrapper} py-2 bg-primary`}>
            <div className={`${styles.wrapper} flex gap-6 justify-between items-center`}>
                <Link to={"/"}>
                    <img className='max-w-[140px]' src={logoImage} alt="" />
                </Link>

                <ul className='flex flex-wrap items-center gap-3 text-white text-sm' >
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li to={"Sign"}>
                        <Link to={"/sign"}>Register</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar