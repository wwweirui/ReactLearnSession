function PassInput({ password, passwordClass, setPassword }) {
    return (
        <input type="password"
            className={passwordClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

    )
}

export default PassInput;