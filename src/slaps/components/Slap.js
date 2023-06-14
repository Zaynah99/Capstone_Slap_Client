import React from 'react'
import '../SlapStyles.css'

const Slap = ({slap}) => {

  return (
    <>
      <div className='slap-component'>
        <div className='user-profile-details'>
            <img src={slap.user.profilePicture} width={170} />
            <p>{slap.user.username}</p>
          </div>
          <p>{slap.message}</p>
          <p> Mood: {slap.mood}</p> 
          <p>Time Posted: {slap.dateTime}</p>
      </div>
    </>
  )
}

export default Slap