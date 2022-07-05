import React from 'react'
import CloseIcon from '../image/close.svg'

const Villager = ({ villager, showVilDetailPopup }) => {
  return (
    <div className="popup-container" onClick={() => showVilDetailPopup()}>
      <div className="villager-details-container" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }}>
        <img src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" />
        <div className="villager-details">
          <label>Name</label>
          <label>Species</label>
          <p>{villager.name.nameUSen}</p>
          <p>{villager.species}</p>
          <label>Gender</label>
          <label>Birthday</label>
          <p>{villager.gender}</p>
          <p>{villager.birthdayString}</p>
          <label>Personality</label>
          <label>Subtype</label>
          <p>{villager.personality}</p>
          <p>{villager.subtype}</p>
          <label>Hobby</label>
          <label>Catch Phrase</label>
          <p>{villager.hobby}</p>
          <p>{villager.catchPhrase}</p>
          <label>Sayings</label>
          <p>"{villager.saying} "</p>
        </div>
      </div>
      <button onClick={() => showVilDetailPopup()} className="close-btn">
        <img src={CloseIcon} alt="" />
        <span>Close</span>
      </button>
    </div>
  )
}

export default Villager