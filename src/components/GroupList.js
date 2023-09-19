import React from 'react';
import CreateGroup from './CreateGroup';
import { Link } from 'react-router-dom';
import '../styles/GroupList.scss';

function GroupList({ groups, deleteGroup, users, createGroup }) {

  const handleDeleteGroup = (groupId) => {
    // Check if the group has no members before deleting
    const groupHasMembers = users.some((user) => user.groupIds.includes(groupId));
    if (groupHasMembers) {
      alert('Cannot delete group with members.');
    } else {
      deleteGroup(groupId);
    }
  };

  return (
    <div className='group-list'>
      <h2>Group List</h2>
      <CreateGroup createGroup={createGroup} />
      <ul>
        {groups.map((group) => (
          <li className='group-item' key={group.id}>
            <Link className='group-name' to={`/group-details/${group.id}`}>{group.groupName}</Link>
            <button className='delete-button' onClick={() => handleDeleteGroup(group.id)}>Delete Group</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupList;
