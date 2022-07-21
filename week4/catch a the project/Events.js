function Events() {
  const addActionToSart = function (buttom) {
    $(buttom).on("click", function () {
      Render().renderPlayGround();
      Render().renderLevel();
      renderTime(TimeLeft);
    });
  };
  const clickOnClock = function (clock) {
    $(clock).on("click", function () {
      Render().flashTimerForLevel(false);
      if (TimeLeft <= 3) {
        Render().flashTimerForTime(true);
      }
      if (levelFuntion()) {
        Render().renderLevel();
      }
      Render().renderFrogsLeft();
      Render().renderPlayGround();
    });
  };
  return {
    addActionToSart: addActionToSart,
    clickOnClock: clickOnClock,
  };
}
