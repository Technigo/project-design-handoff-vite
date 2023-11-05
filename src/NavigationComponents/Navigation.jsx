import { NavigationMenu } from './NavigationMenu';

export const Navigation = () => {
    return (
        <div className="mx-8 h-20 pt-2 lg:flex mx-16 bg-white flex items-center justify-between">
            <img className="h-11 lg:h-24" src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Logo-2.svg?v=1699203015607" alt="Logo" />
            <NavigationMenu />
        </div>
    );
};
