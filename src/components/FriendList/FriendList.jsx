import React from 'react';
import T from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(friend => (
        <li className={style.list} key={friend.id}>
        <span className={friend.isOnline ? style.online : style.ofline}></span>
        <img className={style.avatar} src={friend.avatar} alt={friend.name} />
        <p className={style.name}>{friend.name}</p>
        </li>
    ))}
  </ul>
);

FriendList.propTypes = {
    friends: T.arrayOf(
      T.shape({
        avatar: T.string.isRequired,
        name: T.string.isRequired,
        isOnline: T.bool.isRequired,
        id: T.number.isRequired,
      }).isRequired,
    ).isRequired,
  }

export default FriendList;