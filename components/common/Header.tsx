import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import tw from 'twin.macro';

const Header: React.FC = () => {
  const router = useRouter();

  const menu = useMemo(
    () => [
      {
        path: '/',
        label: 'Home',
      },
      {
        path: '/login',
        label: 'Sign in',
      },
      {
        path: '/register',
        label: 'Sign up',
      },
    ],
    []
  );

  return (
    <header css={tw`w-full h-14 flex justify-center items-center`}>
      <nav
        css={[
          tw`w-full max-w-6xl flex justify-between items-center px-4`,
          tw`xl:max-w-6xl lg:max-w-4xl md:max-w-2xl`,
        ]}
      >
        <h2 css={tw`text-xl text-[#5CB85C] font-bold`}>conduit</h2>
        <div css={tw`flex gap-4`}>
          {menu.map(({ path, label }) => (
            <Link key={label} href={path}>
              <a
                css={[
                  tw`cursor-pointer opacity-30`,
                  tw`hover:underline hover:opacity-60`,
                  path === router.pathname && tw`opacity-80`,
                ]}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
