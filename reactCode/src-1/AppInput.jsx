function AppInput({ type, className, value, setValue }) {
    return (
        <input
            type={type}
            className={className}
            value={value}
            onChange={(e) => setValue(e.target.value)} />
    )
}

export default AppInput;