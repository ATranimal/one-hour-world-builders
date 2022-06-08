import React from "react";

import "./PlayerList.scss";

interface PlayerListProps {
  players: string[] | null;
  activePlayerIndex: number | null;
  skipTurn: () => void;
}

export const PlayerList = (props: PlayerListProps) => {
  const { players, activePlayerIndex, skipTurn } = props;

  console.log(activePlayerIndex);

  return (
    <div className="player-count">
      <h2 className="subtitle">Players</h2>
      {players?.map((player, idx) => {
        return (
          <p
            className={
              "player-name" +
              (activePlayerIndex === idx ? " active-player" : "")
            }
            key={idx}
          >
            {player}
          </p>
        );
      })}
      {activePlayerIndex !== null && (
        <button
          onClick={() => {
            skipTurn();
          }}
        >
          Skip Turn
        </button>
      )}
    </div>
  );
};
