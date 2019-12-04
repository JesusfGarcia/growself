import React, { Component } from 'react'
import { TextField, Card, Button, CardContent } from '@material-ui/core'
import firebase from 'firebase'
import '../scss/styles.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const auth = firebase.auth()

class register extends Component {
	state = {
		email: '',
		password: '',
		name: '',
	}
	registro = async () => {
		MySwal.fire({
			text: 'Espere',
		})
		MySwal.showLoading()
		let response = await auth
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.catch((error) => {
				MySwal.fire({
					type: 'error',
					text: 'Ya existe un correo con ese usuario',
				})
			})
		try {
			if (response.user.uid) {
				MySwal.fire({
					type: 'success',
					text: 'Registro completado',
				})
				firebase
					.database()
					.ref('users')
					.child(response.user.uid)
					.set({
						name: this.state.name,
						planta1: { maxhum: 100, minhum: 0, nombre: 'default', humedad: 50 },
						planta2: { maxhum: 100, minhum: 0, nombre: 'default', humedad: 50 },
					})
			}
		} catch (error) {}
	}
	handleEmail = (event) => {
		this.setState({ email: event.target.value })
	}
	handlePassword = (event) => {
		this.setState({ password: event.target.value })
	}
	handleName = (event) => {
		this.setState({ name: event.target.value })
	}
	render() {
		return (
			<div className='container'>
				<div className='contenedor'>
					<Card className='tarjeta'>
						<CardContent>
							<div className='contenedortarjeta'>
								<h3>REGISTRO</h3>
								<TextField
									onChange={this.handleName}
									id='Nombre'
									label='Nombre'
									placeholder='Nombre'
									margin='dense'
								></TextField>
								<TextField
									onChange={this.handleEmail}
									id='Correo'
									label='Correo'
									placeholder='Correo'
									margin='dense'
								></TextField>
								<TextField
									onChange={this.handlePassword}
									margin='dense'
									type='password'
									id='Contraseña'
									label='Contraseña'
									placeholder='Contraseña'
								></TextField>
								<Button
									onClick={() => this.registro()}
									style={{ marginTop: '10px' }}
									variant='outlined'
									color='primary'
								>
									Registrarse!
								</Button>
								<p>
									<a href='/Login' className='forgot'>
										YA TENGO UNA CUENTA
									</a>
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		)
	}
}

export default register
