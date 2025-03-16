
import { useState } from "react";

interface Comment {
  username: string;
  text: string;
  timestamp: string;
}

interface TorrentCommentsProps {
  comments: Comment[];
  torrentId: string;
}

const TorrentComments = ({ comments, torrentId }: TorrentCommentsProps) => {
  const [newComment, setNewComment] = useState("");
  const [displayedComments, setDisplayedComments] = useState(comments);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      username: "You",
      text: newComment,
      timestamp: new Date().toLocaleString(),
    };

    setDisplayedComments([...displayedComments, comment]);
    setNewComment("");
  };

  return (
    <div className="bg-torrent-light-bg rounded p-3 text-sm">
      <h4 className="font-medium mb-2 text-white">Comments</h4>
      
      <div className="space-y-3 max-h-40 overflow-y-auto mb-3">
        {displayedComments.length === 0 ? (
          <p className="text-gray-400 text-xs">No comments yet</p>
        ) : (
          displayedComments.map((comment, idx) => (
            <div key={idx} className="border-b border-gray-700 pb-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-xs text-torrent-purple">
                  {comment.username}
                </span>
                <span className="text-gray-500 text-xs">
                  {comment.timestamp}
                </span>
              </div>
              <p className="text-xs mt-1 text-gray-300">{comment.text}</p>
            </div>
          ))
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full bg-torrent-dark-bg text-white text-xs p-2 rounded border border-gray-700 focus:outline-none focus:border-torrent-purple"
        />
        <button
          type="submit"
          className="bg-torrent-purple text-white text-xs px-3 py-1 rounded hover:bg-torrent-dark-purple transition-colors"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default TorrentComments;
