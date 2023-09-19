import React, { useState } from 'react';
import '../styles/CreateGroup.scss';

function CreateGroup({ createGroup }) {
  const [groupName, setGroupName] = useState('');
  const [groupId, setGroupId] = useState(1);

  const handleSubmit = (e) => {
    console.log("create group", groupName, groupId)

    e.preventDefault();
    setGroupId((prevGroupId) => prevGroupId + 1)
    if (groupName.trim() === '') return;
    const newGroup = {
      id: groupId, 
      groupName,
    };
    createGroup(newGroup);
    setGroupName('');
  };

  return (
    <div className='create-group'>
      <form onSubmit={handleSubmit}>
        Create Group
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateGroup;
