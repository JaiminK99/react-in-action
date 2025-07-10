import React from "react";
import Proptype from "prop-types";

function ProfileCard({ name, title, exp, bio }) {
  return (
    <section className="profile-card">
      <img src="" alt="something" />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{exp}</p>
      <p>{bio}</p>
    </section>
  );
}

export default ProfileCard;
