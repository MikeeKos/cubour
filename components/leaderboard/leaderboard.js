import React from "react";
import Record from "./record";
import SideAction from "../ui/side-action";
import {
  square,
  cubeSVG,
  tesseractSVG,
  fireSVG,
  knifeSVG,
  skullSVG,
} from "../../SVG/leaderboard";

function LeaderboardPage(props) {
  const sortedSeeds = [...props.seeds].sort((a, b) => {
    return parseInt(a.level) - parseInt(b.level);
  });

  return (
    <div className="w-full h-full bg-pageMenu relative">
      <div className="w-full h-full absolute overflow-hidden">
        <SideAction position={1} theme={"dark"} goBackPath={"/"} />
      </div>
      {sortedSeeds.map((el) => {
        if (el.level <= 3) {
          return (
            <Record
              key={el._id}
              level={el.level}
              leaderboard={el.leaderboard}
              id={el._id}
              difficultyName={"BEGINNER"}
              difficultyIcon={square}
            />
          );
        } else {
          return null;
        }
      })}
      {sortedSeeds.map((el) => {
        if (el.level > 3 && el.level <= 6) {
          return (
            <Record
              key={el._id}
              level={el.level}
              leaderboard={el.leaderboard}
              id={el._id}
              difficultyName={"EASY"}
              difficultyIcon={cubeSVG}
            />
          );
        } else {
          return null;
        }
      })}
      {sortedSeeds.map((el) => {
        if (el.level > 6 && el.level <= 9) {
          return (
            <Record
              key={el._id}
              level={el.level}
              leaderboard={el.leaderboard}
              id={el._id}
              difficultyName={"MEDIUM"}
              difficultyIcon={tesseractSVG}
            />
          );
        } else {
          return null;
        }
      })}
      {sortedSeeds.map((el) => {
        if (el.level > 9 && el.level <= 12) {
          return (
            <Record
              key={el._id}
              level={el.level}
              leaderboard={el.leaderboard}
              id={el._id}
              difficultyName={"ADVANCED"}
              difficultyIcon={fireSVG}
            />
          );
        } else {
          return null;
        }
      })}
      {sortedSeeds.map((el) => {
        if (el.level > 12 && el.level <= 15) {
          return (
            <Record
              key={el._id}
              level={el.level}
              leaderboard={el.leaderboard}
              id={el._id}
              difficultyName={"EXPERT"}
              difficultyIcon={knifeSVG}
            />
          );
        } else {
          return null;
        }
      })}
      {sortedSeeds.map((el) => {
        if (el.level > 15 && el.level <= 18) {
          return (
            <Record
              key={el._id}
              level={el.level}
              leaderboard={el.leaderboard}
              id={el._id}
              difficultyName={"CHAMPION"}
              difficultyIcon={skullSVG}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default LeaderboardPage;
