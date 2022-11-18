import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAsync } from '../redux/reducers/users/users.thunks';

const Maths = () => {
  const dispatch = useDispatch()
  const {isLoading, users, errorMessage} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(loadUserAsync());
  }, []);

  return (
    <div>
      <div>Maths Class - List of Students!</div>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default Maths