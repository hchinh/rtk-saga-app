import { useAppDispatch } from 'app/hooks';
import React, { useEffect } from 'react';
import { studentActions } from '../studentSlice';

const ListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  });

  return <div>List Page</div>;
};

export default ListPage;
