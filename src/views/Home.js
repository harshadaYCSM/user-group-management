import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Users from '../common/users.json';
// import Groups from '../common/groups.json';

import UserList from '../components/UserList';
import GroupList from '../components/GroupList';
import UserDetails from './UserDetails';
import GroupDetails from './GroupDetails';
import '../styles/Home.scss';

function Home() {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  // useEffect(() => {
  //   setUsers(Users)
  //   setGroups(Groups)
  // }, [])

  const createUser = (user, groupId) => {
    if (!groupId) {
      // If groupId is not provided, return or show an error message
      // Because A user cannot exist without having at least one group
      alert('Please select a group for the user. A user cannot exist without having at least one group');
      return;
    }

    user.groupIds = [groupId]; // Assign the user to the specified group
    setUsers([...users, user]);
    console.log(users)
  };

  const createGroup = (group) => {
    setGroups([...groups, group]);
  };

  const assignUserToGroup = (userId, groupId) => {
    const updatedUsers = users.map((user) => {
      // Check if user already exists in the group
      if (user.id === userId && !user.groupIds.includes(groupId)) {
        return {
          ...user,
          groupIds: [...user.groupIds, groupId],
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const removeUserFromGroup = (userId, groupId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          groupIds: user.groupIds.filter((id) => id !== groupId),
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const deleteGroup = (groupId) => {
    const updatedGroups = groups.filter((group) => group.id !== groupId);
    setGroups(updatedGroups);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <Router>
      <div className="Home">
        <h2>User Management System</h2>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
            </li>
          </ul>
        </nav>
        <div className='introduction'>
          Welcome to User Management System.
          View, Create, Manage - Users & Groups.
        </div>

        <Routes>
          <Route
            path="/users"
            element={
              <UserList
                users={users}
                groups={groups}
                assignUserToGroup={assignUserToGroup}
                deleteUser={deleteUser}
                createUser={createUser}
              />
            }
          />
          <Route
            path="/groups"
            element={
              <GroupList
                groups={groups}
                deleteGroup={deleteGroup}
                users={users}
                createGroup={createGroup}
              />}
          />
          <Route
            path="/user-details/:userId"
            element={<UserDetails users={users} groups={groups} />}
          />
          <Route
            path="/group-details/:groupId"
            element={<GroupDetails groups={groups} users={users} removeUserFromGroup={removeUserFromGroup} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
