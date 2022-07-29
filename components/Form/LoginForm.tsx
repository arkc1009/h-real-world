import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { motion, Variant } from 'framer-motion';
import tw from 'twin.macro';

interface FormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = useCallback(
    (data) => console.log('submit Data!', data),
    []
  );

  return (
    <form css={tw`w-full flex flex-col gap-4 mt-5`} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: true,
          // eslint-disable-next-line no-useless-escape
          pattern: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        })}
        type='email'
        placeholder='Email'
        css={[
          tw`py-3 px-6 outline-none`,
          tw`text-xl`,
          tw`ring-1 ring-[#dddddd] rounded-sm`,
          tw`focus:ring-sky-500`,
        ]}
      />
      <input
        {...register('password', { required: true })}
        type='password'
        placeholder='Password'
        css={[
          tw`py-3 px-6 outline-none`,
          tw`text-xl`,
          tw`ring-1 ring-[#dddddd] rounded-sm`,
          tw`focus:ring-sky-500`,
        ]}
      />

      <button
        type='submit'
        css={[
          tw`text-lg text-white place-self-end`,
          tw`bg-[#5CB85C] ring-1 ring-[#5CB85C] py-3 px-5 rounded`,
          tw`hover:bg-[#449d44] hover:ring-[#419641]`,
        ]}
      >
        <span css={tw`block -mt-1`}>Sign in</span>
      </button>

      <div css={tw`flex flex-col gap-2`}>
        {errors.email?.type === 'required' && (
          <div css={tw`flex items-center text-sm text-red-700 font-semibold`}>
            <motion.div
              animate={{ opacity: [0, 1], scale: [0, 1] }}
              transition={{ delay: 0.15 }}
              css={tw`w-3 h-3 ring-2 ring-red-500 rounded-full mr-2`}
            />
            <motion.span animate={{ opacity: [0, 1] }} transition={{ delay: 0.2 }}>
              이메일에는 공백이 올 수 없습니다.
            </motion.span>
          </div>
        )}
        {errors.password?.type === 'required' && (
          <div css={tw`flex items-center text-sm text-red-700 font-semibold`}>
            <motion.div
              animate={{ opacity: [0, 1], scale: [0, 1] }}
              transition={{ delay: 0.15 }}
              css={tw`w-3 h-3 ring-2 ring-red-500 rounded-full mr-2`}
            />
            <motion.span animate={{ opacity: [0, 1] }} transition={{ delay: 0.2 }}>
              비밀번호에는 공백이 올 수 없습니다.
            </motion.span>
          </div>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
