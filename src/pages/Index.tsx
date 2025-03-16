
import { useState } from "react";
import TorrentHeader from "../components/TorrentHeader";
import CategoryFilters from "../components/CategoryFilters";
import TorrentSection from "../components/TorrentSection";
import { trendingTorrents, newMovies, filterTorrentsByCategory } from "../data/mockData";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredTrending = filterTorrentsByCategory(trendingTorrents, selectedCategory);
  const filteredNewMovies = filterTorrentsByCategory(newMovies, selectedCategory);

  return (
    <div className="min-h-screen bg-torrent-dark-bg">
      <TorrentHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <CategoryFilters 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        
        {filteredTrending.length > 0 && (
          <TorrentSection 
            title="Trending Torrents" 
            torrents={filteredTrending} 
          />
        )}
        
        {filteredNewMovies.length > 0 && (
          <TorrentSection 
            title="New Movies" 
            torrents={filteredNewMovies} 
          />
        )}
        
        {filteredTrending.length === 0 && filteredNewMovies.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-xl font-bold mb-2 text-white">No torrents found</h2>
            <p className="text-gray-400">
              There are no torrents available in the {selectedCategory} category.
            </p>
          </div>
        )}
        
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p className="mb-2">
            This is a fictional mockup for educational purposes only. TorrentFlare does not host or 
            distribute any real torrent files or copyrighted content.
          </p>
          <p className="mb-4">
            All content shown is for demonstration purposes only. No actual files are available for 
            download. Please respect copyright laws and support content creators.
          </p>
          <p>© 2024 TorrentFlare - A Fictional Torrent Aggregator Design</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
