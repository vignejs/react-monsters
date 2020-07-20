/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw from "twin.macro";

export const SearchBox = (props) => (
    <input
        css={tw`border-2 border-gray-300 focus:border-purple-900 focus:outline-none bg-white h-10 px-5 pr-16 rounded-md text-sm`}
        placeholder="Search"
        onChange={props.onSearchChange}
    />
);
