const Button = ({ children }) => {
    return (
        <button className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">{children}</button>
    );
}

export default Button;