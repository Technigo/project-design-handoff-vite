import { NavigationMenu } from './NavigationMenu';

export const Navigation = () => {
    return (
        <div className="mx-8 h-20 pt-2 lg:flex mx-16 bg-white items-center justify-between">
            <img className="h-10 lg:h-24" src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Logo.svg?v=1698689188784" alt="Logo" />
            <NavigationMenu />

        </div>
    );
};
