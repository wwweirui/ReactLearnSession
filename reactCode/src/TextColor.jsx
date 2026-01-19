function TextColor({ children, value, setValue }) {
    return (
        <>
            <label>
                {children}
                <select
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                >
                    <option value="" selected>
                        White
                    </option>
                    <option value="text-black">Black</option>
                    <option value="text-orange">Orange</option>
                </select>
            </label>

        </>
    )
}

export default TextColor;