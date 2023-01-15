import { useSelector } from "react-redux";

import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const profile = useSelector((state) => state.auth.userprofile);

  return (
    <main className={classes.profile}>
      <h2>My User Profile : {profile}</h2>
    </main>
  );
};

export default UserProfile;
