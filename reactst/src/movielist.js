import React, { useState, useEffect } from "react";
import gs from "./img/gs.png";
import "./App.css";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=bbfd262";
const Mapi = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const handleInputText = (e) => {
    setsearchTerm(e.target.value);
  };
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    // console.log(`${API_URL} = ${title}`)
  };
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      searchMovies(searchTerm);
    }
  };
  // const handleSearch=()=>{

  // }
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  console.log(movies);
  return (
    <div className="App">
      <div className="App-header">
        <h1>Movie Card</h1>
        <div className="Search Bar">
          <input
            type={"text"}
            value={searchTerm}
            placeholder={"Enter Movie Name"}
            onChange={(e) => {
              handleInputText(e);
            }}
            onKeyUp={(e) => handleInputEnter(e)} //e->event
          />
          <img
            className="image"
            src={gs}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      <div className="Movies">
        {movies.map((movie, index) => (
          <div className="Movie" key={index}>
            <img
              className="image"
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => searchMovies(movie.Title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapi;
