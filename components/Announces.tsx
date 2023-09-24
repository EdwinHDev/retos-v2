"use client";

import { AnnouncesContext } from "@/context/announces";
import { IAnnounce } from "@/interfaces/announce";
import { Button, Card, CardBody, Checkbox, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Popover, PopoverContent, PopoverTrigger, useDisclosure } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AnnounceIcon, MailIcon, ViewIcon } from "./icons";
import { AuthContext } from "@/context/auth";
import { viewAnnounce } from "@/firebase/services/announces_services";
import Image from "next/image";

export const Announces = () => {

  const { loading, announces } = useContext(AnnouncesContext);
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const registerNewView = async (id: string, displayName: string, idUser: string, photoURL: string) => {
    try {
      if(displayName) {
        await viewAnnounce(id, displayName, idUser, photoURL);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {
        announces.length > 0 && announces.filter(anno => anno.state === "active").map((announce, index) => (

          index === 0 && (
            <div key={announce.id}>
              <Chip
                startContent={
                  <div className="relative">
                    {
                      user ? (
                        announce?.view.userIdView !== user!.id && (
                          <div />
                        )
                      ) : (
                        <AnnounceIcon width={20} height={20} className="absolute animate-ping fill-warning-500" />
                      )
                    }
                    <AnnounceIcon width={20} height={20} className="fill-warning-500" />
                  </div>
                }
                color="default"
                className="min-w-max cursor-pointer relative"
                onClick={() => {
                  onOpen();
                  registerNewView(announce.id, user?.displayName, user?.id, user?.photoURL);
                }}
              >Nuevo anuncio</Chip>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">{announce.title}</ModalHeader>
                      <ModalBody>
                        <Card>
                          <CardBody>
                            <div className="flex flex-col w-full justify-between gap-6 items">
                              <div>
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
                        <Popover placement="bottom">
                          <PopoverTrigger>
                            <div className="flex justify-center">
                              <ViewIcon width={20} height={20} />
                            </div>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-small font-bold mb-2">Visto por:</div>
                              <div className="flex flex-col gap-2">
                                {
                                  announce.view.length > 0 ? (
                                    announce.view.map(({ userNameView, userIdView, userImageView }: { userNameView: string, userIdView: string, userImageView: string}) => (
                                      <div
                                        key={userIdView}
                                        className="flex gap-1 items-center"
                                      >
                                        <div className="w-5 h-5 rounded-full overflow-hidden">
                                          <Image width={20} height={20} src={userImageView} alt={userNameView} />
                                        </div>
                                        <p className="text-sm text-default-500">{ userNameView }</p>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="text-tiny">Aun nadie ha visto el anuncio</div>
                                  )
                                }
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          )
        ))
      }
    </>
  )
}
