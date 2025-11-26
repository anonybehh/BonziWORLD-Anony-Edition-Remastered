function bsod(code) {
  socket.disconnect();
  $("#bsod").show();
  $("#stopcode").text(code);
  socket.disconnect();
}
