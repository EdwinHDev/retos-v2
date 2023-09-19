"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, Tooltip } from "@nextui-org/react";
import { RankingProgress } from "./RankingProgress";

interface Retos {
  completed: number;
  failed: number;
  progress: number;
}

interface User {
  displayName?: string;
  score?: number;
  retos?: Retos;
  photoURL?: string;
  position?: number;
}

export const RankingUser = ({ displayName = "Sin retador", score = 0, retos = { completed: 0, failed: 0, progress: 0 }, photoURL = "", position = 0 }: User) => {

  const [showPosition, setShowPosition] = useState(false);
  const [showRetador, setShowRetador] = useState(false);

  const contentStartsRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!contentStartsRef.current?.contains(e.target) && !avatarRef.current?.contains(e.target)
      ) {
        setShowPosition(false);
        setShowRetador(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Tooltip
      delay={200}
      isOpen={showPosition}
      content={
        position === 1 ?
          <div className="text-center"><p>Primer lugar</p><p>Score: <span className="font-semibold">{score}</span></p></div> : position === 2 ?
          <div className="text-center"><p>Segundo lugar</p><p>Score: <span className="font-semibold">{score}</span></p></div> :
          <div className="text-center"><p>Tercer lugar</p><p>Score: <span className="font-semibold">{score}</span></p></div>
        }
      placement="bottom"
      isDisabled={position === 0}
    >
      <div
        className={`w-[60px] bg-default-200 rounded-lg relative ${position === 1 ? "h-16" : position === 2 ? "h-10" : "h-6 -order-1"} `}
        onClick={() => {
          setShowPosition(!showPosition);
          setShowRetador(false);
        }}
        onMouseEnter={() => {
          setShowPosition(true);
          setShowRetador(false);
        }}
        onMouseLeave={() => setShowPosition(false)}
      >
        <Tooltip
          isOpen={showRetador}
          placement="top"
          isDisabled={position === 0}
          content={
            <div>
              <p className="text-center font-semibold text-default-500 text-sm">{displayName}</p>
              {
                score > 0 ? (
                  score >= 100 ? (
                    <p className="text-center font-semibold text-cyan-400">Diamante</p>
                  ) : (
                    score >= 70 ? (
                      <p className="text-center font-semibold text-emerald-400">Platino</p>
                    ) : (
                      score >= 45 ? (
                        <p className="text-center font-semibold text-amber-400">Oro</p>
                      ) : (
                        score >= 20 ? (
                          <p className="text-center font-semibold text-zinc-400">Plata</p>
                        ) : (
                          <p className="text-center font-semibold text-[#ad8865]">Bronce</p>
                        )
                      )
                    )
                  )
                ) : (
                  <p className="text-center font-semibold text-default-300">Sin clasificación</p>
                )
              }
              <div className="flex justify-center divide-x divide-default-200 mt-1">
                <p className="px-2 text-success-500 font-semibold">{retos.completed}</p>
                <p className="px-2 text-danger-500 font-semibold">{retos.failed}</p>
                <p className="px-2 text-warning-500 font-semibold">{retos.progress}</p>
              </div>
            </div>
          }
        >
          <Avatar
            // isBordered
            isFocusable
            src={photoURL}
            size="sm"
            className="absolute -top-10 left-2/4 -translate-x-2/4"
            onClick={() => {
              setShowRetador(!showRetador);
              setShowPosition(false);
            }}
            onMouseEnter={() => {
              setShowRetador(true);
              setShowPosition(false);
            }}
            onMouseLeave={() => setShowRetador(false)}
          />

        </Tooltip>
        {
          position === 1 && (
            <div className="absolute top-[-58px] left-2/4 -translate-x-2/4 z-10">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-amber-500"
              >
                <path d="M20.3502 5.51906L16.3502 8.37906C15.8202 8.75906 15.0602 8.52906 14.8302 7.91906L12.9402 2.87906C12.6202 2.00906 11.3902 2.00906 11.0702 2.87906L9.17022 7.90906C8.94022 8.52906 8.19022 8.75906 7.66022 8.36906L3.66022 5.50906C2.86022 4.94906 1.80022 5.73906 2.13022 6.66906L6.29022 18.3191C6.43022 18.7191 6.81022 18.9791 7.23022 18.9791H16.7602C17.1802 18.9791 17.5602 18.7091 17.7002 18.3191L21.8602 6.66906C22.2002 5.73906 21.1402 4.94906 20.3502 5.51906ZM14.5002 14.7491H9.50022C9.09022 14.7491 8.75022 14.4091 8.75022 13.9991C8.75022 13.5891 9.09022 13.2491 9.50022 13.2491H14.5002C14.9102 13.2491 15.2502 13.5891 15.2502 13.9991C15.2502 14.4091 14.9102 14.7491 14.5002 14.7491Z" />
              </svg>
            </div>
          )
        }
        <div className="h-full flex justify-center items-end py-1 opacity-50">
          {
            position > 0 && new Array(position === 1 ? 3 : position === 2 ? 2 : 1).fill(0).map((element, index) => (
              <svg
                key={index}
                viewBox="0 0 27 28"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-amber-500"
              >
                <path d="M14.9964 4.46479L16.7197 7.84109C16.9557 8.30452 17.5718 8.75778 18.0883 8.83343L21.1615 9.32385C23.1293 9.63357 23.5922 11.0528 22.1988 12.4769L19.8251 14.8891C19.4288 15.2934 19.2039 16.0824 19.3394 16.6335L20.0448 19.5896C20.5994 21.9235 19.3668 22.8423 17.2945 21.6361L14.3997 19.9509C13.8725 19.6429 13.0184 19.6568 12.5032 19.9659L9.63692 21.6889C7.5851 22.9204 6.3353 22.0233 6.85427 19.6831L7.51768 16.7216C7.64155 16.168 7.41474 15.3822 7.01044 14.9859L4.58469 12.6082C3.16937 11.21 3.60993 9.7845 5.56919 9.44128L8.62836 8.90759C9.14479 8.81324 9.7546 8.36297 9.97909 7.8917L11.6505 4.48273C12.5633 2.64645 14.0662 2.63755 14.9964 4.46479Z" />
              </svg>
            ))
          }
        </div>
        <div className="absolute top-[-44px] left-2/4 -translate-x-2/4">
          <RankingProgress score={score} position={position} />
        </div>
      </div>
    </Tooltip>
  )
}
