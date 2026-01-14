/*
  1. Bind the input/select to the states
  2. Change the circle styles based on the states

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
    const [purple, setPurple] = React.useState(false);
    const [text, setText] = React.useState("");
    const [size, setSize] = React.useState(150);
    const [rotate, setRotate] = React.useState(0);

    const circleClass = purple ? "purple" : "";
    const textClass = text;
    const circleStyle = {

        height: `${size}px`,
        width: `${size}px`,
        lineHeight: `${size}px`,
        transform: `rotate(${rotate}deg)`,
    }

    return (
        <main>
            <label>
                Purple
                <input type="checkbox" value={purple}
                    onChange={(e) => setPurple(e.target.checked)}
                />
            </label>

            <label>
                text color
                <select value={text} onChange={(e) => { setText(e.target.value) }}>
                    <option value="" selected>
                        White
                    </option>
                    <option value="text-black">Black</option>
                    <option value="text-orange">Orange</option>
                </select>
            </label>

            <label>
                Circle Size
                <input type="number" value={size} onChange={(e) => {
                    setSize(e.target.value)
                }} />
            </label>

            <label>
                Circle Rotate
                <input type="number" value={rotate} onChange={(e) => {
                    setRotate(e.target.value)
                }} />
            </label>
            <div className={`circle ${textClass} ${circleClass}`} style={circleStyle}>Hi!</div>
        </main >
    );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);