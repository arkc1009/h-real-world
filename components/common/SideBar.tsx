import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import tw from 'twin.macro';

import TwitterImg from '../../public/images/twitter.png';
import YouTubeImg from '../../public/images/youtube.png';
import InstagramImg from '../../public/images/instagram.png';
import LogoImg from '../../public/images/logo.png';
import Image from 'next/image';

const dropdownAnimate = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'none',
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    display: 'block',
  },
};

interface MenuItem {
  path: string;
  label: React.ReactNode;
}

const SideBar: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [onToggleMenu, setOnToggleMenu] = useState(false);

  const onClickProfile = useCallback(() => {
    setOnToggleMenu((prevState) => !prevState);
  }, []);

  const offToggle = useCallback(() => {
    setOnToggleMenu(false);
  }, []);

  const menu: MenuItem[] = useMemo(
    () => [
      {
        path: '/',
        label: '홈',
      },
      {
        path: '/users',
        label: '멤버',
      },
      {
        path: '/tasks',
        label: '진행중인 작품',
      },
    ],
    []
  );

  const snses: MenuItem[] = useMemo(
    () => [
      {
        path: 'https://twitter.com/world_OnlyOne',
        label: <Image src={TwitterImg} alt='twitter' />,
      },
      {
        path: 'https://www.youtube.com/channel/UC8iW8WOnpnMCBfeG3CgO-lg',
        label: <Image src={YouTubeImg} alt='youtube' />,
      },
      {
        path: 'https://www.instagram.com/world_only.one/',
        label: <Image src={InstagramImg} alt='instagram' />,
      },
    ],
    []
  );

  const onLogout = useCallback(async () => {
    await router.replace('/');
    signOut();
  }, [router]);

  return (
    <nav
      css={[
        tw`relative w-64 h-full flex flex-col py-8 px-6 z-10`,
        tw`bg-[#f9fafa]`,
        tw`shadow-inner`,
      ]}
    >
      <div
        onClick={onClickProfile}
        css={[tw`p-2 rounded-lg relative`, tw`hover:bg-gray-200`, tw`cursor-pointer`]}
      >
        {session && session.user && (
          <div css={tw`flex items-center gap-2`}>
            <Image
              src={session.user.image || ''}
              alt='profile image'
              css={[tw`rounded-full shadow-md cursor-pointer`]}
              width={36}
              height={36}
            />

            <div css={tw`ml-2`}>
              <div css={tw`text-sm font-semibold`}>{session.user.name}</div>
              <div css={tw`text-xs text-slate-500`}>부서</div>
            </div>

            <motion.div
              variants={dropdownAnimate}
              initial='exit'
              animate={onToggleMenu ? 'enter' : 'exit'}
              onMouseLeave={offToggle}
              css={[
                tw`absolute w-full bg-white shadow-lg top-16 left-0 p-2`,
                tw`rounded-md`,
              ]}
            >
              <div css={tw`w-full flex flex-col items-start`}>
                <div
                  css={[
                    tw`w-full flex flex-col gap-1 p-2 mb-2`,
                    tw`border-b rounded`,
                    tw`hover:bg-gray-100`,
                  ]}
                >
                  <div css={tw`text-sm text-gray-700 font-semibold`}>내 프로필</div>
                  <div css={tw`text-xs text-slate-500`}>
                    <div>{session.user.email}</div>
                    <div>개발</div>
                  </div>
                </div>

                <button
                  type='button'
                  css={[
                    tw`w-full p-2 text-start`,
                    tw`text-sm text-red-500 font-semibold`,
                    tw`hover:opacity-75 hover:bg-gray-100`,
                  ]}
                  onClick={onLogout}
                >
                  로그아웃
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {!session && (
          <button
            type='button'
            css={[tw`text-sm text-green-500 font-semibold px-2`]}
            onClick={() => signIn('google')}
          >
            로그인 하기
          </button>
        )}
      </div>

      <ul css={[tw`my-4 pb-4`, tw`text-slate-600`, tw`border-b`]}>
        <li
          css={[
            tw`flex items-center justify-between py-2 px-4`,
            tw`text-sm font-semibold`,
            tw`rounded-lg`,
            tw`cursor-pointer`,
            tw`hover:bg-gray-100`,
          ]}
        >
          해야하는 마감
          <div
            css={[
              tw`flex items-center justify-center px-2 rounded-xl`,
              tw`bg-red-500 text-xs text-white`,
            ]}
          >
            5
          </div>
        </li>
      </ul>

      <ul css={[tw`flex flex-col gap-2 mb-4 pb-4`, tw`text-slate-500`]}>
        {menu.map(({ path, label }) => (
          <li
            key={path}
            onClick={() => router.push(path)}
            css={[
              tw`relative flex items-center justify-between py-2 px-4`,
              tw`text-sm font-semibold`,
              tw`rounded-lg`,
              tw`cursor-pointer`,
              tw`hover:bg-gray-100`,
              router.pathname === path && tw`text-slate-800 bg-gray-100`,
            ]}
          >
            <div
              css={[
                tw`w-[4px] h-full`,
                tw`absolute top-0 left-0`,
                tw`rounded-l-lg`,
                router.pathname === path && tw`bg-blue-400`,
              ]}
            />
            <span css={router.pathname === path && tw`text-blue-500`}>{label}</span>
          </li>
        ))}
      </ul>

      <div
        css={[
          tw`w-full flex justify-between px-4`,
          tw`absolute bottom-0 left-0`,
          tw`border-t`,
        ]}
      >
        <Image
          src={LogoImg}
          alt='logo and route to home'
          width={48}
          height={48}
          css={tw`cursor-pointer object-contain`}
          onClick={() => router.push('/')}
        />

        <div css={tw`flex justify-center items-center gap-4 py-4`}>
          {snses.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              target='_blank'
              css={[
                tw`w-6 h-6`,
                tw`cursor-pointer`,
                tw`hover:underline hover:opacity-60`,
              ]}
              rel='noreferrer'
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
