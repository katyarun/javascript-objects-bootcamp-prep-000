var playlist = { 'antonio vivaldi': 'the 4 seasons', 'seb bach': 'Allegro'};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist] : song});
}