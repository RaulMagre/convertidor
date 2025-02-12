// Funcionalidad para detectar la unidad del input, contraria a la del resultado
export const detectUnit = (resultUnit) => {
    if (resultUnit === "miles") {
      return "km";
    } else if (resultUnit === "km") {
      return "miles";
    } else if (resultUnit === "metres") {
      return "ft";
    } else if (resultUnit === "ft") {
      return "metres";
    } else if (resultUnit === "inches") {
      return "cm";
    } else if (resultUnit === "cm") {
      return "inches";
    } else {
      return "";
    }
  }

