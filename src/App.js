import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Components from './pages/components'
import JNavbar from './components/JNavbar'
import JMainContent from './components/JMainContent'
import { useEffect, useState } from 'react'

function App() {
  const [mainBlur, SetMainBlur] = useState('0px')

  return (
    <Router>
      <>
        <JNavbar SetMainBlur={SetMainBlur} />
        <JMainContent mainBlur={mainBlur}>
          <Components />
        </JMainContent>
      </>
    </Router>
  )
}

export default App
