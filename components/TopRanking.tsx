"use client";

import { getTopRanking } from "@/firebase/services/auth_services";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { RankingUser } from "./RankingUser";
import { TopRankingLoading } from "./TopRankingLoading";

export const TopRanking = () => {

  const [topRanking, setTopRanking] = useState<DocumentData[] | undefined>([]);

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

  return (
    <div>
      <div className="flex justify-center gap-2 items-end">
        {
          topRanking?.length! < 1 ? (
            <TopRankingLoading />
          ) : (
            <>
              {
                topRanking && topRanking.map((user, index) => (
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
