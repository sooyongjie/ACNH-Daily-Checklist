import React from 'react'
import CloseIcon from '../image/close.svg'
import NextIcon from '../image/next.svg'
import PrevIcon from '../image/prev.svg'

const Villager = ({ villager, setQuery, setVillagerData, showVilDetailPopup }) => {
  return (
    <div className="popup-container">
      <div className="villager-details-container" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }}>
        <img src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" />
        <div className="villager-details">
          <label>Name</label>
          <label>Species</label>
          <p>{villager.name.nameUSen}</p>
          <a href='#' onClick={() => setQuery(villager.species)}>
            {villager.species}
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7238 19.9744L11.0997 13.3504C10.6053 13.6914 10.03 13.9642 9.37391 14.1688C8.71714 14.3734 8.00512 14.4757 7.23785 14.4757C5.22592 14.4757 3.51679 13.7722 2.11049 12.3652C0.703496 10.9589 0 9.24979 0 7.23785C0 5.22592 0.703496 3.51645 2.11049 2.10946C3.51679 0.703154 5.22592 0 7.23785 0C9.24979 0 10.9589 0.703154 12.3652 2.10946C13.7722 3.51645 14.4757 5.22592 14.4757 7.23785C14.4757 8.02216 14.3734 8.73384 14.1688 9.37289C13.9642 10.0126 13.6914 10.5712 13.3504 11.0486L20 17.7238L17.7238 19.9744ZM7.23785 11.2532C8.36317 11.2532 9.3139 10.8651 10.09 10.089C10.8655 9.31355 11.2532 8.36317 11.2532 7.23785C11.2532 6.11253 10.8655 5.16181 10.09 4.38568C9.3139 3.61023 8.36317 3.22251 7.23785 3.22251C6.11253 3.22251 5.16215 3.61023 4.3867 4.38568C3.61057 5.16181 3.22251 6.11253 3.22251 7.23785C3.22251 8.36317 3.61057 9.31355 4.3867 10.089C5.16215 10.8651 6.11253 11.2532 7.23785 11.2532Z" fill={villager.text_color} />
            </svg>
          </a>
          <label>Gender</label>
          <label>Birthday</label>
          <p>{villager.gender}</p>
          <p>{villager.birthdayString}</p>
          <label>Personality</label>
          <label>Subtype</label>
          <a href="#" onClick={() => setQuery(villager.personality)}>
            {villager.personality}
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7238 19.9744L11.0997 13.3504C10.6053 13.6914 10.03 13.9642 9.37391 14.1688C8.71714 14.3734 8.00512 14.4757 7.23785 14.4757C5.22592 14.4757 3.51679 13.7722 2.11049 12.3652C0.703496 10.9589 0 9.24979 0 7.23785C0 5.22592 0.703496 3.51645 2.11049 2.10946C3.51679 0.703154 5.22592 0 7.23785 0C9.24979 0 10.9589 0.703154 12.3652 2.10946C13.7722 3.51645 14.4757 5.22592 14.4757 7.23785C14.4757 8.02216 14.3734 8.73384 14.1688 9.37289C13.9642 10.0126 13.6914 10.5712 13.3504 11.0486L20 17.7238L17.7238 19.9744ZM7.23785 11.2532C8.36317 11.2532 9.3139 10.8651 10.09 10.089C10.8655 9.31355 11.2532 8.36317 11.2532 7.23785C11.2532 6.11253 10.8655 5.16181 10.09 4.38568C9.3139 3.61023 8.36317 3.22251 7.23785 3.22251C6.11253 3.22251 5.16215 3.61023 4.3867 4.38568C3.61057 5.16181 3.22251 6.11253 3.22251 7.23785C3.22251 8.36317 3.61057 9.31355 4.3867 10.089C5.16215 10.8651 6.11253 11.2532 7.23785 11.2532Z" fill={villager.text_color} />
            </svg>
          </a>
          <p>{villager.subtype}</p>
          <label>Hobby</label>
          <label>Catch Phrase</label>
          <p>{villager.hobby}</p>
          <p>{villager.catchPhrase}</p>
          <label>Quote</label>
          <p>"{villager.saying}"</p>
        </div>
      </div>
      <div className="button-row">
        {
          villager.id > 1 && (
            <button onClick={() => setVillagerData(villager.id - 1)} className="close-btn">
              <img src={PrevIcon} alt="" />
              <span>Previous</span>
            </button>
          )
        }
        <button onClick={() => showVilDetailPopup()} className="close-btn">
          <img src={CloseIcon} alt="" />
          <span>Close</span>
        </button>
        <button onClick={() => setVillagerData(villager.id + 1)} className="close-btn">
          <img src={NextIcon} alt="" />
          <span>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Villager