import React from "react";
import { GameState } from "../models/GameState";
import { SocketEmitters } from "../models/SocketEmitters";
import { PlayerList } from "./PlayerList";

interface WaitingPageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
  roomName: string;
  userName: string;
  setRulesOpen: any; // react dispatch
}

export const WaitingPage = (props: WaitingPageProps) => {
  const { gameState, socketEmitters, roomName, userName, setRulesOpen } = props;

  const isHost = gameState.players?.[0] === userName;

  return (
    <div className="waiting-page">
      <div>
        {isHost ? (
          <h2 className="title">{`You're the host of ${roomName}.`}</h2>
        ) : (
          <h2 className="title">{`${gameState.players?.[0]} is the host of ${roomName}.`}</h2>
        )}
        <h2 className="subtitle">Waiting for players to connect...</h2>
      </div>
      <PlayerList
        skipTurn={() => {}}
        players={gameState?.players}
        activePlayerIndex={null}
      />
      {gameState?.players?.[0] === userName ? (
        <div className="game-start">
          <input
            className="button"
            type="button"
            onClick={() => {
              socketEmitters.startGame();
              setRulesOpen(true);
            }}
            value="Click to Start"
          />
        </div>
      ) : (
        <div className="game-start">
          <input
            className="button"
            type="button"
            value="Waiting for host to start"
            disabled={true}
          />
        </div>
      )}
    </div>
  );
};
