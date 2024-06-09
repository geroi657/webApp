import Overlay from "../overlay/overlay.jsx";
import Plants from "../plants/plants.jsx"
import Garden from "../garden/garden.jsx";
import Soil from "../soil/soil.jsx"

const Board = () => {
    return (
        <div id="board">
            <Overlay/>
            <Plants/>
            <Garden/>
            <Soil/>
        </div>
    )
}

export default Board;