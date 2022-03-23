import Data from "./Temp";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <img id="imgArtist" src={Data.album.images[1].url} alt="" />
        <p id="nameArtis">{Data.artists[0].name}</p>
        <p id="songTitle">{Data.name}</p>
        <button id="btnSelect">Select</button>
      </div>
    </div>
  );
}
