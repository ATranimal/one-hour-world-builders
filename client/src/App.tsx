import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.scss";

import { LoginPage } from "./LoginPage";
import { GamePage } from "./GamePage";
import { GameState, initialGameState, mockGameState } from "./models/GameState";
import { SocketEmitters, initialSocketEmitters } from "./models/SocketEmitters";
import { CardType } from "./models/CardType";
import { Rules } from "./Rules/Rules";
import { RulesModal } from "./Rules/RulesModal";

const SERVER_IP = "https://onehourworld.builders";
// const SERVER_IP = "localhost:4001";

interface AppProps {
  name: string;
}

const App = () => {
  // For dev
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const [connected, setConnected] = useState(false);
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [rejoin, setRejoin] = useState(true);
  const [create, setCreate] = useState(true);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<number>(-1);

  // For Testing
  // const [roomName, setRoomName] = useState("Test Room");
  // const [userName, setUserName] = useState("Kaelan");
  // const [connected, setConnected] = useState(true);
  // const [gameState, setGameState] = useState<GameState>(mockGameState);

  const [socketEmitters, setSocketEmitters] = useState<SocketEmitters>(
    initialSocketEmitters
  );

  useEffect(() => {
    const lastRoomJoined = localStorage.getItem("lastRoomJoined");
    const lastUserName = localStorage.getItem("lastUserName");

    if (!!lastRoomJoined && !!lastUserName) {
      setRoomName(lastRoomJoined);
      setUserName(lastUserName);
      setRejoin(true);
      setConnected(true);
    }
  }, []);

  useEffect(() => {
    if (connected) {
      const socket = io(SERVER_IP);

      if (rejoin) {
        socket.emit("doesRoomExist", roomName);
      } else {
        socket.emit("doesRoomExist", roomName);
      }

      socket.on("updateGameState", (gameState: GameState) => {
        setGameState(gameState);
      });

      socket.on("rejoinResponse", (roomExists: boolean) => {
        if (rejoin) {
          if (roomExists) {
            socket.emit("join", roomName, userName);
          } else {
            setRoomName("");
            setUserName("");
            setRejoin(false);
            setConnected(false);
            localStorage.clear();
          }
        } else if (create) {
          if (roomExists) {
            setErrorMessage(0);
            setRoomName("");
            setUserName("");
            setCreate(false);
            setConnected(false);
          } else {
            socket.emit("join", roomName, userName);
          }
        } else {
          if (!roomExists) {
            setErrorMessage(1);
            setRoomName("");
            setUserName("");
            setCreate(false);
            setConnected(false);
          } else {
            socket.emit("join", roomName, userName);
          }
        }
      });

      setSocketEmitters({
        startGame: () => {
          socket.emit("startGame", roomName);
        },
        nextTurn: (cardType: CardType) => {
          socket.emit("nextTurn", roomName, cardType);
        },
      });
    }
  }, [connected, roomName, userName]);

  return (
    <div className="app">
      {!connected ? (
        <LoginPage
          setRoomName={setRoomName}
          setUserName={setUserName}
          setConnected={setConnected}
          setCreate={setCreate}
          errorMessage={errorMessage}
        />
      ) : (
        <GamePage
          gameState={gameState}
          socketEmitters={socketEmitters}
          userName={userName}
          roomName={roomName}
          setRulesOpen={setRulesOpen}
        />
      )}
      <Rules rulesOpen={rulesOpen} setRulesOpen={setRulesOpen} />
      {rulesOpen && (
        <RulesModal rulesOpen={rulesOpen} setRulesOpen={setRulesOpen} />
      )}
    </div>
  );
};

export default App;
