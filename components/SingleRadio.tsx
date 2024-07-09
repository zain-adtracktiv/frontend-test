import React from 'react';

type SingleRadioProps =  {
    mainHeadline:string;
    smallText:string;
    isActive: boolean;
    topText:string|null;
    setActive:() => void;
  }

const SingleRadio: React.FC<SingleRadioProps> = ({mainHeadline, smallText, isActive, topText,setActive }) => {
  return (
    <div className='flex justify-center relative m-4 cursor-pointer' onClick={setActive}>

        {topText && (
            <div className='absolute text-sm font-normal uppercase bg-purple-600 px-2 text-white rounded-xl -top-2'>{topText}</div>
        )}

    <div className={`flex align-top space-x-2 border-2 ${isActive ? 'border-purple-600' : 'border-gray-300'} bg-gray-200 rounded-xl w-fit p-4`}>
      <div className={`left w-8 h-8 rounded-full  ${isActive ? 'border-purple-600 border-8' : 'border-gray-300 border-2'} bg-white`}></div>
      <div className='right'>
        <h1 className='text-xl font-bold'>{mainHeadline &&mainHeadline}</h1>
        <span className='text-sm font-normal'>{smallText &&smallText}</span>
      </div>
    </div>
    </div>
  );
}

export default SingleRadio;
