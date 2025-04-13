import { useState } from "react";
import NavBar from "../components/molecules/NavBar";
import SearchBar from "../components/molecules/SearchBar";
import UserGrid from "../components/organisms/UserGrid";
import { useThemeStore } from "../store/ThemeStore";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const { darkMode } = useThemeStore();

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} min-h-screen`}>
      <NavBar />
      <SearchBar onSearch={setSearch} />
      <UserGrid search={search} />
    </div>
  );
};

export default Dashboard;
