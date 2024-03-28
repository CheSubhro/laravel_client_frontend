import React ,{useEffect, useState}from 'react'

import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"

import Table from 'react-bootstrap/Table';

import axios from 'axios';


const Dashboard = () => {

	const [data, setData] = useState('');


	useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/dashboard').then((response) => {
			console.log(response)
            // setData(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, [])

	return (

		<>
			<Header />
			<div className='container my-3'>
				<div className="row">
					<div className="col">
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>ID</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Email ID</th>
								</tr>
							</thead>
							<tbody>
							{
                                Object.entries(data).map((i, d) => {
                                    return (
                                        <tr key={d}>
                                            <td> {i[1].id } </td>
                                            <td> {i[1].firstName }</td>
                                            <td> {i[1].lastName }</td>
                                            <td> {i[1].email }</td>
                                        </tr>  
                                    )
                                })
                            }
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard