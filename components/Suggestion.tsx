import React from 'react'
import Button from './Button'
import ButtonWhite from './ButtonWhite'

const Suggestion = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4 bg-black p-6'>
        <h1 className='md:text-4xl text-2xl text-center font-sans'>Not Seeing What You Are Looking For?<br/> Suggest What's On Your Mind We'd Be Happy To Make It For YOU</h1>
        <p className='font-sans text-xl '>At Yute Cultr, the customer is not only awesome but valued. We'd Love your feedback</p>
        <textarea
          className="w-[60%] h-32 p-4 border font-sans border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your suggestion here..."/>
          <ButtonWhite value='Feedback'/>
    </div>
  )
}

export default Suggestion