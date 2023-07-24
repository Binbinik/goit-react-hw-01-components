import React from 'react';
import Profile from './components/ProfileCard';
import user from './data/user.json';
import data from './data/data.json';
import Statistics from './components/Statistics';
import friend from './data/friends.json';
import Friends from './components/FriendsList';
import transactions from './data/transactions.json';
import Transactions from './components/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friend} />
      <Transactions items={transactions} />;
    </>
  );
};
