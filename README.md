# User Management System

The User Management System is a web application that allows you to manage users and groups. You can view, create, and manage both users and groups easily using this system.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [User Management](#user-management)
  - [Group Management](#group-management)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/user-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management-system
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Usage

### User Management

- **View Users**: Click on the "Users" link in the navigation bar to view a list of existing users. You can see their names and the groups they belong to.

- **Create User**: In the "Users" section, you can create a new user by providing a name and selecting a group from the dropdown menu. Click the "Create" button to add the user.

- **Assign User to Group**: To assign a user to a group, select the user from the list, choose a group from the dropdown menu next to the user, and click the "Assign" button.

- **Remove User from Group**: To remove a user from a group, select the user from the list, and click the "Delete User" button.

### Group Management

- **View Groups**: Click on the "Groups" link in the navigation bar to view a list of existing groups. You can see the group names and delete groups that have no members.

- **Create Group**: In the "Groups" section, you can create a new group by providing a group name and clicking the "Create" button.

- **Delete Group**: To delete a group, click the "Delete Group" button next to the group in the list. You can only delete groups that have no members.

## Features

- Create, view, and manage users and groups.
- Assign users to groups and remove them from groups.
- Delete groups that have no members.
- Simple and intuitive user interface.

## PS: 

- Since, I did not spend time on APIs or fetching/posting offline JSON with nodejs, you'll have to first create gorup/s and then create users and see how entire prject works.

