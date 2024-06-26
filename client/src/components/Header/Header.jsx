import Profile from "../Profile/Profile"
import LoginButton from "../Authenticator/LoginButton";
import LogoutButton from "../Authenticator/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import chocolateLogo from '../../../public/chocolate.svg'
import './header.css';


const Header = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="header__container">
            <div className="logo__container">
                <img src={chocolateLogo} alt="chocolate_logo" className="logo__img" />
            </div>
            <div className="header__title">Chocolate Chocolates</div>
            <div className="auth__container">
                {
                    isAuthenticated ? 
                    <div className="isAuthenticated">
                    <div className="user">
                        <Profile/>
                    </div>
                    <LogoutButton /> 
                    </div>      
                    : 
                    <div className="isNotAuthenticated">
                    <LoginButton />
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;