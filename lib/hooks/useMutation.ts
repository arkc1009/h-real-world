import { BASE_API_URL } from '@lib/fetchApi';
import { useState } from 'react';

interface MutataionState {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}

type MutationFn = (data: any) => void;

const useMutation = (url: string): [MutationFn, MutataionState] => {
  const [state, setState] = useState<MutataionState>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const mutation: MutationFn = (data) => {
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch(`${BASE_API_URL}${url}`, {
      method: 'POST', // *GET, POST, PUT, DELETE 등
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    })
      .then((res) => res.json())
      .then((json) => {
        setState((prevState) => ({ ...prevState, data: json }));
      })
      .catch((error) => setState((prevState) => ({ ...prevState, error })))
      .finally(() => setState((prevState) => ({ ...prevState, loading: false })));
  };

  return [mutation, state];
};

export default useMutation;
