function Render() {
  const renderFrogsLeft = function () {
    $("#frogsLeft").text(`${clockLefts} Clocks left`);
  };
  const addMainElements = function () {
    $("body").append(`
                  <div id="holder">
                      <h3 id="time">- SecondsLeft</h3>
                      <div id="buttoms">
                      <h3 id="frogsLeft">-Clocks Left</h3>
                      <button id="start">start</button>
                      <h2 id="level">level</h2>
                      </div>
                  </div>
                  `);
    $("#time").after(`<div id="playGround">
        </div>`);
    Events().addActionToSart($("#start"));
  };
  const renderPlayGround = function () {
    $("#playGround").remove();
    $("#time").after(`<div id="playGround">
        </div>`);
    $("#start").text("Catch the Frog");
    for (i = 0; i < clockLefts; i++) {
      addClock(i);
    }
  };
  function addClock(id) {
    $("#playGround").append(
      `<i id="${id}" class="clock far fa-clock fa-${id + 2}x"></i>`
    );

    Events().clickOnClock($(`#${id}`));
    docRandomColor($(`#${id}`));
    randomPosition(id);
  }
  const resetValues = function () {
    $("#frogsLeft").text("-Clocks Left");
    $("#start").text("Start");
    level = 1;
    clockLefts = level;
    TimeLeft = 5;
  };
  const pausTheGame = function () {
    $("#playGround").empty();
    $("#playGround").append("<h1>time is finished you lost</h1>");
    resetValues();
  };
  const renderTimeOut = function (text) {
    $("#time").text(text);
  };
  const renderLevel = function () {
    $("#level").text(level + " level");
  };
  const flashTimerForLevel = function (condition) {
    if (condition) $("#time").css("color", "yellow");
    else $("#time").css("color", "black");
  };
  const flashTimerForTime = function (condition) {
    if (condition) $("#time").css("color", "red");
    else $("#time").css("color", "black");
  };
  return {
    addMainElements: addMainElements,
    renderPlayGround: renderPlayGround,
    renderFrogsLeft: renderFrogsLeft,
    pausTheGame: pausTheGame,
    resetValues: resetValues,
    renderTimeOut: renderTimeOut,
    renderLevel: renderLevel,
    flashTimerForLevel: flashTimerForLevel,
    flashTimerForTime: flashTimerForTime,
  };
}
