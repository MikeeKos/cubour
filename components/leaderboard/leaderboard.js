import React from "react";
import Record from "./record";

function LeaderboardPage(props) {
  // console.log(props.seeds);

  const sortedSeeds = [...props.seeds].sort((a, b) => {
    return parseInt(a.level) - parseInt(b.level);
  });

  return (
    <div className="w-full h-screen bg-pageMenu">
      {sortedSeeds.map((el) => (
        <Record key={el._id} level={el.level} leaderboard={el.leaderboard} />
      ))}
    </div>
  );
}

export default LeaderboardPage;
