"use client";

import { getTopRanking } from "@/firebase/services/auth_services";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { RankingUser } from "./RankingUser";
import { TopRankingLoading } from "./TopRankingLoading";

export const TopRanking = () => {

  const [topRanking, setTopRanking] = useState<DocumentData[] | undefined>([]);
  const [orderByScoreUsers, setOrderByScoreUsers] = useState<DocumentData[] | undefined>([]);

  useEffect(() => {
    const getRanking = async () => {
      try {
        await getTopRanking(setTopRanking);
      } catch (error) {
        console.log(error);
      }
    }
    getRanking();
  }, []);

  useEffect(() => {
    if (topRanking && topRanking.length > 0) {
      const orderByName = topRanking!.sort(function (a, b) {
        var displayNameA = a.displayName.toUpperCase();
        var displayNameB = b.displayName.toUpperCase();
        if (displayNameA < displayNameB) {
          return -1;
        }
        if (displayNameA > displayNameB) {
          return 1;
        }
        return 0;
      });
      orderByFailed(orderByName);
    }
  }, [topRanking]);

  const orderByFailed = (users: DocumentData[]) => {
    const orderByFailed = users.sort(function (a, b) {
      var failedA = a.retos.failed;
      var failedB = b.retos.failed;

      if (failedA === 0 && failedB !== 0) {
        return -1;
      } else if (failedA !== 0 && failedB === 0) {
        return 1;
      } else {
        return failedA - failedB;
      }
    });
    orderByScore(orderByFailed);
  }

  const orderByScore = (users: DocumentData[]) => {
    const orderByScore = users.sort(function (a, b) {
      var scoreA = a.score;
      var scoreB = b.score;
      var failedA = a.retos.failed;
      var failedB = b.retos.failed;

      if (failedA !== failedB) {
        return failedA - failedB;
      }

      return scoreB - scoreA;
    });
    setOrderByScoreUsers(orderByScore);
  }

  return (
    <div>
      <div className="flex justify-center gap-2 items-end">
        {
          orderByScoreUsers?.length! < 1 ? (
            <TopRankingLoading />
          ) : (
            <>
              {
                orderByScoreUsers && orderByScoreUsers.map((user, index) => (
                  user.score < 1 ? (
                    <RankingUser
                      key={user.id}
                      position={index + 1}
                    />
                  ) : (
                    <RankingUser
                      key={user.id}
                      displayName={user.displayName}
                      photoURL={user.photoURL}
                      retos={user.retos}
                      score={user.score}
                      position={(index + 1)}
                    />
                  )
                ))
              }
            </>
          )
        }
      </div>
      <div>
        <h2 className="text-center text-default-400 font-semibold mt-2">Top Ranking</h2>
      </div>
    </div>
  )
}
