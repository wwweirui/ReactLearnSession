function TogglePurple({ children, value, setValue }) {
    return (
        <label>
            {children}
            <input
                type="checkbox"
                onChange={() => setValue(!value)}
                selected={value}
            />
        </label>
    )
}

export default TogglePurple;