import React from 'react';
import { Table } from 'react-bootstrap';

const Team = (props) => {
    const members = props.membersData;

    return (
        <div className="pl-3">
            <h4>Total Team Members {members.length} </h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#No</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        members.map((member, idx) =>
                            <tr key={member.id}>
                                <td> {idx + 1}</td>
                                <td>{member.name} </td>
                                <td> {member.phone} </td>
                                <td> {member.email} </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Team;