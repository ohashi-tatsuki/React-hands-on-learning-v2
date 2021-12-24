// デジタル時計(関数型プログラミングアプローチ)

// 固定値の取得
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = () => console.log(message);

// データの変換を行う
const serializeClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM"
});

// 高階関数
const display = target => time => target(time);

const formatClock = format => time =>
  format.replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm);

const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? "0" + clockTime[key] : "" + clockTime[key]
});

// 関数の合成
const compose = (...fns) => (arg) =>
  fns.reduce((composed, f) => f(composed), arg);

const convertToCivilianTime = clockTime => 
  compose(
    appendAMPM,
    civilianHours
)(clockTime);

const doubleDigits = civilianTame =>
    compose(
      prependZero("hours"),
      prependZero("minutes"),
      prependZero("seconds"),
    )(civilianTame);

// 以下に関数がまとめられていて、コードの読みやすさを感じる
const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );

startTicking();