import React, { useState, useEffect } from 'react';
import Styles from './Search.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FindUserData from '../../store/api/findUser';
import GetUsersData from '../../store/api/getUsers';

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const users = useSelector(state => state.table.users);

  const filtered = () => {
    users.map(user => {
      if (user.name === input) {
        return dispatch(FindUserData(user.id));
      }
    });
  };
  const handleSearch = event => {
    event.preventDefault();
    setInput(event.target.value);
  };

  useEffect(() => {
    filtered();
  }, [input]);

  return (
    <div className={Styles.wrapper}>
      <div>Search by name: </div>
      <input className={Styles.input} onChange={handleSearch} value={input} />
      <button
        className={Styles.clearButton}
        onClick={() => {
          setInput('');
          dispatch(GetUsersData());
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Search;
