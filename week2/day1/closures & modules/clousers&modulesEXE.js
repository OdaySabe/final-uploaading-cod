const StringFormatter = function () {
  const skewerCase = function (text) {
    console.log(text.replace(" ", "/"));
  };

  const capitalizeFirst = function (text) {
    console.log(
      text.substring(0, 1).toUpperCase() + text.substring(1, text.length - 1)
    );
  };
  return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase,
  };
};
const formatter = StringFormatter();
formatter.capitalizeFirst("dorothy"); //should print Dorothy
formatter.skewerCase("blue box"); //should print blue-box
///////////////////////////
const Bank = function () {
  let money = 500;
  function deposit(amount) {
    money += amount;
  }
  function showBalance() {
    console.log(money);
  }
  return {
    showBalance: showBalance,
    deposit: deposit,
  };
};
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance();
///////////////////////
function SongsManager() {
  let dataBase = [];
  function addSong(name, Url) {
    let song = {
      name: "",
      Url: "",
    };
    song.Url = Url.substring(Url.indexOf("=") + 1, Url.length);
    song.name = name;
    dataBase.push(song);
  }
  function getSong(name) {
    for (i of dataBase) {
      if (i.name == name) {
        console.log("https://www.youtube.com/watch?v=" + i.Url);
        break;
      }
    }
  }
  function allSongs() {
    for (i in dataBase) {
      console.log(dataBase[i].name + " " + dataBase[i].Url);
    }
  }
  return {
    addSong: addSong,
    getSong: getSong,
    allSongs: allSongs,
  };
}
const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.allSongs();
