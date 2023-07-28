import {React, useEffect} from "react";
import {connect} from "react-redux";
import { fetchUsers } from "../redux/users/UserActionCreator";

const UserContainer = ({userData, fetchUser}) => {
  useEffect(() => {
    fetchUser()
  },[])

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

// Keda wsalt le data bt3et el state el homa array of user
const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
