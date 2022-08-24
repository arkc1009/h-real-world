import getDateDiff from '@lib/helpers/getDateDiff';
import { TaskResponse } from '@lib/schema';
import { Progress } from '@prisma/client';
import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import tw, { css } from 'twin.macro';

interface TaskProps {
  task: TaskResponse;
}

const labelColor = {
  READY: tw`bg-onlyOne3 bg-opacity-70`,
  GOING: tw`bg-onlyOne1 bg-opacity-90`,
  END: tw`bg-slate-300`,
};

const cardBorder = {
  READY: tw`border-2 border-gray-600 border-dashed`,
  GOING: tw`ring-2 ring-gray-600`,
  END: tw`ring-0`,
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const { isEndRecode, isEndMix, isEndDraw, isEndMovie, isEndDesign } = task;

  const progressArr = useMemo(
    () => [isEndRecode, isEndMix, isEndDraw, isEndMovie, isEndDesign],
    [isEndRecode, isEndMix, isEndDraw, isEndMovie, isEndDesign]
  );

  const isEnds = useMemo(() => progressArr.filter((pro) => pro), [progressArr]);
  const progress = useMemo(
    () => ((isEnds.length / progressArr.length) * 100).toFixed(0),
    [isEnds.length, progressArr.length]
  );

  const dateDiff = useMemo(
    () => Math.floor(getDateDiff(new Date(), new Date(task.deadline))),
    [task.deadline]
  );

  useEffect(() => {
    console.log(dateDiff);
  }, [dateDiff]);

  return (
    <motion.div
      css={[
        cardBorder[task.progress],
        tw`flex flex-col w-96 rounded-md`,
        tw`select-none cursor-pointer`,
        task.progress === Progress.END && tw`opacity-50`,
      ]}
      whileHover={{ y: -5 }}
    >
      <div css={[labelColor[task.progress], tw`h-6 rounded-t-md`]}></div>

      <div css={tw`p-4`}>
        <div css={tw`flex items-center gap-2`}>
          <h3 css={tw`text-xl font-semibold`}>{task.title}</h3>
          <p css={[tw`text-sm text-gray-500`, dateDiff <= 3 && tw`text-red-400`]}>
            ~ {task.deadline.slice(0, 10)}
          </p>
          {dateDiff <= 3 && <p css={tw`text-xs text-red-300`}>(마감 기한 임박!!)</p>}
        </div>

        <p css={tw`text-sm`}>{task.content}</p>

        <div
          css={[tw`w-full h-4 text-center relative mt-4`, tw`bg-gray-300 rounded-full`]}
        >
          <div css={tw`text-xs`}>{progress}%</div>
          <div
            css={[
              tw`w-full h-full absolute top-0 rounded-full`,
              tw`bg-gradient-to-r from-onlyOne2 to-onlyOne1`,
              css`
                width: ${progress}%;
              `,
            ]}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Task;
