import { loginToast, permissionToast } from '@lib/helpers/toastManage';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePrivate = () => {
  const [pageLoading, setPageLoading] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setPageLoading(true);

    if (status === 'unauthenticated') {
      router.push('/');
      setPageLoading(false);
      loginToast();

      return;
    }

    if (!session) {
      return;
    }

    if (session.role !== 'ADMIN') {
      router.push('/');
      setPageLoading(false);
      permissionToast();

      return;
    }

    setPageLoading(false);
  }, [session, router, status]);

  return { pageLoading, setPageLoading, session, status };
};

export default usePrivate;
