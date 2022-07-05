import React from 'react'
import VillagerList from '../villagers.json';
import { useState } from "react"


function Villagers({ query, showVilDetailPopup, setVilInfo }) {
    const [villagers, setVillagers] = useState(VillagerList)

    let name = Object.values(villagers).filter(vil => vil.name.nameUSen.includes(query))
    let personality = Object.values(villagers).filter(vil => vil.personality.includes(query))
    let species = Object.values(villagers).filter(vil => vil.species.includes(query))

    return (
        <div className='villagers'>
            {
                Object.keys(name).length != 0 && (
                    <div className='villager-container'>
                        {
                            name.map((villager) => (
                                <div className="villager">
                                    <div className="title" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }} >
                                        {villager.name.nameEUen}
                                    </div>
                                    <img onClick={() => { setVilInfo(villager); showVilDetailPopup() }} src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" loading="lazy" />
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                Object.keys(personality).length != 0 && (
                    <div className='villager-container'>
                        {
                            personality.map((villager) => (
                                <div className="villager">
                                    <div className="title" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }} >
                                        {villager.name.nameEUen}
                                    </div>
                                    <img onClick={() => { setVilInfo(villager); showVilDetailPopup() }} src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" loading="lazy" />
                                </div>
                            ))
                        }
                    </div>
                )
            }

            {
                Object.keys(species).length != 0 && (
                    <div className='villager-container'>
                        {
                            species.map((villager) => (
                                <div className="villager">
                                    <div className="title" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }} >
                                        {villager.name.nameEUen}
                                    </div>
                                    <img onClick={() => { setVilInfo(villager); showVilDetailPopup() }} src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" loading="lazy" />
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Villagers