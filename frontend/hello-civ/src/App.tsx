import { useEffect, useState } from 'react'
import './App.css'

import AddGameForm from './components/forms/AddGameForm'
import RatingsPage from './components/pages/RatingsPage'

function App() {

  const [addGameFormVisible, setAddGameFormVisible] = useState<boolean>(false)
  
  const toggleVisibility = () => {
    setAddGameFormVisible(!addGameFormVisible)
  }

  if (addGameFormVisible){
    return (
      <AddGameForm toggleVisible={toggleVisibility}></AddGameForm>
    )
  }else{
    return (
      <RatingsPage toggleVisible={toggleVisibility}></RatingsPage>
    )
  }
}

export default App
