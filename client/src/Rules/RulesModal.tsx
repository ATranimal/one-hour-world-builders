import React, { useState } from "react";
import "./RulesModal.scss";

const RULES_TEXT = [
  <>
    <p>Welcome to the digital version of One Hour Worldbuilders!</p>
    <p>
      If you enjoy this app and want to support it, please consider buying a
      <a href="https://kaelandm.itch.io/one-hour-worldbuilders">
        {" "}
        print-and-play{" "}
      </a>
      or{" "}
      <a href="https://kaelanbuildsworlds.gumroad.com/l/1hwb-irl">
        {" "}
        physical copy.
      </a>
    </p>
    <p>Click below to read the rules or close this window to get started.</p>
  </>,
  <>
    <p>
      In this game you take turns drawing cards and responding to their prompts.
    </p>
    <p>
      There are four types of cards: <strong>Theme</strong>,{" "}
      <strong>event</strong>, <strong>thing</strong>, and{" "}
      <strong>inhabitant</strong>.
    </p>
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: 0,
          width: "20%",
          paddingBottom: "20%",
          backgroundColor: "#9fc4de",
        }}
      >
        <div>Theme</div>
      </div>
      <div
        style={{
          height: 0,
          width: "20%",
          paddingBottom: "20%",
          backgroundColor: "#c8e6ce",
        }}
      >
        <div>Event</div>
      </div>
      <div
        style={{
          height: 0,
          width: "20%",
          paddingBottom: "20%",
          backgroundColor: "#f7f1bf",
        }}
      >
        <div>Thing</div>
      </div>
      <div
        style={{
          height: 0,
          width: "20%",
          paddingBottom: "20%",
          backgroundColor: "#f2acac",
        }}
      >
        <div>Inhabitant</div>
      </div>
    </div>
  </>,
  <>
    <p>
      At the beginning of the game, you will draw one <strong>theme</strong>{" "}
      card.
    </p>

    <p>
      Start with the player who has built the most worlds. This player will read
      and answer the prompt on the theme card.
    </p>

    <p>Let's call them the Speaker.</p>
  </>,
  <>
    <p>
      Now, find the player order. You can see it in the top-right corner of your
      window.
    </p>

    <p>
      Starting with the player just below the Speaker, each player will ask them
      one question about the Speaker's answer.
    </p>

    <p>
      <strong>BUT: this must be phrased as a yes-or-no question!</strong>
    </p>
  </>,
  <>
    <p>The Speaker can answer however they like.</p>
    <p>
      If they say <strong>yes</strong>, they must expand on what this means. If
      they say <strong>no</strong>, they must provide an alternative.
    </p>
    A good yes-or-no question suggests an interesting new direction for the
    world while also leaving room for the Speaker to clarify their idea.
  </>,
  <>
    <p>
      Once everyone has asked the Speaker a question, click on the theme card to
      move it to the top of the screen.
    </p>

    <p>
      The next player in the player order will now draw either an{" "}
      <strong>event</strong>, <strong>thing</strong> or{" "}
      <strong>inhabitant</strong> card. Read the prompt, answer it, and let
      everyone ask a question, just like you did with the theme card.
    </p>
  </>,
  <>
    <p>
      <strong>And that's it!</strong>
    </p>

    <p>
      By the time you finish the game, make sure you have drawn at{" "}
      <strong>least one of each type of card.</strong>
    </p>

    <p>
      Play as long as you like, or until your word feels vivid and complete.
    </p>

    <p>
      Click the <strong>X</strong> at the top-right corner of this window to
      close it. You can return to this tutorial anytime by clicking the Rules
      tab at the bottom-right corner.
    </p>

    <p>
      If you're struggling to come up with <strong>good questions</strong>, the
      next three pages of this tutorial show some examples.
    </p>
  </>,
  <>
    <p>
      <strong>Question Example #1</strong>
    </p>
    <p>
      The Speaker describes a sword that was used during the Great War. The
      sword itself was actually rather plain, but it has come to be remembered
      as the mythical power that ended the war. It was owned by a prominent
      family for a number of centuries but has since been lost.
    </p>

    <p>
      <strong>Bad question: Is the sword old?</strong>
    </p>
    <p>
      This question is too open-ended - what does “old” really mean, anyways? -
      and doesn’t suggest anything interesting about the sword.
    </p>

    <p>
      <strong>
        Good question: After the Great War, was the sword lost to everyone, or
        just to the historical record? Did anyone encounter it not realizing its
        importance?
      </strong>
    </p>
    <p>
      This question gives two options, both of which lead to interesting new
      directions for the world: either the sword was encountered by someone
      once, suggesting an interesting story or legend, or the sword was utterly
      lost to everyone, suggesting that the legend of its use in the Great War
      was powerful enough to endure even though no one saw it.
    </p>
  </>,
  <>
    <p>
      <strong>Question Example #2:</strong>
    </p>
    <p>
      The Speaker describes John Smith, a hero who made a great sacrifice to
      save the land.
    </p>

    <p>
      <strong>Bad question: Did John Smith have a girlfriend?</strong>
    </p>
    <p>
      This question doesn’t suggest anything new about John Smith or how he fit
      into the world. It’s also too specific without giving any new information.
    </p>

    <p>
      <strong>
        Good question: Was John Smith mourned when he made his sacrifice?
      </strong>
    </p>
    <p>
      This question asks for the same information - if John Smith was in love,
      his lover would have mourned him when he died. However, it also gives the
      Speaker room to expand on others in John’s life, including his family,
      friends, children, peers or even his enemies.
    </p>
  </>,
  <>
    <p>
      <strong>Question Example #3</strong>
    </p>
    The Speaker describes the Battle for the Bay, a decisive battle in the civil
    war that is commemorated every year.
    <p>
      <strong>
        Bad Question: Was the Battle for the Bay fought on the water or the
        land?
      </strong>
    </p>
    Why does it matter where it was fought? How does that impact the people who
    commemorate it now? This question doesn’t suggest very much new information
    about the world and doesn’t incorporate very much from the Speaker’s initial
    answer.
    <p>
      <strong>
        Good Question: Do the people who commemorate it know that the Battle for
        the Bay was an unfair fight?
      </strong>
    </p>
    This question does several things. First, it introduces new information to
    the world and forces the drawer to incorporate it into their description.
    Second, it gives the Speaker the chance to expand on the commemoration and
    be more specific on who celebrates this aspect of the world’s history.
    Finally, it suggests an ethical system - what does “fair” mean for people in
    this world? What about for the combatants? What kind of society glorifies an
    unfair fight?
  </>,
];

export const RulesModal = ({
  rulesOpen,
  setRulesOpen,
}: {
  rulesOpen: boolean;
  setRulesOpen: any;
}) => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div className={`modal is-active`}>
      <div className="modal-background"></div>
      <div
        className="modal-content"
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "32px",
          fontSize: "20px",
        }}
      >
        {RULES_TEXT[pageNumber]}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {pageNumber !== 0 ? (
            <a
              className="pagination-previous"
              onClick={() => {
                if (pageNumber > 0) setPageNumber(pageNumber - 1);
              }}
            >
              Previous
            </a>
          ) : (
            <div></div>
          )}
          {pageNumber < RULES_TEXT.length - 1 ? (
            <a
              className="pagination-next disabled"
              onClick={() => {
                if (pageNumber < RULES_TEXT.length - 1)
                  setPageNumber(pageNumber + 1);
              }}
            >
              Next page
            </a>
          ) : (
            <a
              className="pagination-next disabled"
              onClick={() => {
                setRulesOpen(false);
              }}
            >
              Close
            </a>
          )}
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {
          setRulesOpen(false);
        }}
      ></button>
    </div>
  );
};
