import React from 'react'
import { Link } from 'react-router-dom'
import '../ProfileStyles.css'

const ProfileSlapList = ({user, userSlap, loggedInUser, deleteSlap}) => {

  const date = userSlap.dateTime.slice(0, 10).split("-").reverse().join("-");
  const time = userSlap.dateTime.slice(11, 16);

  const handleDelete = () => {
    deleteSlap(userSlap.id)
  }

  return (
    <div className='slap-component'>
          <div className='user-profile-details'>
            <Link to ={`/profile/${userSlap.id}`}>
              <img src={user.profilePicture} alt='user-profile-picture' width={200}/>
            </Link>
              <div className='user-slap-contents'>

                <Link to ={`/profile/${userSlap.id}`}>
                  <p><b>{user.username}</b></p>
                </Link>

                <p>{userSlap.message}</p>
                <p><b>Mood: </b>{userSlap.mood}</p>
                <p><b>Time Posted: </b>{date} at {time}</p>
              </div>  
                <div className='delete-button'>
                    <button onClick={handleDelete}>Delete</button>
              </div>
          
      </div>
    </div>
  )
}

export default ProfileSlapList