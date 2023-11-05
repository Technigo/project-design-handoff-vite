const Input = ({ id, label, placeholder }) => {
    return (
        <>
            <label htmlFor={id} className="block pl-4 mb-2 text-blue-n">{label}</label>
            <input id={id} className="mb-2 py-2 px-4 rounded-full border-2 border-blue-n bg-transparent w-full text-blue-n" placeholder={placeholder} />
        </>
    )
}

export default Input;