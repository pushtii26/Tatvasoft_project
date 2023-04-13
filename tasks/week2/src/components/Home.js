import React, { Component } from 'react';
import UserList from './UserList';
import HOC from './HOC';

const users = [
  { id: 12002080501051, name: 'Pushti' },
  { id: 12002080501004, name: 'Arjun' },
  { id: 12002080501012, name: 'Dhruv' },
];

const UserListWithHOC = HOC(UserList, { users });

class Home extends Component {
  render() {
    return (
      <div>
        <UserListWithHOC />
      </div>
    );
  }
}

export default Home;