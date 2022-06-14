import { deleteUser, getAllUsers } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../createAxiosInstance";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const msg = useSelector((state) => state.users?.msg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.users.users?.allUsers);
  const axiosJWT = createAxios(user, dispatch, loginSuccess);

  const handleDelete = (id) => {
    deleteUser(user?.accessToken, dispatch, id, axiosJWT);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`Your role: ${user?.admin ? `Admin` : `User`}`}
      </div>
      <div className="home-userlist">
        {userData?.map((user) => {
          return (
            <div className="user-container" key={user.username}>
              <div className="home-user">{user.username}</div>
              <div
                className="delete-user"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </div>
            </div>
          );
        })}
      </div>
      <div className="errorMsg">{msg}</div>
    </main>
  );
};

export default HomePage;
