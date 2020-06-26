import React, { useState } from 'react';
import axios from 'axios'
import Waterfall from './components/Waterfall';

const App = () => {
  const [ waterfall, setWaterfall ] = useState(null)

  async function fetchWaterfall() {
    const { data } = await axios('/cu')
    setWaterfall(data)
    return data
  }

  const updateWaterfall = () => fetchWaterfall()

  return (
    <Waterfall waterfall={waterfall} updateWaterfall={updateWaterfall} />
  )
}

export default App;
