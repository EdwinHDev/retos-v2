"use client";

import { Avatar } from "@nextui-org/react";

export const TopRankingLoading = () => {


  return (
    <div className="flex justify-center gap-2 items-end">
      <div className="w-[60px] h-6 bg-default-200 rounded-lg relative animate-pulse">
        <Avatar
          isBordered
          isFocusable
          color="default"
          src=""
          size="sm"
          className="absolute -top-10 left-2/4 -translate-x-2/4 animate-pulse"
        />
      </div>

      <div className="w-[60px] h-16 bg-default-200 rounded-lg relative animate-pulse">

        <Avatar
          isBordered
          isFocusable
          color="default"
          src=""
          size="sm"
          className="absolute -top-10 left-2/4 -translate-x-2/4 animate-pulse"
        />
        
      </div>
      <div className="w-[60px] h-10 bg-default-200 rounded-lg relative animate-pulse">

        <Avatar
          isBordered
          isFocusable
          color="default"
          src=""
          size="sm"
          className="absolute -top-10 left-2/4 -translate-x-2/4"
        />
        
      </div>
    </div>
  )
}
