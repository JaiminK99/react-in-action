import React from "react";
import Proptype from "prop-types";
import "./ProfileCard.css";

function ProfileCard({ img, name, title, exp, bio }) {
  return (
    <section className="profile-card">
      <img className="profile-image" src={img} alt="something" />
      <div className="profile-info">
        <p className="profile-name">
          <strong>Name:</strong>
          {name}
        </p>
        <p className="profile-title">
          <strong>Title:</strong> {title}
        </p>
        <p className="profile-exp">
          <strong>Experience:</strong> {exp} years
        </p>
        <p className="profile-bio">
          <strong>Bio:</strong> {bio}
        </p>
      </div>
    </section>
  );
}

ProfileCard.propTypes = {
  name: Proptype.string.isRequired,
  title: Proptype.string.isRequired,
  exp: Proptype.number.isRequired,
  bio: Proptype.string,
};

ProfileCard.defaultProps = {
  bio: "No bio provided",
};

export default ProfileCard;
