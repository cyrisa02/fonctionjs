function datesInterval(begin, end, test) {
  console.log(begin.getTime());
  const isBetween = test > begin && test < end;
  return isBetween;
}

console.log(
  datesInterval(
    new Date(2007, 05, 30), // depuis le 1er janv 1970 en seconde
    new Date(2007, 06, 30),
    new Date(2006, 06, 15)
  )
);
