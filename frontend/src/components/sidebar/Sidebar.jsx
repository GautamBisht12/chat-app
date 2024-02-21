import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 flex flex-col p-3 ">
      <SearchInput />
      <div className="divider px-3"></div>
      <div className="overflow-auto">
        <Conversations />
      </div>

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
