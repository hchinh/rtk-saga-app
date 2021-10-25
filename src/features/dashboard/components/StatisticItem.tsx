import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '16px 24px',
    border: '1px solid #CDCDCD',
  },
}));

export interface StatisticProps {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

const StatisticItem = ({ icon, label, value }: StatisticProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box>{icon}</Box>
      <Box>
        <Typography variant="h5" align="right">
          {value}
        </Typography>
        <Typography variant="caption">{label}</Typography>
      </Box>
    </Paper>
  );
};

export default StatisticItem;
