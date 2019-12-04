import React, { Component } from 'react'
import { TextField, Card, Button, CardContent } from '@material-ui/core'
import firebase from 'firebase'
import '../scss/styles.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const auth = firebase.auth()
class login extends Component {
	state = {
		email: '',
		password: '',
	}
	login = async () => {
		MySwal.fire({
			text: 'Espere',
		})
		MySwal.showLoading()
		const response = await auth
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.catch((error) => {
				MySwal.fire({
					text: error.message,
				})
			})
		try {
			if (response.user.uid) {
				MySwal.fire({
					text: 'Bienvenido',
				})
				await localStorage.setItem('TOKEN', response.user.uid)
				this.props.history.push('/home')
			}
		} catch (error) {}
	}
	handleEmail = (event) => {
		this.setState({ email: event.target.value })
	}
	handlePassword = (event) => {
		this.setState({ password: event.target.value })
	}
	render() {
		return (
			<div className='container'>
				<div className='contenedor'>
					<Card className='tarjeta'>
						<CardContent>
							<div className='contenedortarjeta'>
								<h3>LOGIN</h3>
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
									onClick={() => this.login()}
									style={{ marginTop: '10px' }}
									variant='outlined'
									color='primary'
								>
									Entrar!
								</Button>
								<p>
									<a href='/Register' className='forgot'>
										¿No tienes Cuenta?
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

export default login
