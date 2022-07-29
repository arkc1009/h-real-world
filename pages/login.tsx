import { NextPage } from 'next';
import tw from 'twin.macro';
import Page from '../components/common/Page';
import PageContent from '../components/common/PageContent';
import LoginForm from '../components/Form/LoginForm';

// background-color: #449d44;
// border-color: #419641;

const Login: NextPage = () => {
  return (
    <Page>
      <PageContent>
        <h1 css={tw`text-4xl mb-3`}>Sign in</h1>
        <span css={tw`text-[#5CB85C] text-base`}>Need an account?</span>

        <LoginForm />
      </PageContent>
    </Page>
  );
};

export default Login;
