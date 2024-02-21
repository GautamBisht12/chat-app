import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { logout } = useLogout();
  return (
    <>
      <h1 className=" mt-auto">
        <BiLogOut
          color="white"
          onClick={logout}
          className="w-6 h-6 cursor-pointer"
        />
      </h1>
    </>
  );
};

export default LogoutButton;
