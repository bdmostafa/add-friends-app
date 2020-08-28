import React from 'react';
import { Table } from 'react-bootstrap';

const Team = () => {
    return (
        <div className="pl-3">
            <h2>Team Members</h2>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Team;