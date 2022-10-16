import tw, { css } from 'twin.macro';

const scrollStyleBase = css`
  @supports (overflow: overlay) {
    overflow: overlay;
  }
  overflow: auto;

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    ${tw`bg-gray-400 bg-opacity-70`}
    background-clip: padding-box;
    border: 4px solid transparent;
  }

  &::-webkit-scrollbar-track {
    display: none;
    border-radius: 15px;
    background-color: grey;
  }
`;

const scrollStyle = {
  initial: scrollStyleBase,
  hover: [
    scrollStyleBase,
    css`
      &::-webkit-scrollbar-thumb {
        ${tw`bg-opacity-0`}
      }

      &:hover::-webkit-scrollbar-thumb {
        ${tw`bg-opacity-70`}
      }
    `,
  ],
};

export default scrollStyle;
