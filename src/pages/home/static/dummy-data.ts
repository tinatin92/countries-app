import countrieJapan from "@/assets/japan 2.png";
import heroImage from "@/assets/japan.png";
import countrieEngland from "@/assets/london 2.webp";
import countrieFrance from "@/assets/paris 2.jpeg";

export const HERO_SECTION__DATA: {
  [key: string]: {
    title: string;
    text: string;
    image: string;
  };
} = {
  en: {
    title: "Around the world",
    text: "Discover cultures, landscapes, and stories from every country. Dive into unique traditions, local cuisines, and hidden gems that make our globe extraordinary.",
    image: heroImage,
  },
  ka: {
    title: "მსოფლიოს გარშემო",
    text: "აღმოაჩინე კულტურები, ლანდშაფტები და ისტორიები ყოველი ქვეყნისგან. შეისწავლე უნიკალური ტრადიციები, ადგილობრივი სამზარეულო და ფარული ძვირფასობები, რაც ჩვენს პლანეტას განსაკუთრებულს ხდის.",
    image: heroImage,
  },
};

type Country = {
  title: { [key: string]: string };
  capital: { [key: string]: string };
  population: string;
  image: string;
  description: { [key: string]: string };
  id: string;
  like: number;
  isMarkedForDelete: boolean;
}

export const COUNTRIES__DATA: Country[] = [
  {
    image: countrieJapan,
    title: {
      en: "Japan",
      ka: "იაპონია",
    },
    capital: {
      en: "Tokyo",
      ka: "იაპონია",
    },
    population: "125100000",
    description: {
      en: "Japan, an island nation in East Asia, is known for its rich cultural heritage...",
      ka: "იაპონია, აღმოსავლეთ აზიაში მდებარე კუნძულოვანი ქვეყანა...",
    },
    id: "1",
    like: 0,
    isMarkedForDelete: false,
  },
  {
    image: countrieEngland,
    title: {
      en: "Great Britain",
      ka: "ბრიტანეთი",
    },
    capital: {
      en: "London",
      ka: "ლონდონი",
    },
    population: "67100000",
    description: {
      en: "Great Britain, comprising England, Scotland, and Wales...",
      ka: "დიდი ბრიტანეთი, რომელიც მოიცავს ინგლისს, შოტლანდიას და უელსს...",
    },
    id: "2",
    like: 0,
    isMarkedForDelete: false,
  },
  {
    image: countrieFrance,
    title: {
      en: "France",
      ka: "საფრანგეთი",
    },
    capital: {
      en: "Paris",
      ka: "პარიზი",
    },
    population: "67000000",
    description: {
      en: "France, located in Western Europe, is celebrated for its art, fashion...",
      ka: "საფრანგეთი, რომელიც მდებარეობს დასავლეთ ევროპაში...",
    },
    id: "3",
    like: 0,
    isMarkedForDelete: false,
  },
];
