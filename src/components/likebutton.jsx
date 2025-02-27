import React, { useState } from 'react'

const LikeButton = ({ initialLike }) => {
  const [isLiked, setIsLiked] = useState(initialLike)

  const toggleLike = () => {
    setIsLiked(prev => !prev)
  }

  return (
    <button 
      onClick={toggleLike} 
      style={{
        backgroundColor: isLiked ? 'red' : 'gray',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  )
}

export default LikeButton
