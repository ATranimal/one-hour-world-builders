import React, { useState } from "react";
import { GameState } from "../models/GameState";
import { PlayerList } from "./PlayerList";

import "./RoomInfo.scss";

interface RoomInfoProps {
  gameState: GameState;
  roomName: string;
  skipTurn: () => void;
}

export const RoomInfo = (props: RoomInfoProps) => {
  const { gameState, roomName, skipTurn } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={"room-info" + (isOpen ? " opened" : "")}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <>
          <h2 className="title">{`${roomName}, hosted by ${gameState.players?.[0]}.`}</h2>
          <h3 className="subtitle">{`It is ${
            gameState.players?.[gameState.playerTurn ?? 0]
          }'s turn`}</h3>

          <PlayerList
            players={gameState?.players}
            activePlayerIndex={gameState.playerTurn}
            skipTurn={skipTurn}
          />
        </>
      ) : (
        <>
          <h2 className="title">Player List</h2>
          <h3 className="subtitle">{`It is ${
            gameState.players?.[gameState.playerTurn ?? 0]
          }'s turn`}</h3>
          <h3 className="title">V</h3>
        </>
      )}
    </div>
  );
};
