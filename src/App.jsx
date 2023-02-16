import { useState } from 'react'
import { Radar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
import Likert from 'react-likert-scale';
Chart.register()

function App() {
  

  return (
    <div className="radarChart">
   <Radar />
    </div>
  )
}

export default App
