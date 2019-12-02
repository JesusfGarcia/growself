import React, { Component } from 'react'
import { TextField, Card, Button, CardContent } from '@material-ui/core'

import '../scss/styles.scss'

class register extends Component {
	// registro = () =>{
	//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	//         // Handle Errors here.
	//         var errorCode = error.code;
	//         var errorMessage = error.message;
	//         // ...
	//       });
	// }
	render() {
		return (
			<div className='container'>
				<div className='contenedor'>
					<Card className='tarjeta'>
						<CardContent>
							<div className='contenedortarjeta'>
								<h3>REGISTRO</h3>
								<TextField
									id='Nombre'
									label='Nombre'
									placeholder='Nombre'
									margin='dense'
								></TextField>
								<TextField
									id='Correo'
									label='Correo'
									placeholder='Correo'
									margin='dense'
								></TextField>
								<TextField
									margin='dense'
									type='password'
									id='Contraseña'
									label='Contraseña'
									placeholder='Contraseña'
								></TextField>
								<Button
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
