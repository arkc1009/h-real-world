import { loginToast, permissionToast } from '@lib/helpers/toastManage';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePathAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const permissionRoute = () => {
      if (status === 'unauthenticated') {
        router.replace('/forbidden').then(() => {
          loginToast();
        });

        return;
      }

      if (!session) {
        return;
      }

      if (session.role !== 'ADMIN') {
        router.replace('/forbidden').then(() => {
          permissionToast();
        });

        return;
      }

      setIsAuth(true);
    };

    permissionRoute();
  }, [session, router, status, setIsAuth]);

  return { isAuth, session, status };
};

export default usePathAuth;
