import { useState } from "react";
import NavBar from "../components/molecules/NavBar";
import SearchBar from "../components/molecules/SearchBar";
import UserGrid from "../components/organisms/UserGrid";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <SearchBar onSearch={setSearch} />
      <UserGrid search={search} />
    </div>
  );
};

export default Dashboard;
