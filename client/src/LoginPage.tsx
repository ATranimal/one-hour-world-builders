import React, { useState } from "react";

import "./LoginPage.scss";

interface LoginPageProps {
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
}

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
        style={{ width: "20%", height: "auto", marginBottom: "24px" }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e, false)} className="login-form">
          <h1>Create Room</h1>
          <label htmlFor="createRoom">Room Name</label>
          <input
            value={createRoom}
            id="createRoom"
            onChange={(e) => setCreateRoom(e.target.value)}
          ></input>
          <label htmlFor="createUser">User Name</label>
          <input
            value={createUser}
            id="createUser"
            onChange={(e) => setCreateUser(e.target.value)}
          ></input>
          <input
            type="submit"
            value="Create"
            disabled={createRoom === null && createUser === null}
          />
        </form>
        <form onSubmit={(e) => handleSubmit(e, true)} className="login-form">
          <h1>Join a room</h1>
          <label htmlFor="roomName">Room Name</label>
          <input
            value={rejoinRoom}
            id="rejoinRoom"
            onChange={(e) => setRejoinRoom(e.target.value)}
          ></input>
          <label htmlFor="rejoinUser">User Name</label>
          <input
            value={rejoinUser}
            id="rejoinUser"
            onChange={(e) => setRejoinUser(e.target.value)}
          ></input>
          <input
            type="submit"
            value="Enter"
            disabled={rejoinRoom === null && rejoinUser === null}
          />
        </form>
      </div>
      <div>
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
