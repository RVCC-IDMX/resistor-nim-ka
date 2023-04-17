/* resistor.js */

/*
  electronic resistors have colored bands where each color represents a numerical number
  Electrical engineers can read the colors and
  determine the resistance value in Ohms

  see this resistor calculator for help
   http://bit.ly/2NjS274
*/

function decodeColor(color) {
  return {
    silver: -2,
    gold: -1,
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }[color]
}

function decodeTolerance(color) {
  return {
    brown: 1,
    red: 2,
    green: 0.5,
    blue: 0.25,
    violet: 0.1,
    grey: 0.05,
    gold: 5,
    silver: 10,
  }[color]
}

const getResistorOhms = (color1, color2, multiplier, tolerance) => {
  let value = (decodeColor(color1) * 10 + decodeColor(color2)) * (10 ** decodeColor(multiplier))
  const toleranceValue = decodeTolerance(tolerance)

  let i = -1

  while (value >= 1000 && i < 2) {
    value /= 1000
    i++
  }

  const valueStr = value + ("kMG"[i] ?? "")

  return `Resistor value: ${valueStr} Ohms ±${toleranceValue}%`
}

export { getResistorOhms }
