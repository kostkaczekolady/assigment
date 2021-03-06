import React from 'react';
import Styles from './Table.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import GetUsersData from '../../store/api/getUsers';
import DeleteUserData from '../../store/api/deleteUser';
import { useEffect } from 'react';

const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.table.users);

  useEffect(() => {
    dispatch(GetUsersData());
  }, []);

  const deleteUser = id => {
    dispatch(DeleteUserData(id));
  };

  if (users.length === 0) {
    return null;
  }

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>List of users</div>
      <div className={Styles.row}>
        <div className={Styles.hederCell}>Id</div>
        <div className={Styles.hederCell}>Name</div>
        <div className={Styles.hederCell}>Surname</div>
        <div className={Styles.hederCell}>Birthdate</div>
        <div className={Styles.hederCell}>Phone</div>
        <div className={Styles.hederCell}>City</div>
        <div className={Styles.hederCell}>Street</div>
        <div className={Styles.hederCell}>Number</div>
        <div className={Styles.hederCell} />
        <div className={Styles.hederCell} />
      </div>
      {users.length > 0 && users?.map((user, index) => {
        return (
          <div key={`user-${index}`} className={Styles.row}>
            {Object.keys(user).map((property, index) => {
              return (
                <div key={index} className={Styles.cell}>
                  {user[property]}
                </div>
              );
            })}
            <div className={Styles.cell}>
              <button onClick={() => deleteUser(user.id)} className={Styles.button}>
                Delete
              </button>
            </div>
            <div className={Styles.cell}>
              <button className={Styles.button}>Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
