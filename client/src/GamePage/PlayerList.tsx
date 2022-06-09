import React from "react";

import "./PlayerList.scss";

interface PlayerListProps {
  players: string[] | null;
  activePlayerIndex: number | null;
  skipTurn: () => void;
}

export const PlayerList = (props: PlayerListProps) => {
  const { players, activePlayerIndex, skipTurn } = props;

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
          className="button-secondary"
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            skipTurn();
          }}
          style={{ marginTop: "8px" }}
        >
          Skip Turn
        </button>
      )}
    </div>
  );
};
