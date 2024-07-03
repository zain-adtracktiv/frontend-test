'use client'
import React, {useState} from 'react'
import SingleRadio from './SingleRadio';

const RadioGroup = () => {
    const [activeRadio, setActiveRadio] = useState(2)

    return (
        <div className='flex flex-wrap justify-center align-middle mt-10'>
            <SingleRadio mainHeadline={"3 Sticks (-32%)"} smallText={"$64.00/each"} isActive={activeRadio === 1} setActive={() => setActiveRadio(1)} topText={"Best Deal"}/>
            <SingleRadio mainHeadline={"2 Sticks (-22%)"} smallText={"$71.00/each"} isActive={activeRadio === 2} setActive={() => setActiveRadio(2)} topText={null}/>
            <SingleRadio mainHeadline={"1 Sticks (-12%)"} smallText={"$75.00"} isActive={activeRadio === 3} setActive={() => setActiveRadio(3)} topText={null}/>
        </div>
    )
}

export default RadioGroup;