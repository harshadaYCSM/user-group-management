import { Link } from 'react-router-dom';

function UserItem({user, groups, selectedGroupIds, handleSelectGroup,handleAssignUser, handleDeleteUser}) {
    return (
        <div className='user-item-container'>
            <li className='user-item' key={user.id}>
                        <Link to={`/user-details/${user.id}`}>{user.name}</Link>    
                                
                        <div className='groups'>Groups: {user.groupIds.map((groupId) => {
                            const group = groups.find((group) => group.id === parseInt(groupId));
                            return group ? group.groupName : '';
                        }).join(', ')}</div>

                        <div className='select-group'>
                            {/* Dropdown for selecting user's group */}
                            <select
                                value={selectedGroupIds[user.id - 1] || ''} // Assuming user IDs start from 1
                                onChange={(e) => handleSelectGroup(user.id, e.target.value)}
                            >
                                <option value="">Select Group</option>
                                {groups.map((group) => (
                                    <option key={group.id} value={group.id}>{group.groupName}</option>
                                ))}
                            </select>
                            <button className='assign-button' onClick={() => handleAssignUser(user.id)}>Assign</button>
                        </div>
                        <button className='delete-button' onClick={() => handleDeleteUser(user.id)}>Delete User</button>
                    </li>
        </div>
    )
}

export default UserItem;