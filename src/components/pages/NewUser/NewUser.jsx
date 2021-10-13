import React from 'react';
import './NewUser.css';

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Phone Number</label>
                    <input type="phone" placeholder="+234 816 686 9151" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className="newUserGender">
                    <label>Gender</label>
                    <input type="radio" name="gender" id="male" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}

export default NewUser;
