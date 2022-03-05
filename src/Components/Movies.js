import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";

const Movies = () => {
  const MOVIES_API = "https://api.tvmaze.com/search/shows?q=all";
  const [moviesdata, setmoviesdata] = useState([]);

  const getmovies = async () => {
    try {
      const res = await axios.get(MOVIES_API);
      setmoviesdata(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getmovies();
  }, []);

  const styles = {
    mymaincon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    myheader: {
      textAlign: "center",
      background: "black",
      color: "white",
      width: "98%%",
      padding: 20,
      marginTop: 0,
      boxShadow: "5px 5px 10px black",
      position: "sticky",
      top: 0,
      zIndex: 9999991,
    },
    mymovieslistcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      marginTop: 50,
    },
    loading: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: window.innerWidth - 50,
      height: 500,
      fontSize: "3em",
      textShadow: "5px 5px 10px gray,-5px -5px 10px gray",
    },
  };

  return (
    <div style={styles.mymaincon}>
      {moviesdata.length !== 0 ? (
        <div>
          <h1 style={styles.myheader}>Amazing Web Series</h1>
          <div style={styles.mymovieslistcon}>
            {moviesdata.map((item, index) => (
              <MovieComponent key={index} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div style={styles.loading}>Loading...</div>
      )}
    </div>
  );
};

export default Movies;
