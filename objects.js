var playlist = {name: "title"};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
 delete removeFromPlaylist.artistName;
 return removeFromPlaylist;
}