import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputDetails from "./InputDetails";
const BookMovie = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let { item } = location.state;
  console.log(item);

  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [usermobile, setusermobile] = useState("");
  const [selecTime, setselecTime] = useState("9:00 am");
  const [buttontext, setbuttontext] = useState("Book Show");
  const [isBooked, setisBooked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Tickets ${item.show.name}`;
  }, []);

  const bookticket = () => {
    if (!isBooked) {
      if (
        username !== "" &&
        useremail !== "" &&
        usermobile !== "" &&
        selecTime !== ""
      ) {
        setbuttontext("Booking...");
        setTimeout(() => {
          setisBooked(true);
          setbuttontext("Book Show");
        }, 2000);
      } else {
        alert("Oops! please fill all the details");
      }
    }
  };

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
    ticket: {
      textShadow: "5px 5px 20px gray,-5px -5px 20px gray",
      textAlign: "center",
    },
    ticketcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "96%",
    },
    formhead: {
      textAlign: "center",
      fontSize: window.innerWidth <= 500 ? "15px" : "30px",
      marginTop: 10,
    },
    formcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      flexDirection: "column",
    },
    time: {
      marginTop: 50,
      padding: 5,
      borderRadius: 5,
      width: "100px",
      cursor: "pointer",
      background: "black",
      color: "white",
    },
    bookshowbtn: {
      textDecoration: "none",
      color: "white",
      marginTop: 50,
      cursor: "pointer",
    },
    bookshowbtncon: {
      background: buttontext === "Book Show" ? "black" : "gray",
      width: window.innerWidth <= 500 ? "330px" : "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 10,
      boxShadow: "2px 2px 10px black,-2px -2px 10px black",
    },
    booked: {
      position: "absolute",
      top: (window.innerHeight - 150) / 2,
      left: (window.innerWidth - 310) / 2,
      background: "white",
      width: "300px",
      borderRadius: 5,
      boxShadow: "5px 5px 10px black,-5px -5px 10px black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: 8,
      fontSize: "14px",
      paddingBottom: 30,
      paddingTop: 20,
    },
    right: {
      border: "3px solid green",
      width: "35px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      color: "green",
      fontWeight: "bold",
    },
    navigateHome: { textDecoration: "none", color: "white", cursor: "pointer" },
    navigateHomecon: {
      background: "blue",
      padding: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 10,
      boxShadow: "2px 2px 10px black,-2px -2px 10px black",
      width: "100px",
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
        <div style={styles.ticketcon}>
          <h4 style={styles.ticket}>Book Tickets for {item.show.name}</h4>
        </div>
      </div>
      <h1 style={styles.formhead}>Fill the details for booking your show</h1>
      <div style={styles.formcon}>
        <InputDetails
          name="Name"
          placeholder="Enter your name"
          value={username}
          setvalue={setusername}
        />
        <InputDetails
          name="Email"
          placeholder="Enter your email"
          value={useremail}
          setvalue={setuseremail}
        />
        <InputDetails
          name="Mobile No."
          placeholder="Enter your mobile no."
          value={usermobile}
          setvalue={setusermobile}
        />
        <div>
          <label htmlFor="selectTime">Choose Time Slot : </label>
          <select
            id="selectTime"
            value={selecTime}
            onChange={(e) => setselecTime(e.target.value)}
            style={styles.time}
          >
            <option value="9:00">9:00</option>
            <option value="12:00">12:00</option>
            <option value="15:00">15:00</option>
            <option value="18:00">18:00</option>
            <option value="21:00">21:00</option>
          </select>
        </div>
        <div
          style={styles.bookshowbtn}
          onClick={() => {
            bookticket();
          }}
        >
          <div style={styles.bookshowbtncon} className="moviecon">
            {buttontext}
          </div>
        </div>
      </div>
      {isBooked ? (
        <div style={styles.booked}>
          <div style={styles.right}>&#10004;</div>
          <br />
          <span>
            Dear
            <b>
              <i>{username}</i>
            </b>
            , Your Ticket has been booked successfully for
            <b>
              <i>
                {item.show.name} ({selecTime}).
              </i>
            </b>
          </span>
          <br />
          <span>
            Ticket Details will be sent to
            <b>
              <i> {useremail} </i>
            </b>
            and
            <b>
              <i> {usermobile}</i>
            </b>
          </span>
          <br />
          <div
            style={styles.navigateHome}
            onClick={() => {
              navigate(-2);
            }}
          >
            <div style={styles.navigateHomecon} className="moviecon">
              OK
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BookMovie;
