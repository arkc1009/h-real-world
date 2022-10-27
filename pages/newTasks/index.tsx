import TaskListItem, { TaskListItemData } from 'components/newTasks/TaskListItem';
import { NextPage } from 'next';
import tw from 'twin.macro';

const TEMP_DATA: TaskListItemData = {
  title: '우산',
  process: '진행중',
  frontman: '한동진',
  contributors: ['홍길동', '김선비', '가나다', '랄라라', '무아효', '효효효', '킹킹킹'],
  deadlineRange: ['2022.10.27', '2022.12.31'],
};

const NewTaskPage: NextPage = () => {
  return (
    <div css={tw`w-full h-full`}>
      <div css={[tw`w-[420px] h-full`, tw`border-r`]}>
        <ul css={tw`w-full pt-8`}>
          <TaskListItem data={TEMP_DATA} />
        </ul>
      </div>
    </div>
  );
};

export default NewTaskPage;
