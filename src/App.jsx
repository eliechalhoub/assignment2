import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import UserGrid from "./components/UserGrid";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SearchBar />
      <UserGrid />
    </div>
  );
};

export default App;
