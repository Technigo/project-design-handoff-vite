import Logo from '../assets/Logo.svg';
import { NavigationMenu } from './NavigationMenu';

export const Navigation = () => {
    return (
        <div className="flex mx-16 bg-white items-center justify-between">
            <img src={Logo} alt="Logo" />
            <NavigationMenu />
        </div>
    );
};
