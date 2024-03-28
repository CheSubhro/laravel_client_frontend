import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom"

import axios from 'axios'

const Header = () => {
	
	const [data, setData] = useState('')
	const [token ,setToken] = useState('')

	function deleteHandle(){
		axios.post(`http://127.0.0.1:8000/api/logout`).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        })
	}


  return (

    <Navbar bg="light" variant="light">
			<Container>
				<Nav className="me-auto">Dashboard</Nav>
				<Button onClick={deleteHandle}>Logout</Button>
			</Container>
		</Navbar>
  )
}

export default Header