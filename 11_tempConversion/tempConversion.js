const roundToOneDecimalPlace = function(fltTemp) {
  const FLT_ROUNDED_TEMP = Math.round(fltTemp * 10) / 10;
  return FLT_ROUNDED_TEMP;
}

const convertToCelsius = function(intFahrenheit) {
  const FLT_FAHRENHEIT = (intFahrenheit - 32) * 5 / 9;
  const FLT_ROUNDED_FAHRENHEIT = roundToOneDecimalPlace(FLT_FAHRENHEIT);
  return FLT_ROUNDED_FAHRENHEIT;
};

const convertToFahrenheit = function(intCelsius) {
  const FLT_CELSIUS = (intCelsius * 9 / 5) + 32;
  const FLT_ROUNDED_CELSIUS = roundToOneDecimalPlace(FLT_CELSIUS);
  return FLT_ROUNDED_CELSIUS;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
