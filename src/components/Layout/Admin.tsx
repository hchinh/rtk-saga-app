import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Header, Sidebar } from 'components/Common';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,

    minHeight: '100vh',
  },

  header: {
    gridArea: 'header',
  },

  sidebar: {
    gridArea: 'sidebar',
  },

  main: {
    gridArea: 'main',
    padding: '16px 24px',
  },
}));

export const AdminLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>Main</Box>
    </Box>
  );
};
