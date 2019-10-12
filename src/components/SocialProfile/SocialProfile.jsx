import React from 'react';
import T from 'prop-types';
import { description, profile, userAvatar, stats, label, stat, userTag, userName, userLocation } from './SocialProfile.module.css';

const SocialProfile = ({ user }) => (
  <div className={profile}>
    <div className={description}>
      <img
        src= {user.avatar}
        alt="user avatar"
        className={userAvatar}
      />
      <p className={userName}>{user.name}</p>
      <p className={userTag}>@{user.tag}</p>
      <p className={userLocation}>{user.location}</p>
    </div>

    <ul className={stats}>
      <li className={stat}>
        <span className={label}>Followers</span>
        <span className="quantity">{user.stats.followers}</span>
      </li>
      <li className={stat}>
        <span className={label}>Views</span>
        <span className="quantity">{user.stats.views}</span>
      </li>
      <li className={stat}>
        <span className={label}>Likes</span>
        <span className="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

SocialProfile.propTypes = {
  user: T.shape({
      name: T.string.isRequired,
      tag: T.string.isRequired,
      location: T.string.isRequired,
      avatar: T.string.isRequired,
      stats: T.shape({
        followers: T.number.isRequired,
        views: T.number.isRequired,
        likes: T.number.isRequired,
      }).isRequired,
    }).isRequired,
}

export default SocialProfile;