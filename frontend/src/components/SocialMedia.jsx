import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <BsGithub />
       </div>
       <div>
        <BsLinkedin />
       </div>
       <div>
        <TfiEmail />
       </div>
    </div>
  )
}

export default SocialMedia