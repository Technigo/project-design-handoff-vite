import { useEffect, useState } from "react"

export const useIsInViewport = (ref) => {
    const [isInViewPort, setIsInViewPort] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            // Distance to bottom = window.innerHeight -  getBoundingClientRect().bottom
            const { bottom } = ref.current.getBoundingClientRect();

            return (
                setIsInViewPort(window.innerHeight - bottom > 50)
            )
        };

        window.addEventListener("scroll", handleScroll);
    }, [ref, isInViewPort]);

    return (
        isInViewPort
    )
}
