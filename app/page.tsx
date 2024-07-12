'use client'

import React, { useState } from 'react'
import RadioGroup from './components/RadioGroup'

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>('option1')

  const options = [
    {
      label: '3 Sticks (-32%)',
      value: 'option1',
      price: '$64.00',
      bestDeal: true,
    },
    { label: '2 Sticks (-22%)', value: 'option2', price: '$71.00' },
    { label: '1 Sticks (-15%)', value: 'option3', price: '$75.00' },
  ]

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        Create a RadioGroup component and use it here
      </h1>
      <RadioGroup
        name='exampleRadioGroup'
        options={options}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}
