import { TaskResponse } from '@lib/schema';
import Banner from 'components/Banner';
import Page from 'components/common/Page';
import PageContent from 'components/common/PageContent';
import Task from 'components/Tasks/Task';
import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import tw from 'twin.macro';

const Tasks: NextPage = () => {
  const { data: tasks, error } = useSWR<TaskResponse[]>('/api/tasks');

  // const temp = () => {
  //   return (
  //     <>
  //       <div css={tw`flex items-center gap-2 mt-4`}>
  //         <div>🎤</div>
  //         {task.vocals.map((vocal) => (
  //           <div
  //             key={vocal.id}
  //             css={tw`text-sm flex items-center bg-slate-300 px-1 rounded-md`}
  //           >
  //             {vocal.name}
  //           </div>
  //         ))}
  //       </div>

  //       <div css={tw`flex items-center gap-2 mt-4`}>
  //         <div>🎧</div>
  //         {task.mixers.map((mixer) => (
  //           <div
  //             key={mixer.id}
  //             css={tw`text-sm flex items-center bg-slate-300 px-1 rounded-md`}
  //           >
  //             {mixer.name}
  //           </div>
  //         ))}
  //       </div>

  //       <div css={tw`flex items-center gap-2 mt-4`}>
  //         <div>🎨</div>
  //         {task.drawers.map((drawer) => (
  //           <div
  //             key={drawer.id}
  //             css={tw`text-sm flex items-center bg-slate-300 px-1 rounded-md`}
  //           >
  //             {drawer.name}
  //           </div>
  //         ))}
  //       </div>

  //       <div css={tw`flex items-center gap-2 mt-4`}>
  //         <div>🎬</div>
  //         {task.editers.map((editer) => (
  //           <div
  //             key={editer.id}
  //             css={tw`text-sm flex items-center bg-slate-300 px-1 rounded-md`}
  //           >
  //             {editer.name}
  //           </div>
  //         ))}
  //       </div>

  //       <div css={tw`flex items-center gap-2 mt-4`}>
  //         <div>📺</div>
  //         {task.designers.map((designer) => (
  //           <div
  //             key={designer.id}
  //             css={tw`text-sm flex items-center bg-slate-300 px-1 rounded-md`}
  //           >
  //             {designer.name}
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   );
  // };

  return (
    <Page>
      <Banner visiableImage={false} css={tw`h-[1px]`} />

      <div
        css={[tw`flex flex-col items-center gap-2 mt-8`, tw`xl:flex-row xl:items-end`]}
      >
        <h1 css={tw`text-2xl font-bold`}>마감 관리</h1>
        <h3 css={[tw`text-sm underline`, tw`hover:opacity-70`, tw`xl:text-base`]}>
          <Link href='/'>홈으로 돌아가기</Link>
        </h3>
      </div>

      <PageContent>
        {!tasks && !error
          ? 'loading...'
          : tasks?.map((task) => <Task key={task.id} task={task} />)}
      </PageContent>
    </Page>
  );
};

export default Tasks;
