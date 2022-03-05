import React from "react";
import { Link } from "react-router-dom";
const MovieComponent = ({ index, item }) => {
  const styles = {
    singlemoviecon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,
      marginBottom: 15,
      flexDirection: "column",
      width: 400,
      marginBottom: 60,
    },
    insidecon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      position: "relative",
    },
    linkcon: {
      color: "black",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    movieimg: {
      width: "100%",
      borderRadius: 10,
      boxShadow: "10px 10px 20px gray,-10px -10px 20px gray",
    },
    ratingcon: { position: "absolute", top: -13, right: -9 },
    insideratingcon: {
      background: "yellow",
      padding: 5,
      marginRight: 10,
      borderRadius: 10,
      boxShadow: "10px 10px 20px black",
    },
    moviename: {
      marginTop: 30,
      textShadow: "5px 5px 13px gray,-5px -5px 13px gray",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.singlemoviecon} key={index}>
      <div className="moviecon" style={styles.insidecon}>
        <Link to="/moviedetails" state={{ item: item }} style={styles.linkcon}>
          <img src={item.show.image.original} alt="" style={styles.movieimg} />
          {item.show.rating.average !== null ? (
            <h3 style={styles.ratingcon}>
              <span style={styles.insideratingcon}>
                {item.show.rating.average}/10
              </span>
            </h3>
          ) : (
            <></>
          )}
        </Link>
      </div>
      <Link to="/moviedetails" state={{ item: item }} style={styles.linkcon}>
        <h2 style={styles.moviename}>
          {item.show.name} ({item.show.language})
        </h2>
      </Link>
    </div>
  );
};

export default MovieComponent;
