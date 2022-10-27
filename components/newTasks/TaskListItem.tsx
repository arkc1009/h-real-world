import React from 'react';
import tw from 'twin.macro';

export interface TaskListItemData {
  title: string;
  process: string;
  frontman: string;
  contributors: string[];
  deadlineRange: [string, string];
}

interface TaskListItemProps {
  data: TaskListItemData;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
  data: {
    title,
    process,
    frontman,
    contributors,
    deadlineRange: [startDL, endDL],
  },
}) => {
  return (
    <li css={[tw`w-full max-h-[120px] flex flex-col gap-1.5 py-2 px-4`, tw`bg-gray-100`]}>
      <header css={[tw`w-full`, tw`flex justify-between items-center`]}>
        <h3 css={tw`font-medium`}>{title}</h3>
        <span
          css={[
            tw`text-xxs text-slate-600`,
            tw`py-[3px] px-2 bg-[rgba(7, 180, 25, 0.12)] rounded-lg`,
          ]}
        >
          {process}
        </span>
      </header>
      <div css={[tw`w-full`, tw`flex justify-between items-center`]}>
        <p
          css={[
            tw`w-[calc(100% - 150px)] overflow-hidden`,
            tw`text-xxs text-slate-500 whitespace-nowrap overflow-ellipsis`,
          ]}
        >
          <span css={[tw`text-xs text-slate-600 font-medium mr-1`]}>{frontman}</span>
          {contributors.map((contributor) => (
            <span key={contributor} css={tw`mr-[2px]`}>
              {contributor}
            </span>
          ))}
        </p>

        <span css={[tw`text-xxs text-slate-400`]}>
          {startDL} ~ {endDL}
        </span>
      </div>
    </li>
  );
};

export default TaskListItem;
