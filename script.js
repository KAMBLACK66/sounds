const switchInput = document.getElementById("my-switch");
const second = document.getElementById("my-switch-2");
const bk = document.getElementById("valueIs-1");
const valueIs2 = document.getElementById("valueIs-2");
const cColors = document.getElementById("colors");

const playSound = (element, soundUrl) => {
  const audio = new Audio(soundUrl);

  element.addEventListener("change", () => {
    audio.play();
  });
};

playSound(
  switchInput,
  "https://res.cloudinary.com/diqy9grnq/video/upload/v1683424286/215772__otisjames__click_lhqjk1.mp3"
);
playSound(
  second,
  "https://res.cloudinary.com/diqy9grnq/video/upload/v1683426470/629020__kolombooo__button-click_rjgbr3.mp3"
);
playSound(
  bk,
  "https://res.cloudinary.com/diqy9grnq/video/upload/v1683428140/220206__gameaudio__beep-space-button_mve01g.mp3"
);
playSound(
  valueIs2,
  "https://res.cloudinary.com/diqy9grnq/video/upload/v1683428140/220206__gameaudio__beep-space-button_mve01g.mp3"
);
playSound(
  cColors,
  "https://res.cloudinary.com/diqy9grnq/video/upload/v1683432226/19989__acclivity__fingerplop4_ebbnrk.mp3"
);
