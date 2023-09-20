"use client";

import { AnnouncesContext } from "@/context/announces";
import { IAnnounce } from "@/interfaces/announce";
import { Button, Card, CardBody, Checkbox, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AnnounceIcon, MailIcon } from "./icons";

export const Announces = () => {

  const { loading, announces } = useContext(AnnouncesContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {
        announces.length > 0 && announces.filter(announce => announce.state === "active").map((announce, index) => (

          index === 0 && (
            <div key={announce.id}>
              <Chip
                startContent={
                  <div className="relative">
                    <AnnounceIcon width={20} height={20} className="absolute animate-ping fill-warning-500" />
                    <AnnounceIcon width={20} height={20} className="fill-warning-500" />
                  </div>
                }
                color="default"
                className="min-w-max cursor-pointer relative"
                onClick={onOpen}
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
