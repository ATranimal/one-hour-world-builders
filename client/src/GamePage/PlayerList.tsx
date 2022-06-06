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
      <label className="player-count-label">Players</label>
      {players?.map((player, idx) => {
        return (
          <div
            className={
              "player-name" +
              (activePlayerIndex === idx ? " active-player" : "")
            }
            key={idx}
          >
            {player}
          </div>
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
