import type { NextPage } from 'next';
import tw, { css } from 'twin.macro';
import Banner from '../components/Banner';
import Page from '../components/common/Page';
import PageContent from '../components/common/PageContent';

const Home: NextPage = () => {
  // const { data: session } = useSession();
  // const [tasks, setTasks] = useState<TaskResponse[]>();

  return (
    <Page>
      <Banner />

      <PageContent>
        <div css={tw`w-full flex justify-center gap-8`}>
          HOME!
          {/* <div css={tw`w-3/4 flex flex-col gap-5`}>
            {tasks?.map((task) => (
              <div key={task.id}>
                <h2 css={tw`text-2xl font-semibold`}>{task.title}</h2>
                <div>
                  {task.members.map((member) => (
                    <span key={member.id} css={tw`ml-2`}>
                      {member.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            css={[
              tw`w-1/4 bg-[#f3f3f3] p-2 rounded-md`,
              css`
                height: max-content;
              `,
            ]}
          ></div> */}
        </div>
      </PageContent>
    </Page>
  );
};

export default Home;
