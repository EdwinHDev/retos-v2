"use client";

import { getTopRanking } from "@/firebase/services/auth_services";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { RankingUser } from "./RankingUser";
import { TopRankingLoading } from "./TopRankingLoading";

export const TopRanking = () => {

  const [topRanking, setTopRanking] = useState<DocumentData[] | undefined>([]);
  const [orderByFailedUsers, setOrderByFailedUsers] = useState<DocumentData[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRanking = async () => {
      try {
        await getTopRanking(setTopRanking);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
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

    setOrderByFailedUsers(orderByFailed);
  }

  return (
    <div>
      <div className="flex justify-center gap-2 items-end">
        {
          orderByFailedUsers?.length! < 1 ? (
            <TopRankingLoading />
          ) : (
            <>
              {
                orderByFailedUsers && orderByFailedUsers.map((user, index) => (
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
