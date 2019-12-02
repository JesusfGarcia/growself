import React, { Component } from 'react'
import {
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
} from '@material-ui/core'
import '../scss/styles.scss'
import Firebase from 'firebase'

class configuration extends Component {
	state = { planta: '', minhum: '', maxhum: '' }
	getUserData = async () => {
		let ref = Firebase.database()
			.ref()
			.child('users')
			.child('usuario1')
			.child('planta' + this.props.match.params.id)
		ref.on('value', (snapshot) => {
			const state = snapshot.val()
			this.setState({
				planta: state.nombre,
				maxhum: state.maxhum,
				minhum: state.minhum,
			})
		})
	}
	writeUserData = () => {
		let ref = Firebase.database()
			.ref('users')
			.child('usuario1')
			.child('planta' + this.props.match.params.id)
		ref.child('maxhum').set(this.state.maxhum)
		ref.child('minhum').set(this.state.minhum)
		ref.child('nombre').set(this.state.planta)
	}
	componentDidMount() {
		this.getUserData()
	}

	handleChange = (event) => {
		switch (event.target.value) {
			case 'papa':
				this.cambiarcampos('papa', 30, 35)
				break
			case 'aguacate':
				this.cambiarcampos('aguacate', 90, 95)
				break
			case 'calabaza':
				this.cambiarcampos('calabaza', 50, 55)
				break
			case 'fresa':
				this.cambiarcampos('fresa', 65, 70)
				break
			case 'cristanemo':
				this.cambiarcampos('cristanemo', 40, 45)
				break
			default:
				break
		}
	}

	cambiarcampos = (planta, minhum, maxhum) => {
		this.setState({ planta, minhum, maxhum })
	}
	render() {
		return (
			<div>
				<div className='navbar'>
					<h5>GrowSelf</h5>
				</div>
				<div className='contenedor'>
					<h3>Configuración</h3>
					<hr />
					<div
						style={{
							marginTop: '10px',
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
						}}
					>
						<FormControl>
							<InputLabel value={this.state.planta} id='select-label'>
								Seleccione su planta
							</InputLabel>
							<Select
								style={{ minWidth: '160px' }}
								id='select'
								value={this.state.planta}
								onChange={this.handleChange}
							>
								<MenuItem value={'papa'}>Papa</MenuItem>
								<MenuItem value='calabaza'>Calabaza</MenuItem>
								<MenuItem value='aguacate'>Aguacate</MenuItem>
								<MenuItem value='cristanemo'>Cristanemo</MenuItem>
								<MenuItem value='fresa'>Fresa</MenuItem>
							</Select>
						</FormControl>
						<Button
							onClick={() => this.writeUserData()}
							style={{ marginTop: '10px' }}
							variant='outlined'
							color='primary'
						>
							GUARDAR CAMBIOS
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default configuration
