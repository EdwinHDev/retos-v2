"use client";

import { useState, useEffect } from "react";
import { RadialBarChart, RadialBar } from "recharts";

interface Props {
  score: number;
  position: number;
}

export const RankingProgress = ({ score, position }: Props) => {
  const [mount, setMount] = useState(false);

  const data = [
    {
      name: "score",
      score: score,
      fill: position === 1 ? "#f59e0b" : position === 2 ? "#22c55e" : "#64748b",
    }
  ];

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  function calcularScoreRango(score: number) {
    if (score < 0 ) {
      throw new Error("El score debe ser mayor que 0.");
    }
  
    if (score >= 1 && score <= 19) {
      return ((score - 1) / 18) * (-270 - 90) + 90;
    } else if (score >= 20 && score <= 44) {
      return ((score - 20) / 25) * (-270 - 90) + 90;
    } else if (score >= 45 && score <= 69) {
      return ((score - 45) / 25) * (-270 - 90) + 90;
    } else if (score >= 70 && score <= 99) {
      return ((score - 70) / 30) * (-270 - 90) + 90;
    } else {
      return -270;
    }
  }

  return (
    <RadialBarChart
      width={40}
      height={40}
      innerRadius="126%"
      outerRadius="144%"
      data={data}
      startAngle={90}
      endAngle={calcularScoreRango(score)}
    >
      <RadialBar
        dataKey="score"
      />
    </RadialBarChart>
  );
};
