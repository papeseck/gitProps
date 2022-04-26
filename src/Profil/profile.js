import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div>
      <h1> Bonjour {props.name}</h1>
      <h1> Je suis {props.profession}</h1>
      <h1> {props.bio}</h1>
      <h2>{props.children}</h2>
    </div>
  );
}
Profile.defaultProps={
    name:"pape",
    profession:"etudiant"
}

export default Profile;
