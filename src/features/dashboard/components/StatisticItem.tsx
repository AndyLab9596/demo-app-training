import { Typography } from '@material-ui/core';
import React from 'react';
import { Wrapper } from './StatisticItem.style';

export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

const StatisticItem = ({ icon, label, value }: StatisticItemProps) => {
  return (
    <Wrapper>
      <div>{icon}</div>
      <div>
        <Typography variant="h5">{value}</Typography>
        <Typography variant="caption">{label}</Typography>
      </div>
    </Wrapper>
  );
};

export default StatisticItem;
