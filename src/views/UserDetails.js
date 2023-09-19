import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/UserDetails.scss';

function UserDetails({ users, groups }) {
  const { userId } = useParams();

  // Find the user by userId
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found.</div>;
  }

  // Find the groups that the user belongs to
  const userGroups = user.groupIds.map((groupId) => {
    const group = groups.find((group) => group.id === groupId);
    return group ? group.groupName : '';
  });

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div>
        <h4>Name:</h4> {user.name}
      </div>
      <div>
        <h4>Groups:</h4> {userGroups.join(', ')}
      </div>
    </div>
  );
}

export default UserDetails;
