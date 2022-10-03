import './App.css';
import colorData from "./color-data.json";
import {useState} from "react";
import ColorList from "./ColorList";

function App() {
    const [colors, setColors] = useState(colorData);
    return (
        <ColorList colors={colors} onRemoveColor={id => {
            const newColors = colors.filter(color => color.id !== id);
            setColors(newColors);
        }}/>
    );
}

export default App;
