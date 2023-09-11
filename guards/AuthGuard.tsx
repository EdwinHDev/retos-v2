"use client";

import { AuthContext } from '@/context/auth';
import { Spinner } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useContext, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

export default function AuthGuard({ children }: Props) {

  const { loading, isLogged } = useContext(AuthContext);

  const { push } = useRouter();
  const pathname = usePathname();

  if(loading) {
    return (
      <section className="flex items-center justify-center gap-6 py-8 md:py-10">
        <Spinner
          size="lg"
          color="danger"
        />
      </section>
    )
  }

  if (!isLogged && pathname.includes('/profile')) {
    push('/signin');
    return <div />;
  }

  if (isLogged && !loading) {
    return <>{children}</>;
  }

  return <div />;
}
