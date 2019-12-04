import React, { Component } from 'react'
import '../scss/styles.scss'
import firebase from 'firebase'
import { Button } from '@material-ui/core'
const Macetas = React.lazy(() => import('./Components/Macetas'))
class principal extends Component {
	state = {
		plantas: {
			planta1: { humedad: 0, nombre: '' },
			planta2: { humedad: 0, nombre: '' },
		},
		hide: 'true',
	}
	componentDidMount() {
		if (!localStorage.getItem('TOKEN')) {
			this.props.history.push('/login')
		} else {
			const nameRef = firebase
				.database()
				.ref()
				.child('users')
				.child(localStorage.getItem('TOKEN'))
			nameRef.on('value', (snapshot) => {
				try {
					this.setState({ plantas: snapshot.val(), hide: false })
				} catch (error) {}
			})
		}
	}
	render() {
		return (
			<div hidden={this.state.hide}>
				<div className='navbar'>
					<h5>GrowSelf</h5>
					<Button
						onClick={() => {
							localStorage.removeItem('TOKEN')
							this.props.history.push('/login')
						}}
						color='secondary'
						size='small'
					>
						Salir
					</Button>
				</div>
				<div className='contenedor'>
					<Macetas
						push={() => this.props.history.push('/config/1')}
						humedad={this.state.plantas.planta1.humedad}
						nombre={this.state.plantas.planta1.nombre}
					/>
					<Macetas
						push={() => this.props.history.push('/config/2')}
						humedad={this.state.plantas.planta2.humedad}
						nombre={this.state.plantas.planta2.nombre}
					/>
				</div>
			</div>
		)
	}
}

export default principal
