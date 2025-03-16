
import { Search } from "lucide-react";
import { useState } from "react";

const TorrentHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger an API call
  };

  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-torrent-purple">
              TorrentFlare
            </h1>
          </div>

          <form onSubmit={handleSearch} className="flex w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for torrents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input w-full"
            />
            <button type="submit" className="search-button">
              <Search size={20} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default TorrentHeader;
