import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    padding: '16px 24px',
    border: '1px solid #CCC',
  },
}));

export interface WidgetProps {
  title: string;
  children: any;
}

const Widget = ({ title, children }: WidgetProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="button">{title}</Typography>

      <Box mt={2}>{children}</Box>
    </Paper>
  );
};

export default Widget;
