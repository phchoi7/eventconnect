import React, { useState } from "react";
import { PageTitle } from "../../../_start/layout/core";

interface WinnerVote {
  team: string;
  votes: number;
  percentage: string;
}

interface TopScorer {
  id: number;
  name: string;
  votes: number;
  percentage: string;
}

export function GeneralPage() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      teams: ["紅隊", "藍隊"],
      topScorers: [
        { id: 1, name: "紅隊 - 王大力", votes: 40, percentage: "40.0" },
        { id: 2, name: "藍隊 - 李小飛", votes: 60, percentage: "60.0" },
      ],
      winnerVotes: [
        { team: "紅隊", votes: 30, percentage: "30.0" },
        { team: "藍隊", votes: 70, percentage: "70.0" },
      ],
    },
    {
      id: 2,
      teams: ["黃隊", "綠隊"],
      topScorers: [
        { id: 3, name: "黃隊 - 陳美玲", votes: 50, percentage: "50.0" },
        { id: 4, name: "綠隊 - 張小明", votes: 50, percentage: "50.0" },
      ],
      winnerVotes: [
        { team: "黃隊", votes: 40, percentage: "40.0" },
        { team: "綠隊", votes: 60, percentage: "60.0" },
      ],
    },
  ]);

  const handleVote = (
    matchId: number,
    type: "winner" | "scorer",
    id: string | number
  ) => {
    setMatches((prevMatches) =>
      prevMatches.map((match) => {
        if (match.id !== matchId) return match;

        if (type === "winner") {
          const updatedVotes = match.winnerVotes.map((vote) =>
            vote.team === id ? { ...vote, votes: vote.votes + 1 } : { ...vote }
          );
          const totalVotes = updatedVotes.reduce(
            (sum, vote) => sum + vote.votes,
            0
          );
          return {
            ...match,
            winnerVotes: updatedVotes.map((vote) => ({
              ...vote,
              percentage: ((vote.votes / totalVotes) * 100).toFixed(1),
            })),
          };
        } else {
          const updatedVotes = match.topScorers.map((scorer) =>
            scorer.id === id
              ? { ...scorer, votes: scorer.votes + 1 }
              : { ...scorer }
          );
          const totalVotes = updatedVotes.reduce(
            (sum, scorer) => sum + scorer.votes,
            0
          );
          return {
            ...match,
            topScorers: updatedVotes.map((scorer) => ({
              ...scorer,
              percentage: ((scorer.votes / totalVotes) * 100).toFixed(1),
            })),
          };
        }
      })
    );
  };

  return (
    <>
      <PageTitle>投票即將來臨的比賽</PageTitle>
      <div className="container mt-5">
        <h2 className="fw-bold text-center mb-5">投票支持你的比賽預測</h2>

        {matches.map((match) => (
          <div key={match.id} className="card mb-4 shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold mb-3">比賽：{match.teams.join(" VS ")}</h4>

              {/* Vote for Winner */}
              <h5 className="fw-bold">預測比賽勝出隊伍</h5>
              <div className="d-flex justify-content-around my-3">
                {match.winnerVotes.map((vote, index) => (
                  <div key={index} className="text-center">
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() => handleVote(match.id, "winner", vote.team)}
                    >
                      {vote.team}
                    </button>
                    <p className="mt-2">票數：{vote.votes}</p>
                    <p className="text-muted">{vote.percentage || "50.0"}%</p>
                  </div>
                ))}
              </div>

              {/* Vote for Top Scorer */}
              <h5 className="fw-bold">投票：比賽最佳得分手</h5>
              <div className="d-flex justify-content-around my-3">
                {match.topScorers.map((scorer) => (
                  <div key={scorer.id} className="text-center">
                    <button
                      className="btn btn-outline-success w-100"
                      onClick={() => handleVote(match.id, "scorer", scorer.id)}
                    >
                      {scorer.name}
                    </button>
                    <p className="mt-2">票數：{scorer.votes}</p>
                    <p className="text-muted">{scorer.percentage || "50.0"}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
