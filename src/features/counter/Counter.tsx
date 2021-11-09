import React, { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { decrement, increment, selectCount } from './counterSlice';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </Fragment>
  );
};

export default Counter;
