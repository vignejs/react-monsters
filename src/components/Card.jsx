/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw from "twin.macro";

export const Card = (props) => (
    <div
        css={[
            tw`rounded-lg overflow-hidden shadow-xl py-10 bg-white cursor-pointer transform transition duration-200 ease-in-out hover:-translate-y-1`,
        ]}
        className="card-container"
    >
        <img
            css={tw`rounded-full shadow-xl bg-gray-300 mx-auto mb-5`}
            alt="monster"
            src={`https://robohash.org/${props.monster.name}?set=set1&size=150x150`}
        />
        <h2 css={tw`text-gray-900 font-semibold text-lg`}>
            {props.monster.name}
        </h2>
        <p css={tw`text-gray-700`}> {props.monster.email} </p>
        <a
            href={props.monster.website}
            css={tw`text-gray-700 hover:text-purple-900`}
        >
            {props.monster.website}
        </a>
    </div>
);
