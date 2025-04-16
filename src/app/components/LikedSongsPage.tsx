import React from 'react';
import { songs } from '../data/songs';
import SongList from './SongList';

interface LikedSongsPageProps {
  onClose: () => void;
  onSongSelect: (index: number) => void;
}

const LikedSongsPage: React.FC<LikedSongsPageProps> = ({ onClose, onSongSelect }) => {
  // For demo purposes, let's assume the first 10 songs are liked
  const likedSongs = songs.slice(0, 10);
  
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-white">
      {/* Header with subtle gradient */}
      <div className="relative overflow-hidden h-48 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 grid-rows-6 gap-1 sm:gap-2">
            {Array(48).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-indigo-400 rounded-full opacity-30" style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 left-0 p-3 sm:p-4 md:p-6">
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2 bg-white/90 hover:bg-white shadow-sm rounded-full text-gray-700 transition-colors"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 flex items-end">
          <div className="mr-3 sm:mr-4 md:mr-6 bg-white rounded-xl p-2 sm:p-3 md:p-4 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-500">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <div>
            <div className="text-gray-600 text-xs md:text-sm font-medium mb-1">PLAYLIST</div>
            <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">Liked Songs</h1>
            <div className="flex items-center text-gray-500 text-xs md:text-sm">
              <span className="font-medium">You</span>
              <span className="mx-1">•</span>
              <span>{likedSongs.length} songs</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-3 sm:p-4 md:p-6 bg-white">
        {/* Action buttons */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
          <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-indigo-600 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-105 transition-transform">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
          </button>
          
          <button className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
        
        {/* Songs list table format - responsive with hidden columns on smaller screens */}
        <div className="w-full mb-6 sm:mb-8 overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-2 sm:px-3 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th scope="col" className="px-2 sm:px-3 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Album</th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Artist</th>
                <th scope="col" className="px-2 sm:px-3 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {likedSongs.map((song, index) => (
                <tr 
                  key={song.id} 
                  onClick={() => onSongSelect(index)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-2 sm:px-3 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{index + 1}</td>
                  <td className="px-2 sm:px-3 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                        <img className="h-8 w-8 sm:h-10 sm:w-10 rounded-md shadow-sm" src={song.cover} alt="" />
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-800 truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">{song.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{song.album}</td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{song.artist}</td>
                  <td className="px-2 sm:px-3 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{song.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Find more songs section */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-5 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Find more songs you'll like</h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Explore new music based on your taste.</p>
          <button className="px-4 sm:px-5 py-1.5 sm:py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium text-xs sm:text-sm transition-colors shadow-sm">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikedSongsPage; 