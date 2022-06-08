import React, { useState } from "react";

import "./LoginPage.scss";

interface LoginPageProps {
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: number;
}

const ERROR_MESSAGES = {
  0: "A room by that name already exists.",
  1: "There are no rooms by that name.",
};

export const LoginPage = ({
  setRoomName,
  setUserName,
  setConnected,
  setCreate,
  errorMessage,
}: LoginPageProps) => {
  const [createRoom, setCreateRoom] = useState<string>("");
  const [createUser, setCreateUser] = useState<string>("");
  const [rejoinRoom, setRejoinRoom] = useState<string>("");
  const [rejoinUser, setRejoinUser] = useState<string>("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    rejoin: boolean
  ) => {
    e.preventDefault();

    if (
      (createRoom !== "" && createUser !== "") ||
      (rejoinRoom !== "" && rejoinUser !== "")
    ) {
      if (rejoin) {
        setRoomName(rejoinRoom);
        setUserName(rejoinUser);
        setCreate(false);
      } else {
        setRoomName(createRoom);
        setUserName(createUser);
        setCreate(true);
      }
      setConnected(true);
    } else {
      alert("Please fill out all the fields");
    }
  };

  return (
    <div className="login-page">
      <img
        src="logo.png"
        alt="One Hour World Builders Logo"
        style={{ width: "20%", height: "auto", margin: "5% auto 0" }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e, false)} className="login-form">
          <h1 className="title">Create Room</h1>
          <label className="label" htmlFor="createRoom">
            Room Name
          </label>
          <input
            className="input"
            value={createRoom}
            id="createRoom"
            onChange={(e) => setCreateRoom(e.target.value)}
          ></input>
          <label className="label" htmlFor="createUser">
            User Name
          </label>
          <input
            className="input"
            value={createUser}
            id="createUser"
            onChange={(e) => setCreateUser(e.target.value)}
          ></input>
          <input
            className="button"
            type="submit"
            value="Create"
            disabled={createRoom === null && createUser === null}
          />
          {errorMessage === 0 && (
            <p style={{ color: "red" }}>{ERROR_MESSAGES[0]}</p>
          )}
        </form>
        <form onSubmit={(e) => handleSubmit(e, true)} className="login-form">
          <h1 className="title">Join a room</h1>
          <label className="label" htmlFor="roomName">
            Room Name
          </label>
          <input
            className="input"
            value={rejoinRoom}
            id="rejoinRoom"
            onChange={(e) => setRejoinRoom(e.target.value)}
          ></input>
          <label className="label" htmlFor="rejoinUser">
            User Name
          </label>
          <input
            className="input"
            value={rejoinUser}
            id="rejoinUser"
            onChange={(e) => setRejoinUser(e.target.value)}
          ></input>
          <input
            className="button"
            type="submit"
            value="Enter"
            disabled={rejoinRoom === null && rejoinUser === null}
          />
          {errorMessage === 1 && (
            <p style={{ color: "red" }}>{ERROR_MESSAGES[1]}</p>
          )}
        </form>
      </div>
      <div style={{ marginBottom: "5%" }}>
        If you enjoy this app and want to support it, please consider buying a
        <a href="https://kaelandm.itch.io/one-hour-worldbuilders">
          {" "}
          print-and-play{" "}
        </a>
        or{" "}
        <a href="https://kaelanbuildsworlds.gumroad.com/l/1hwb-irl">
          {" "}
          physical copy.{" "}
        </a>
        Developed by
        <a href="https://kaelan.online/"> Kaelan Doyle Myerscough </a> and
        programmed by
        <a href="https://andt.io"> Andrew Tran </a>
      </div>
    </div>
  );
};
