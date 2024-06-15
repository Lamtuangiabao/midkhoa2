import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { mov } from "./data/mov";
import Movie from "./components/movie/Movie";

function App() {
  // const [count, setCount] = useState(0);
  const [movie, setMovie] = useState(mov);
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="navbar">
        <div className="logo">Anonime</div>
        <div className="nav2">
          <div className="home">Home</div>
          <div className="list">List anime</div>
        </div>
        <div>
          <input placeholder="  Search anime or movie" type="text" />
        </div>
      </div>
      {/* /////////////// */}
      <div className="explore">
        <div>Explore</div>
        <div className="ques">What are you gonna watch today ?</div>
      </div>
      <div className="Caro">
        <div className="gradient"></div>

        <div className="txt">
          <span>Weather with you</span>
          <p>
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.
          </p>
        </div>
      </div>
      <div className="New">New Release</div>
      <div className="cover">
        {movie.data.map((item) => (
          <Movie
            des={item.description}
            id={item.id}
            key={item.id}
            hinhAnh={item.image}
            name={item.movieName}
            ep={item.episode}
          />
        ))}
      </div>
      <div className="grad1"></div>
      {/* //opacity cao hơn thì không thể click nếu có 1 thẻ nằm đè lên thẻ được set onclick thì không thể click */}
    </>
  );
}

export default App;
