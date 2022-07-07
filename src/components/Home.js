import Villagers from './Villagers';
import Villager from './Villager';
import VillagerList from '../villagers.json';

import { useState } from "react"

function Home() {
    const [query, setQuery] = useState("")
    const [vilDetailPopup, showVilDetailPopup] = useState(false)
    const [vilInfo, setVilInfo] = useState([])
    const [villagers, setVillagersData] = useState(VillagerList)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const setVillagerData = (id) => {
        setVilInfo(Object.values(villagers)[--id])
        showVilDetailPopup(true)
    }

    const updateVillagers = (event) => {
        setQuery(capitalizeFirstLetter(event.target.value))
    }

    return (
        <div className="container">
            <div className="welcome-container">
                <div className="box">
                    <div className="box-header">
                        Welcome
                    </div>
                    <div className="box-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta possimus similique quos aut laborum tempore delectus unde, quaerat accusamus provident voluptas nobis minima magnam ab natus animi et. Nobis eos dicta corporis consequatur, alias saepe asperiores optio iusto reprehenderit?
                    </div>
                </div>
            </div>
            <div className="search-container">
                <input type="search" name="acnh-search" onInput={updateVillagers} value={query} placeholder="Search (Name, Species, Personality)" />
                <div className="dash"></div>
            </div>
            {vilDetailPopup && <Villager villager={vilInfo} setQuery={(query) => { setQuery(query) }} setVillagerData={(id) => { setVillagerData(id) }} showVilDetailPopup={() => { showVilDetailPopup(false) }} />}
            <Villagers query={query} setVillagerData={(id) => { setVillagerData(id) }} />
        </div>
    )
}


export default Home