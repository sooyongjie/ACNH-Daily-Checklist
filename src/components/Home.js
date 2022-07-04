import Villagers from './Villagers';
import { useState } from "react"


function Home() {
    const [query, setQuery] = useState("")

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
                <input type="search" name="acnh-search" onInput={updateVillagers} />
                <div className="dash"></div>
            </div>
            <Villagers query={query} />
        </div>
    )
}


export default Home