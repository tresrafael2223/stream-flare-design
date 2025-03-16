
import { Download, Users } from "lucide-react";
import { useState } from "react";
import StarRating from "./StarRating";
import TorrentComments from "./TorrentComments";

export interface TorrentData {
  id: string;
  title: string;
  category: string;
  size: string;
  seeders: number;
  leechers: number;
  rating: number;
  imageUrl: string;
  comments: {
    username: string;
    text: string;
    timestamp: string;
  }[];
}

interface TorrentCardProps {
  torrent: TorrentData;
}

const TorrentCard = ({ torrent }: TorrentCardProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="torrent-card animate-fade-in">
      <div className="relative">
        <img
          src={torrent.imageUrl}
          alt={torrent.title}
          className="w-full aspect-[2/3] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="flex justify-between items-center">
            <span className="bg-torrent-purple/90 text-white text-xs px-2 py-1 rounded">
              {torrent.category}
            </span>
            <span className="bg-torrent-dark-bg/90 text-white text-xs px-2 py-1 rounded">
              {torrent.size}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-white mb-2 line-clamp-2 h-12">
          {torrent.title}
        </h3>
        
        <div className="flex justify-between items-center mb-2">
          <StarRating initialRating={torrent.rating} readonly />
          
          <div className="flex items-center gap-3">
            <div className="flex items-center text-green-500">
              <Users size={14} />
              <span className="text-xs ml-1">{torrent.seeders}</span>
            </div>
            <div className="flex items-center text-red-500">
              <Users size={14} />
              <span className="text-xs ml-1">{torrent.leechers}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setShowComments(!showComments)}
            className="text-xs text-gray-400 hover:text-torrent-purple"
          >
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
          
          <button className="bg-torrent-purple text-white p-2 rounded-full hover:bg-torrent-dark-purple transition-colors">
            <Download size={16} />
          </button>
        </div>
        
        {showComments && (
          <div className="mt-4">
            <TorrentComments comments={torrent.comments} torrentId={torrent.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TorrentCard;
