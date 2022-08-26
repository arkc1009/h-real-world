import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import tw from 'twin.macro';

import TwitterImg from '../../public/images/twitter.png';
import YouTubeImg from '../../public/images/youtube.png';
import InstagramImg from '../../public/images/instagram.png';
import LogoImg from '../../public/images/logo.png';
import Image from 'next/image';

const Header: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [onToggleMenu, setOnToggleMenu] = useState(false);

  const onClickProfile = useCallback(() => {
    setOnToggleMenu((prevState) => !prevState);
  }, []);

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

  const menu = useMemo(
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
    <header css={tw`w-full h-14 flex justify-center items-center z-10`}>
      <nav
        css={[
          tw`w-full max-w-6xl flex justify-between items-center px-4`,
          tw`xl:max-w-6xl lg:max-w-4xl md:max-w-2xl`,
        ]}
      >
        <div css={[tw`hidden gap-4`, tw`md:flex`]}>
          {menu.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              target='_blank'
              css={[tw`w-7`, tw`cursor-pointer`, tw`hover:underline hover:opacity-60`]}
              rel='noreferrer'
            >
              {label}
            </a>
          ))}
        </div>

        <div css={tw`w-16 h-16`}>
          {router.pathname !== '/' && (
            <Image
              src={LogoImg}
              alt='logo and route to home'
              css={tw`cursor-pointer`}
              onClick={() => router.push('/')}
            />
          )}
        </div>

        <div css={tw`flex items-center gap-4`}>
          {session && session.user && (
            <div
              css={tw`flex items-center gap-2 relative`}
              onMouseLeave={() => setOnToggleMenu(false)}
            >
              <Image
                src={session.user.image || ''}
                alt='profile image'
                css={[tw`rounded-full shadow-md cursor-pointer`]}
                width={36}
                height={36}
                onClick={onClickProfile}
              />

              <motion.div
                variants={dropdownAnimate}
                initial='exit'
                animate={onToggleMenu ? 'enter' : 'exit'}
                css={[
                  tw`absolute w-max bg-white shadow-lg top-10 right-1 py-2 px-4`,
                  tw`rounded-md`,
                ]}
              >
                <div css={tw`flex flex-col items-start py-4`}>
                  <div css={[tw`text-sm font-semibold`, tw`border-b pb-2 mb-2`]}>
                    {session.user.name}
                  </div>
                  <button
                    type='button'
                    css={[tw`text-sm`, tw`hover:opacity-75`]}
                    onClick={onLogout}
                  >
                    로그아웃
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {!session && (
            <button type='button' css={tw`text-sm`} onClick={() => signIn('google')}>
              로그인 하기
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
