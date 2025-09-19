import foodSvg from "../assets/food.svg";
import othersSvg from "../assets/others.svg";
import servicesSvg from "../assets/services.svg";
import transportSvg from "../assets/transport.svg";
import accomodationSvg from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Food service",
    icon: foodSvg,
  },
  others: {
    name: "Others service",
    icon: othersSvg,
  },
  service: {
    name: "Services",
    icon: servicesSvg,
  },
  transport: {
    name: "Transportation",
    icon: transportSvg,
  },
  accomodation: {
    name: "Accomodation",
    icon: accomodationSvg,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
