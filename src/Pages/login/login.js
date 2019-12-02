import React, { Component } from 'react'
import { TextField, Card, Button, CardContent } from '@material-ui/core'
import '../scss/styles.scss'

class login extends Component {
	render() {
		return (
			<div className='container'>
				<div className='contenedor'>
					<Card className='tarjeta'>
						<CardContent>
							<div className='contenedortarjeta'>
								<h3>LOGIN</h3>
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
									Entrar!
								</Button>
								<p>
									<a href='/Register' className='forgot'>
										¿Olvidaste tu contraseña?
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
