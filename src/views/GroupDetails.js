import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/GroupDetails.scss';

function GroupDetails({ groups, users, removeUserFromGroup }) {
  const { groupId } = useParams();

  const group = groups.find((group) => group.id === parseInt(groupId));

  const handleRemoveUser = (userId) => {
    removeUserFromGroup(userId, parseInt(groupId)); // Ensure groupId is parsed as an integer
  };

  // Filter users who belong to the specific group
  const usersInGroup = users.filter((user) => user.groupIds.includes(parseInt(groupId)));

  return (
    <div className='group-details'>
      <h2>Group Details: {group.groupName}</h2>
      <h3>Members</h3>
      <ul>
        {usersInGroup.length ? usersInGroup.map((user) => (
          <li className='user-item' key={user.id}>
            {user.name}
            <button className='remove-button' onClick={() => handleRemoveUser(user.id)}>Remove from Group</button>
          </li>
        )) :
          <li>This group has no members. Please add members.</li>
        }
      </ul>
    </div>
  );
}

export default GroupDetails;
