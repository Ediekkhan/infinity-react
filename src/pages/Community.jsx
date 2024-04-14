import React from "react";
import "./Community.css";
import Desk from "../img/Team-rafiki 1.png";

function Community() {
  return (
    <div className="">
      <div className="mini-navbar ">
        <form>
          <label>
            <input
              className="search-bar"
              type="search"
              name="seacrh"
              placeholder="Search for communities  "
            />
          </label>
        </form>
        <button type="button" className="Saarch-btn">
          Create communities
        </button>
      </div>

      <div className="communities">
        <h3 className="text">Your Communities</h3>
        <p className="text">
          You are not in a community yet, Search or explore communities you may
          like
        </p>
      </div>

      <div className="last-section">
        <img src={Desk} alt="desks" />
        <h4 className="last-text">
          Discover Communities that share common interests as you
        </h4>
        <button type="button" className="Ex-btn">
          Explore
        </button>
      </div>

      <div className="modal-container">
        <div className="modalclose">
          <div className="modal-create">
            <h4>Create Community</h4>
            <p>Share your interest, host discussions and more</p>
          </div>

          <button type="button" className="close-btn">X</button>
        </div>

        <div className="community-name">
          <h4>Name</h4>
          <p>The name can be changed in the community setting</p>
          <input type="text" name="name" />
        </div>

        <div className="community-description">
          <h4>Description</h4>
          <p>Briefly Describe your community to show people what to expect</p>


          {/* edit text area */}
          <input type="text-area" name="description" />
        </div>
      </div>
    </div>
  );
}

export default Community;
