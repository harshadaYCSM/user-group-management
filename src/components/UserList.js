import React, {  useState } from 'react';
import CreateUser from './CreateUser';
import UserItem from './UserItem';
import '../styles/UserList.scss';

function UserList({ users, groups, assignUserToGroup, deleteUser, createUser }) {
    const [selectedGroupIds, setSelectedGroupIds] = useState(
        users.map(() => '')
    );

    const handleAssignUser = (userId) => {
        const selectedGroupId = selectedGroupIds[userId - 1]; // Assuming user IDs start from 1
        
        if (selectedGroupId) {
          // Check if the user is already in the selected group
          const user = users.find((user) => user.id === userId);
          if (user && user.groupIds.includes(parseInt(selectedGroupId))) {
            alert('User is already a member of the selected group.');
            setSelectedGroupIds((prevSelectedGroupIds) => {
                const newSelectedGroupIds = [...prevSelectedGroupIds];
                newSelectedGroupIds[userId - 1] = ''; // Clear the selected group for this user
                return newSelectedGroupIds;
              });
            return;
          }
      
          assignUserToGroup(userId, parseInt(selectedGroupId));
          
          setSelectedGroupIds((prevSelectedGroupIds) => {
            const newSelectedGroupIds = [...prevSelectedGroupIds];
            newSelectedGroupIds[userId - 1] = ''; // Clear the selected group for this user
            return newSelectedGroupIds;
          });
        }
      };
      
    const handleDeleteUser = (userId) => {
        deleteUser(userId);
    };

    const handleSelectGroup = (userId, groupId) => {
        // Update the selectedGroupIds array with the selected group for the user
        setSelectedGroupIds((prevSelectedGroupIds) => {
            const newSelectedGroupIds = [...prevSelectedGroupIds];
            newSelectedGroupIds[userId - 1] = groupId; // Assuming user IDs start from 1
            return newSelectedGroupIds;
        });
    };


    return (
        <div className='user-list'>
            <h2>User List</h2>
            <CreateUser createUser={createUser} groups={groups} />
            <ul>
                {users.map((user) => (
                    <UserItem 
                    user={user}
                    groups={groups}
                    selectedGroupIds={selectedGroupIds}
                    handleSelectGroup={handleSelectGroup}
                    handleAssignUser={handleAssignUser}
                    handleDeleteUser={handleDeleteUser}
                    />
                ))}
            </ul>
        </div>
    );
}

export default UserList;
