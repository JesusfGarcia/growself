import React, { Component } from 'react'
import '../scss/styles.scss'
import firebase from 'firebase'
const Macetas = React.lazy(() => import('./Components/Macetas'))
class principal extends Component {
	state = {
		plantas: {
			planta1: { humedad: 0, nombre: '' },
			planta2: { humedad: 0, nombre: '' },
		},
		hide: 'true',
	}
	componentWillMount() {
		const nameRef = firebase
			.database()
			.ref()
			.child('users')
			.child('usuario1')
		nameRef.on('value', (snapshot) => {
			this.setState({ plantas: snapshot.val(), hide: false })
		})
	}
	render() {
		return (
			<div hidden={this.state.hide}>
				<div className='navbar'>
					<h5>GrowSelf</h5>
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
