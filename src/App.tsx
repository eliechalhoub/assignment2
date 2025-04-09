import NavBar from "./components/molecules/NavBar";
import SearchBar from "./components/molecules/SearchBar";
import UserGrid from "./components/organisms/UserGrid";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <SearchBar />
      <UserGrid />
    </div>
  );
};

export default App;
