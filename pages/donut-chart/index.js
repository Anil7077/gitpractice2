import React from 'react'
import DonutChart from 'react-donut-chart';
   
const index = () => {
    const data = [
        { label: 'Label 1', value: 25 },
        { label: 'Label 2', value: 35 },
        { label: 'Label 3', value: 40 },
      ];
  return (
    <div>
      <h2>My Donut Chart</h2>
      <DonutChart
        data={data}
        width={300}
        height={300}
        colors={['#FF5733', '#33FF57', '#5733FF']}
      />
    </div>
  )
}

export default index