import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import firebase from 'firebase'
const Login = React.lazy(() => import('../src/Pages/login/login'))
const Register = React.lazy(() => import('../src/Pages/register/register'))
const Principal = React.lazy(() => import('../src/Pages/main/principal'))
const Config = React.lazy(() => import('../src/Pages/main/configuration'))
var firebaseConfig = {
	apiKey: 'AIzaSyCNkCa48B4pNEpfcg9dS3g4p-ak2FqPYs0',
	authDomain: 'plantitas-17601.firebaseapp.com',
	databaseURL: 'https://plantitas-17601.firebaseio.com',
	projectId: 'plantitas-17601',
	storageBucket: 'plantitas-17601.appspot.com',
	messagingSenderId: '76870307114',
	appId: '1:76870307114:web:ac8d6a33a2e6b6a6686253',
	measurementId: 'G-S5ZVRFSZDP',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<h1>Cargando</h1>}>
				<Switch>
					<Route
						exact
						path='/Login'
						render={(props) => <Login {...props} />}
					></Route>
					<Route
						exact
						path='/Register'
						render={(props) => <Register {...props} />}
					></Route>
					<Route
						exact
						path='/config/:id'
						render={(props) => <Config {...props} />}
					></Route>
					<Route
						path='/'
						name='Home'
						render={(props) => <Principal {...props} />}
					/>
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}

export default App
