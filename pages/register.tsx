import { NextPage } from 'next';
import Link from 'next/link';
import tw from 'twin.macro';
import Page from '../components/common/Page';
import PageContent from '../components/common/PageContent';
import RegisterForm from '../components/Form/RegisterForm';

const Register: NextPage = () => {
  return (
    <Page>
      <PageContent>
        <h1 css={tw`text-4xl mb-3`}>Sign up</h1>
        <Link href='/login'>
          <a css={[tw`text-[#5CB85C] text-base cursor-pointer`, tw`hover:underline`]}>
            Have an account?
          </a>
        </Link>

        <RegisterForm />
      </PageContent>
    </Page>
  );
};

export default Register;
