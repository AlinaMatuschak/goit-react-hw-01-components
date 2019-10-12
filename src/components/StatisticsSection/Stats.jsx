import React from 'react';
import T from 'prop-types';
import style from './Stats.module.css';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return {backgroundColor: `${color}`};
  }

const Stats = ({ title, stats }) => (
<section className={style.section}>
  <h2 className={style.title}>{title}</h2>

  <ul className={style.statList}>
    {stats.map(stat => (
      <li className={style.item} key={stat.id} style={getRandomColor()}>
        <span className={style.label}>{stat.label}</span>
        <span className={style.percentage}>{stat.percentage}%</span>
      </li>
    ))}
    
  </ul>
</section>
);

Stats.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Stats;