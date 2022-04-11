import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import "./DynamicFormsMember.css";

const DynamicFormsMember = () => {

    const [inviteMembers, setInviteMembers] = useState([
        {
            name: "",
            email: "",
            id: uuid(),
        },
    ])
    console.log(inviteMembers)

    //* add new form
    const addMEmberRow = () => {
        let _inviteMembers = [...inviteMembers]
        _inviteMembers.push({
            name: "",
            email: "",
            id: uuid(),
        });
        setInviteMembers(_inviteMembers);
    }

    //* remove form
    const removeMemberRow = (id) => {
        let _inviteMembers = [...inviteMembers];
        _inviteMembers = _inviteMembers.filter(member => member.id !== id);
        setInviteMembers(_inviteMembers);
    }

    //* hangi forma hangisi ile giriş yaptıgımızı bulmamız gereklidir. Bunuda index ile yaparız.
    const handleMemberChange = ( id, event ) => {
        const index = inviteMembers.findIndex(m => m.id === id)
        let _inviteMembers = [...inviteMembers];
        _inviteMembers[index][event.target.name] = event.target.value
        setInviteMembers(_inviteMembers);
    }

    const handleSendInvitation = () => {
        console.table(inviteMembers)
    }

    return (
        <div className="dynamic-form">
            <h2>Invite new members to your team</h2>
            <div className="invite-member">
                {
                    inviteMembers.map((member, index) =>
                        <div className="form-row" key={index}>
                            <div className="input-group">
                                <label htmlFor="name" >Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    onChange={(e) => handleMemberChange(member.id, e)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email" >Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    onChange={(e) => handleMemberChange(member.id, e)}
                                />
                            </div>

                            {
                                inviteMembers.length > 1 &&
                                <button
                                onClick={() => removeMemberRow(member.id)}
                                >
                                    -
                                </button>
                            }

                            <button onClick={addMEmberRow}>+</button>
                        </div>
                    )
                }
            <button
                className='send-invitation-button'
                onClick={handleSendInvitation}
            >
                Send Invitation List
            </button>
            </div>
        </div>
    );
};

export default DynamicFormsMember;