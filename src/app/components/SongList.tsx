'use client';

import { Song } from '../data/songs';
import { motion } from 'framer-motion';
import { listItemVariants } from '../utils/transitions';

interface SongListProps {
  songs: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

export default function SongList({ songs, currentSongIndex, onSongSelect }: SongListProps) {
  const currentSongId = songs[currentSongIndex]?.id;
  
  // Container variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  return (
    <motion.div 
      className="w-full max-w-md mx-auto bg-white text-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <motion.h2 
          className="text-xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Songs
        </motion.h2>
        <motion.div 
          className="space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {songs.map((song, index) => (
            <motion.div 
              key={song.id}
              onClick={() => onSongSelect(index)}
              className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                song.id === currentSongId ? 'bg-green-500 bg-opacity-10' : 'hover:bg-gray-50'
              }`}
              variants={listItemVariants}
              whileHover={{ scale: 1.01, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-10 w-10 flex-shrink-0 mr-3">
                <img 
                  src={song.cover} 
                  alt={song.album} 
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${
                  song.id === currentSongId ? 'text-green-600' : 'text-gray-800'
                }`}>
                  {song.title}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {song.artist}
                </p>
              </div>
              <div className="ml-2 text-xs text-gray-500">
                {song.duration}
              </div>
              <div className="ml-2">
                {song.id === currentSongId && (
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 text-green-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                  </motion.svg>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 