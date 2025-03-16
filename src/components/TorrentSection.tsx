
import { TorrentData } from "./TorrentCard";
import TorrentCard from "./TorrentCard";

interface TorrentSectionProps {
  title: string;
  torrents: TorrentData[];
}

const TorrentSection = ({ title, torrents }: TorrentSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {torrents.map((torrent) => (
          <TorrentCard key={torrent.id} torrent={torrent} />
        ))}
      </div>
    </section>
  );
};

export default TorrentSection;
