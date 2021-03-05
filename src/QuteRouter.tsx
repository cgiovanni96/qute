import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Name from './page/Author/Author'

import Home from './page/Home/Home'

const QuteRouter: React.FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/author/:name" element={<Name />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default QuteRouter
