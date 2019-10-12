import React from 'react';
import SocialProfile from './SocialProfile/SocialProfile';
import FriendList from './FriendList/FriendList';
import user from '../bd/user';
import friends from '../bd/friends';
import Stats from './StatisticsSection/Stats';
import stats from '../bd/stats';
import transactions from '../bd/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
    <>

      <FriendList friends={friends} />
      
      <SocialProfile user={user}/>

      <Stats title="Upload stats" stats={stats} />

      <TransactionHistory items={transactions} />

    </>
);

export default App;