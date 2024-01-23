const Input = ({ id, label, placeholder }) => {
    return (
        // This is a JSX fragment used to group multiple elements without a parent container.
        <>
            {/* 
                This is a label element associated with the input using the "htmlFor" attribute.
                The label text is specified by the "label" prop.
                It has classes for styling, including padding, margin, and text color.
            */}
            <label htmlFor={id} className="block pl-4 mb-2 text-blue-n">{label}</label>

            {/* 
                This is an input element with specific attributes and styles.
                It has an "id" attribute for associating with the label.
                It also has classes for styling, including padding, margin, border, and text color.
                The "placeholder" prop is used for providing a hint to the user about the expected input.
            */}
            <input
                id={id}
                className="mb-2 py-2 px-4 rounded-full border-2 border-blue-n bg-transparent w-full text-blue-n"
                placeholder={placeholder}
            />
        </>
    )
}

export default Input;
