"use client";

import { AnnouncesContext } from "@/context/announces";
import { IAnnounce } from "@/interfaces/announce";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AnnounceIcon } from "./icons";

export const Announces = () => {

  const { loading, announces } = useContext(AnnouncesContext);

  return (
    <div className="w-full relative">
      {
        announces.length > 0 && announces.filter(announce => announce.state === "active").map((announce, index) => (

          index === 0 && (
            <div key={announce.id} className="mb-20">
              <div className="absolute -top-4 left-2/4 -translate-x-2/4 z-10">
                <Chip
                  startContent={<AnnounceIcon width={20} height={20} />}
                  color="default"
                  className="min-w-max"
                >Nuevo anuncio</Chip>
              </div>
              <Card>
                <CardBody>
                  <div className="flex flex-col sm:flex-row w-full justify-between gap-6">
                    <div>
                      <h3 className="text-default-600 text-lg font-semibold">{announce.title}</h3>
                      <p className="text-default-500">{announce.description}</p>
                      {
                        announce.rules !== "" && (
                          <div className="flex flex-col mt-2">
                            <p className="text-default-600 font-semibold mb-2">Reglas:</p>
                            {
                              announce.rules.split("-").map((rule: string, index: number) => (
                                rule.length > 0 && (
                                  <p
                                    key={index}
                                    className="text-default-500"
                                  >- {rule}</p>
                                )
                              ))
                            }
                          </div>
                        )
                      }
                    </div>
                    {
                      announce.reward !== "" && (
                        <div className="bg-default-100 p-6 flex justify-center items-center rounded-lg">
                          <h3 className="min-w-max text-2xl font-semibold">{announce.reward}</h3>
                        </div>
                      )
                    }
                  </div>
                </CardBody>
              </Card>
            </div>
          )


        ))
      }
    </div>
  )
}
