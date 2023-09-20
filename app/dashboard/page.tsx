"use client";

import { Tabs, Tab, Card, CardBody, Input, Spinner, Button } from "@nextui-org/react";
import { IconSvgProps } from '../../types/index';
import { AnnounceIcon, Logo, LogoRetos } from "@/components/icons";
import { AnnounceForm } from "@/components/AnnounceForm";
import { useContext } from 'react';
import { AuthContext } from "@/context/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const { push } = useRouter();

  const { isLogged, user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <Spinner color="danger" />
      </div>
    )
  }

  if (!isLogged) {
    return (
      <div className="flex flex-col justify-center">
        <Card className="w-full flex justify-center">
          <CardBody>
            <p className="text-center">No puedes entrar a esta pagina sin antes iniciar sesión</p>
          </CardBody>
        </Card>
        <Button
          color="danger"
          variant="shadow"
          size="md"
          className="w-fit mx-auto mt-4"
          onClick={() => push("/")}
        >
          Volver
        </Button>
      </div>
    )
  }

  if (user && user?.role !== "admin") {
    return (
      <div className="flex flex-col justify-center">
        <Card className="w-full flex justify-center">
          <CardBody>
            <p className="text-center">No tienes permisos suficientes para acceder a esta página</p>
          </CardBody>
        </Card>
        <Button
          color="danger"
          variant="shadow"
          size="md"
          className="w-fit mx-auto mt-4"
          onClick={() => push("/")}
        >
          Volver
        </Button>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col items-center">
      <Tabs
        aria-label="Options"
        color="danger"
      >
        <Tab
          key="retos"
          className="max-w-xl w-full"
          title={
            <div className="flex items-center space-x-2">
              <Logo width={20} height={20} />
              <span>Retos grupales</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              En construcción
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="anuncios"
          className="max-w-xl w-full"
          title={
            <div className="flex items-center space-x-2">
              <AnnounceIcon width={20} height={20} />
              <span>Anuncios</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <AnnounceForm />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
