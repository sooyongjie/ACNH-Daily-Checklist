import React from 'react'
import VillagerList from '../villagers.json';
import { useState, useEffect } from "react"


function Villagers({ query, setVillagerData }) {
    const [villagers, setVillagers] = useState(VillagerList)
    const [count, setCount] = useState(42)

    let name = Object.values(villagers).filter(vil => vil.name.nameUSen.includes(query))
    let personality = Object.values(villagers).filter(vil => vil.personality.includes(query))
    let species = Object.values(villagers).filter(vil => vil.species.includes(query))

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

            if (bottom) {
                setCount(count + 42)
            }
        })
    })

    return (
        <div className='villagers'>
            {
                Object.keys(name).length != 0 && (
                    <div className='villager-container'>
                        {
                            name.slice(0, count).map((villager) => (
                                <div className="villager">
                                    <div className="title" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }} >
                                        {villager.name.nameEUen}
                                    </div>
                                    <img onClick={() => { setCount(42); setVillagerData(villager.id); }} src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" loading="lazy" />
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                query != "" && Object.keys(personality).length != 0 && (
                    <div className='villager-container'>
                        {
                            personality.map((villager) => (
                                <div className="villager">
                                    <div className="title" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }} >
                                        {villager.name.nameEUen}
                                    </div>
                                    <img onClick={() => { setCount(42); setVillagerData(villager.id); }} src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" loading="lazy" />
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                query != "" && Object.keys(species).length != 0 && (
                    <div className='villager-container'>
                        {
                            species.map((villager) => (
                                <div className="villager">
                                    <div className="title" style={{ backgroundColor: villager.bubble_color, color: villager.text_color }} >
                                        {villager.name.nameEUen}
                                    </div>
                                    <img onClick={() => { setCount(42); setVillagerData(villager.id); }} src={require(`../image/villagers_poster/NpcNml${villager.file_name}.png`)} alt="" loading="lazy" />
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