module.exports = async (client) => {
    console.log(`${client.user.username} İsmi ile Bot Giriş Yaptı!`);
    var oyun = [
        "+help",
        "Quunix"];
 
   setInterval(function() {
     var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
 
 
    client.user.setStatus("dnd");
  
  client.user.setActivity(oyun[random],  { type:2 , url: "https://www.twitch.tv/eburudesu"});
}, 2 * 2500);
};//0 oynuyor
//1 yayında
//2 dinliyor
//3 izliyor
//5 Yarışma