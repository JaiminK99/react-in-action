import React from "react";
import Proptype from "prop-types";

function ProfileCard({ img, name, title, exp, bio }) {
  return (
    <section className="profile-card">
      <img src={img} alt="something" />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{exp} years</p>
      <p>{bio}</p>
    </section>
  );
}

ProfileCard.prototypes = {
  name: Proptype.string.isRequired,
  title: Proptype.string.isRequired,
  exp: Proptype.number.isRequired,
  bio: Proptype.string,
};

ProfileCard.defaultProps = {
  bio: "No bio provided",
};

export default ProfileCard;
