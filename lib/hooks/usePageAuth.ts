import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePathAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const permissionRoute = async () => {
      if (status === 'unauthenticated') {
        await router.replace('/forbidden');
        return;
      }

      if (!session) {
        return;
      }

      if (session.role !== 'ADMIN') {
        await router.replace('/forbidden');
        return;
      }

      setIsAuth(true);
    };

    permissionRoute();
  }, [session, router, status, setIsAuth]);

  return { isAuth, session, status };
};

export default usePathAuth;
