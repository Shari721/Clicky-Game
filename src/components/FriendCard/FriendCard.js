import React from "react";
import "./FriendCard.css";

const SearchResults = props => (
  <ul className="FriendCard">
    {props.results.map(result => (
      <li key={result} className="FriendCard">
        <img alt="band" src={result} className="img-responsive" />
      </li>
    ))}
  </ul>
);

export default FriendCard;
