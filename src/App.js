/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw from "twin.macro";
import { useState, useEffect } from "react";

import { CardList } from "./components/CardList";
import { SearchBox } from "./components/SearchBox";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((robots) => setRobots(robots));
    }, []);

    return (
        <div
            css={tw`text-center p-6 font-sans-0 max-w-screen-lg mx-auto`}
            className="App"
        >
            <h1 css={tw`text-5xl py-6 text-center text-gray-900 font-semibold`}>
                Robots
            </h1>
            <SearchBox onSearchChange={onSearchChange} />
            <CardList robots={filteredRobots} />
        </div>
    );
};

export default App;
