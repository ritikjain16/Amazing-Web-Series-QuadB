import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let { item } = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${item.show.name} (${item.show.language})`;
  }, []);

  const styles = {
    header: {
      top: 0,
      zIndex: 1,
      position: "sticky",
      textAlign: "center",
      background: "black",
      color: "white",
      width: "98%%",
      padding: 20,
      marginTop: 0,
      boxShadow: "5px 5px 10px black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "50px",
    },
    back: {
      fontSize: "25px",
      fontWeight: "bold",
      padding: 5,
      width: "30px",
      height: "30px",
      cursor: "pointer",
    },
    moviename: {
      textShadow: "5px 5px 20px gray,-5px -5px 20px gray",
      textAlign: "center",
    },
    imgcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: 30,
      marginBottom: 15,
      padding: 10,
    },
    imgcon1: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    movieimg: {
      width: "100%",
      borderRadius: 10,
      boxShadow: "10px 10px 20px gray,-10px -10px 20px gray",
    },
    ratingcon: { position: "absolute", top: -13, right: -9 },
    ratingcon1: {
      background: "yellow",
      padding: 5,
      marginRight: 10,
      borderRadius: 10,
      boxShadow: "10px 10px 20px black",
    },
    detailcon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
    },
    textstyle: { lineHeight: 1.5, letterSpacing: 1.5 },
    textstyle1: { lineHeight: 1.5, letterSpacing: 1.2 },
    linkcon: { textDecoration: "none", color: "white", margin: 10 },
    insidelinkcon: {
      background: "blue",
      width: window.innerWidth - 240,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 10,
      boxShadow: "2px 2px 10px blue,-2px -2px 10px blue",
    },
    urlcon: { textDecoration: "none", color: "white", margin: 10 },
    movieurl: {
      background: "black",
      width: window.innerWidth - 240,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 10,
      boxShadow: "2px 2px 10px black,-2px -2px 10px black",
    },
    separator: {
      background: "#c9baba",
      height: 1,
      width: "85%",
      marginLeft: 50,
      marginRight: 50,
      marginTop: 40,
    },
  };

  return (
    <>
      <div style={styles.header}>
        <div
          onClick={() => {
            navigate(-1);
          }}
          style={styles.back}
          className="moviecon"
        >
          &larr;
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "96%",
          }}
        >
          <h2 style={styles.moviename}>
            {item.show.name} ({item.show.language})
          </h2>
        </div>
      </div>
      <div style={styles.imgcon}>
        <div style={styles.imgcon1} className="moviedetailscon">
          <img src={item.show.image.original} alt="" style={styles.movieimg} />
          {item.show.rating.average !== null ? (
            <h3 style={styles.ratingcon}>
              <span style={styles.ratingcon1}>
                {item.show.rating.average}/10
              </span>
            </h3>
          ) : (
            <></>
          )}
        </div>
        <br />
        <div style={styles.detailcon}>
          <span style={styles.textstyle}>
            
            <b> Running Time : </b> {item.show.averageRuntime} min
          </span>

          {item.show.genres.length !== 0 ? (
            <span style={styles.textstyle}>
              <b>Genres : </b>
              {item.show.genres.join(",")}
            </span>
          ) : (
            <></>
          )}

          {item.show.schedule.days.length !== 0 ? (
            <span style={styles.textstyle}>
              <b>Watch on : </b> {item.show.schedule.days.join(",")} at
              {item.show.schedule.time}
            </span>
          ) : (
            <></>
          )}

          <span style={styles.textstyle}>
            <b> Current Status : </b>
            {item.show.status}
          </span>
          <span style={styles.textstyle}>
            
            <b>Premiered : </b> {item.show.premiered}
          </span>
          <span
            style={styles.textstyle1}
            dangerouslySetInnerHTML={{ __html: item.show.summary }}
          ></span>
        </div>
        <Link style={styles.linkcon} to="/bookmovie" state={{ item: item }}>
          <div style={styles.insidelinkcon} className="moviecon">
            Book Tickets
          </div>
        </Link>
        <a style={styles.urlcon} href={item.show.url} target="_blank">
          <div style={styles.movieurl} className="moviecon">
            Read More...
          </div>
        </a>
        <div style={styles.separator}></div>
      </div>
    </>
  );
};

export default MovieDetails;
