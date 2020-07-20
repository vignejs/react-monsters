/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw from "twin.macro";

import { Card } from "./Card";

export const CardList = (props) => (
    <div
        css={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-3 sm:px-12 lg:px-16`}
        className="card-list"
    >
        {props.monsters.map((monster) => (
            <Card monster={monster} />
        ))}
    </div>
);
