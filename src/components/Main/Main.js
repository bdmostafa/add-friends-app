import React, { useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import Friends from '../Friends/Friends';
import Team from '../Team/Team';

const Main = (props) => {

    const [members, setMembers] = useState([]);

    const handleAddMember = (member) => {
        setMembers([...members, member]);
    }

    return (
        <>
            <main style={{ display: 'flex' }}>
                <CardColumns className="w-75">
                    {
                        props.friends.map(friend => <Friends key={friend.id} friend={friend} addMember={handleAddMember} ></Friends>)
                    }
                </CardColumns>
                <Team membersData={members}></Team>
            </main>
        </>
    );
};

export default Main;