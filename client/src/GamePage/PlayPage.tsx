import React, { useEffect, useState } from "react";
import { GameState } from "../models/GameState";
import { Card } from "../Card";
import { isYourTurn } from "../util/Turn";
import { SocketEmitters } from "../models/SocketEmitters";
import { CardType } from "../models/CardType";
import { RoomInfo } from "./RoomInfo";
import { DrawPile } from "./DrawPile";

import "./PlayPage.scss";
import { getCardTypeFromID } from "../util/CardText";
import { ThemeCard } from "./ThemeCard";

interface PlayPageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
  roomName: string;
  userName: string;
  setRulesOpen: any;
}

export const PlayPage = (props: PlayPageProps) => {
  const { gameState, socketEmitters, roomName, userName, setRulesOpen } = props;

  const skipTurn = () => {
    socketEmitters.nextTurn();
  };

  useEffect(() => {
    // Store room ID for reloads
    localStorage.setItem("lastRoomJoined", roomName);
    localStorage.setItem("lastUserName", userName);

    if (localStorage.getItem("readRules") !== "true") {
      setRulesOpen(true);
      localStorage.setItem("readRules", "true");
    }
  }, []);

  return (
    <div className="game">
      <RoomInfo gameState={gameState} skipTurn={skipTurn} roomName={roomName} />

      <div className="game-board">
        <ThemeCard gameState={gameState} />

        <div className="card-buttons">
          <div className="card-rows">
            <DrawPile
              cardType={CardType.Event}
              socketEmitters={socketEmitters}
              disabled={!isYourTurn(gameState, userName)}
            />
            {gameState?.cards?.map((card) => {
              if (getCardTypeFromID(card) === CardType.Event) {
                return <Card key={card} id={card} />;
              }
            })}
          </div>
          <div className="card-rows">
            <DrawPile
              cardType={CardType.Thing}
              socketEmitters={socketEmitters}
              disabled={!isYourTurn(gameState, userName)}
            />
            {gameState?.cards?.map((card) => {
              if (getCardTypeFromID(card) === CardType.Thing) {
                return <Card key={card} id={card} />;
              }
            })}
          </div>
          <div className="card-rows">
            <DrawPile
              cardType={CardType.Inhabitant}
              socketEmitters={socketEmitters}
              disabled={!isYourTurn(gameState, userName)}
            />
            {gameState?.cards?.map((card) => {
              if (getCardTypeFromID(card) === CardType.Inhabitant) {
                return <Card key={card} id={card} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
