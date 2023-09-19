import React, { useState } from 'react';
import '../styles/CreateUser.scss';

function CreateUser({ createUser, groups }) {
    const [name, setName] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('');
    const [id, setId] = useState(1)

    const handleSubmit = (e) => {
        console.log("Can i make this id: ", e.target.length)
        e.preventDefault();
        setId((prevId) => prevId + 1)
        if (name.trim() === '') return;
        if (!selectedGroup) {
            alert('Please select a group for the user.');
            return;
        }
        const newUser = {
            id: id, 
            name,
            groupIds: [selectedGroup], // Assign the selected group
        };

        console.log("User Added:", newUser)

        createUser(newUser, parseInt(selectedGroup));
        setName('');
        setSelectedGroup('');

    };

    return (
        <div className='create-user'>
            <form onSubmit={handleSubmit}>
                Create User
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                >
                    <option value="">Select a Group</option>
                    {groups.map((group) => (
                        <option key={group.id} value={group.id}>
                            {group.groupName}
                        </option>
                    ))}
                </select>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateUser;
