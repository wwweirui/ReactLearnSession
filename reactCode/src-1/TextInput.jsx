function TextInput({ inputText, inputClass, setInputText }) {
    <input type="text"
        className={inputClass}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} />
}

export default TextInput;