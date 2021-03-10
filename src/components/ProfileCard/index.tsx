import React from 'react'

interface ProfileCard {
  readonly imagePath: string
  readonly alternate: string
  readonly name: string
  readonly role: string
}

const ProfileCard = ({ imagePath, alternate, name, role }: ProfileCard) => {
  return (
    <div className="profile-card profile-card--background-image">
      <div className="profile-card__body">
        <div className="profile-card__image-wrapper">
          <img
            src={imagePath}
            alt={alternate}
            className="profile-card__image"
          />
        </div>
        <div className="profile-card__label profile-card__label--primary">
          {name}
        </div>
        <div className="profile-card__label profile-card__label--secondary">
          {role}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
