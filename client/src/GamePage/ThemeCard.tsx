import React, { useState } from "react";
import { Card } from "../Card";
import { CardType } from "../models/CardType";
import { GameState } from "../models/GameState";
import { getColourFromCardType, getStringFromCardType } from "../util/CardText";

export const ThemeCard = ({ gameState }: { gameState: GameState }) => {
  const [isThemeOpen, setIsThemeOpen] = useState(true);
  const [isThemeRevealed, setIsThemeRevealed] = useState(false);

  return (
    <div
      className="theme-card"
      style={{ top: isThemeOpen ? "50%" : "-4em" }}
      onClick={() => {
        isThemeRevealed && setIsThemeOpen(!isThemeOpen);
      }}
    >
      {isThemeRevealed ? (
        <Card id={gameState && gameState.cards ? gameState.cards[0] : 1} />
      ) : (
        <div
          className="card"
          style={{
            backgroundColor: getColourFromCardType(CardType.Theme),
            boxShadow: "4px 4px 4px 4px #98b4de",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsThemeRevealed(true);
          }}
        >
          <img
            src={`${getStringFromCardType(CardType.Theme)}-text.png`}
            alt={`Theme Card for ${getStringFromCardType(CardType.Theme)}`}
          />
        </div>
      )}
    </div>
  );
};
