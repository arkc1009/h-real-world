import { toast } from 'react-toastify';

export const permissionToast = () => {
  toast.error('권한이 없습니다!', {
    autoClose: 1500,
  });
};

export const loginToast = () => {
  toast.warn('로그인이 필요합니다.', { autoClose: 1500 });
};
