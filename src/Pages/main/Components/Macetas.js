import React, { useState, useEffect } from 'react'
import { Card, Button, CardContent } from '@material-ui/core'
import '../../scss/styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faThermometerEmpty,
	faThermometerFull,
	faThermometerHalf,
	faThermometerThreeQuarters,
	faThermometerQuarter,
} from '@fortawesome/free-solid-svg-icons'
const Maceta = (props) => {
	const [iconhumedad, setIconhumedad] = useState(faThermometerEmpty)
	useEffect(() => {
		if (props.humedad === 100) {
			setIconhumedad(faThermometerFull)
		} else {
			if (props.humedad >= 75) {
				setIconhumedad(faThermometerThreeQuarters)
			} else {
				if (props.humedad >= 50) {
					setIconhumedad(faThermometerHalf)
				} else {
					if (props.humedad >= 25) {
						setIconhumedad(faThermometerQuarter)
					} else {
						setIconhumedad(faThermometerEmpty)
					}
				}
			}
		}
	}, [props.humedad])

	return (
		<Card className='tarjeta2 '>
			<CardContent>
				<div className='contenedor'>
					<FontAwesomeIcon
						style={{ color: '#1917BE' }}
						icon={iconhumedad}
					></FontAwesomeIcon>
					<p className='numhumedad'>{props.humedad + ' %'}</p>
					<p className='nombre'>{props.nombre}</p>
					<Button
						onClick={() => props.push()}
						style={{ marginTop: '10px' }}
						variant='outlined'
						color='primary'
					>
						Ver detalle!
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}

export default Maceta
