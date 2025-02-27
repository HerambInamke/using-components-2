import React from 'react'
import LikeButton from './likebutton'

const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={profileImage} alt={username} style={styles.profileImage} />
        <span>{username}</span>
      </div>
      <p>{content}</p>
      <LikeButton initialLike={isLiked} />
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    margin: '10px',
    padding: '15px',
    backgroundColor: '#fff',
    width: '300px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  }
}

export default PostCard
