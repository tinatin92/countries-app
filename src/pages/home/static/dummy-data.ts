import countrieJapan from "@/assets/japan 2.png";
import heroImage from "@/assets/japan.png";
// import countrieEngland from '@/assets/london 2.webp';
// import countrieFrance from '@/assets/paris 2.jpeg';

export const HERO_SECTION__DATA: {
  [key: string]: {
    title: string;
    text: string;
    image: string;
  };
} = {
  "en": {
    title: "Around the world",
    text: "Discover cultures, landscapes, and stories from every country. Dive into unique traditions, local cuisines, and hidden gems that make our globe extraordinary.",
    image: heroImage,
  },
  "ka": {
    title: "მსოფლიოს გარშემო",
    text: "აღმოაჩინე კულტურები, ლანდშაფტები და ისტორიები ყოველი ქვეყნისგან. შეისწავლე უნიკალური ტრადიციები, ადგილობრივი სამზარეულო და ფარული ძვირფასობები, რაც ჩვენს პლანეტას განსაკუთრებულს ხდის.",
    image: heroImage,
  },
};

export const COUNTRIES__DATA: {
  title: {
    [key: string]: string;
  };
  capital: { 
    [key: string]: string;}
  population: string;
  image: string;
  description: {
    [key: string]: string;
  };
  id: string;
  like: number;
  isMarkedForDelete: boolean;
}[] = [
  {
    image: countrieJapan,
    title: {
      'en': "Japan",
      'ka': "იაპონია",
    },
    capital: {
      'en':"Tokyo",
      'ka': "იაპონია",
    },
    population: "125100000",
    description: {
      'en': "Japan, an island nation in East Asia, is known for its rich cultural heritage and technological advancement. Comprised of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—Japan boasts a unique blend of traditional and modern influences. The country is home to iconic landmarks such as Mount Fuji, ancient temples, and bustling cities like Tokyo, which is a global hub for technology, fashion, and cuisine. Japan's cultural legacy is profound, from the traditional arts of calligraphy and tea ceremonies to contemporary pop culture phenomena like anime and manga. The Japanese cuisine, famed for its fresh ingredients and meticulous presentation, includes dishes like sushi, ramen, and tempura. Festivals, such as Hanami (cherry blossom viewing) and Tanabata (Star Festival), reflect the deep appreciation for nature and tradition. Japan also emphasizes harmony with nature, evident in its gardens and architecture. With its efficient public transportation, especially the Shinkansen (bullet train), exploring the country is accessible and convenient. The Japanese people are known for their politeness and hospitality, making Japan a welcoming destination for travelers. Overall, Japan's unique juxtaposition of old and new captivates millions, drawing visitors to experience its enchanting culture and beauty.",
      'ka': "იაპონია, აღმოსავლეთ აზიაში მდებარე კუნძულოვანი ქვეყანა, ცნობილია თავისი მდიდარი კულტურული მემკვიდრეობით და ტექნოლოგიური განვითარებით. იაპონია შედგება ოთხი მთავარი კუნძულისგან — ჰონშუ, ჰოკაიდო, კიუშუ და სიკოკუ. ქვეყანას გააჩნია ტრადიციულისა და თანამედროვე კულტურების უნიკალური ნაზავი. აქ მდებარეობს ისეთი საკულტო ღირსშესანიშნაობები, როგორიცაა ფუჯის მთა, უძველესი ტაძრები და ისეთი ხალხმრავალი ქალაქები, როგორიცაა ტოკიო, რომელიც გლობალური ტექნოლოგიის, მოდისა და სამზარეულოს ცენტრია. იაპონიის კულტურული მემკვიდრეობა მოიცავს ტრადიციულ ხელოვნებებს, როგორიცაა კალიგრაფია და ჩაის ცერემონია, ასევე თანამედროვე პოპულარულ კულტურას, როგორიცაა ანიმე და მანგა. იაპონური სამზარეულო, რომელიც ცნობილია თავისი ახალი ინგრედიენტებითა და დახვეწილი პრეზენტაციით, მოიცავს ისეთ კერძებს, როგორიცაა სუში, რამენი და ტემპურა. ფესტივალები, როგორიცაა ჰანამი (ალუბლის ყვავილების ცქერა) და ტანაბატა (ვარსკვლავების ფესტივალი), გამოხატავენ ბუნებისადმი ღრმა პატივისცემას და ტრადიციების სიყვარულს. იაპონია ასევე ხაზს უსვამს ჰარმონიას ბუნებასთან, რაც ნათლად ჩანს მის ბაღებსა და არქიტექტურაში. ქვეყნის ეფექტური საზოგადოებრივი ტრანსპორტი, განსაკუთრებით შინკანსენი (სიჩქარის მატარებელი), გამარტივებულს ხდის ქვეყნის დათვალიერებას. იაპონელები ცნობილია თავიანთი თავაზიანობითა და სტუმართმოყვარეობით, რაც ამ ქვეყანას მისასალმებელ მიმართულებად აქცევს მოგზაურებისთვის. მთლიანობაში, იაპონიის უნიკალური ტრადიციებისა და თანამედროვეობის შერწყმა მილიონობით ადამიანს აჯადოებს, რომლებიც ჩამოდიან მისი მომხიბვლელი კულტურისა და სილამაზის გასაცნობად.",
    },
    id: "1",
    like: 0,
    isMarkedForDelete: false
  },
  {
    image: countrieJapan,
    title: {
      'en': "Japan",
      'ka': "იაპონია",
    },
    capital: {
      'en':"Tokyo",
      'ka': "იაპონია",
    },
    population: "125100000",
    description: {
      'en': "Japan, an island nation in East Asia, is known for its rich cultural heritage and technological advancement. Comprised of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—Japan boasts a unique blend of traditional and modern influences. The country is home to iconic landmarks such as Mount Fuji, ancient temples, and bustling cities like Tokyo, which is a global hub for technology, fashion, and cuisine. Japan's cultural legacy is profound, from the traditional arts of calligraphy and tea ceremonies to contemporary pop culture phenomena like anime and manga. The Japanese cuisine, famed for its fresh ingredients and meticulous presentation, includes dishes like sushi, ramen, and tempura. Festivals, such as Hanami (cherry blossom viewing) and Tanabata (Star Festival), reflect the deep appreciation for nature and tradition. Japan also emphasizes harmony with nature, evident in its gardens and architecture. With its efficient public transportation, especially the Shinkansen (bullet train), exploring the country is accessible and convenient. The Japanese people are known for their politeness and hospitality, making Japan a welcoming destination for travelers. Overall, Japan's unique juxtaposition of old and new captivates millions, drawing visitors to experience its enchanting culture and beauty.",
      'ka': "იაპონია, აღმოსავლეთ აზიაში მდებარე კუნძულოვანი ქვეყანა, ცნობილია თავისი მდიდარი კულტურული მემკვიდრეობით და ტექნოლოგიური განვითარებით. იაპონია შედგება ოთხი მთავარი კუნძულისგან — ჰონშუ, ჰოკაიდო, კიუშუ და სიკოკუ. ქვეყანას გააჩნია ტრადიციულისა და თანამედროვე კულტურების უნიკალური ნაზავი. აქ მდებარეობს ისეთი საკულტო ღირსშესანიშნაობები, როგორიცაა ფუჯის მთა, უძველესი ტაძრები და ისეთი ხალხმრავალი ქალაქები, როგორიცაა ტოკიო, რომელიც გლობალური ტექნოლოგიის, მოდისა და სამზარეულოს ცენტრია. იაპონიის კულტურული მემკვიდრეობა მოიცავს ტრადიციულ ხელოვნებებს, როგორიცაა კალიგრაფია და ჩაის ცერემონია, ასევე თანამედროვე პოპულარულ კულტურას, როგორიცაა ანიმე და მანგა. იაპონური სამზარეულო, რომელიც ცნობილია თავისი ახალი ინგრედიენტებითა და დახვეწილი პრეზენტაციით, მოიცავს ისეთ კერძებს, როგორიცაა სუში, რამენი და ტემპურა. ფესტივალები, როგორიცაა ჰანამი (ალუბლის ყვავილების ცქერა) და ტანაბატა (ვარსკვლავების ფესტივალი), გამოხატავენ ბუნებისადმი ღრმა პატივისცემას და ტრადიციების სიყვარულს. იაპონია ასევე ხაზს უსვამს ჰარმონიას ბუნებასთან, რაც ნათლად ჩანს მის ბაღებსა და არქიტექტურაში. ქვეყნის ეფექტური საზოგადოებრივი ტრანსპორტი, განსაკუთრებით შინკანსენი (სიჩქარის მატარებელი), გამარტივებულს ხდის ქვეყნის დათვალიერებას. იაპონელები ცნობილია თავიანთი თავაზიანობითა და სტუმართმოყვარეობით, რაც ამ ქვეყანას მისასალმებელ მიმართულებად აქცევს მოგზაურებისთვის. მთლიანობაში, იაპონიის უნიკალური ტრადიციებისა და თანამედროვეობის შერწყმა მილიონობით ადამიანს აჯადოებს, რომლებიც ჩამოდიან მისი მომხიბვლელი კულტურისა და სილამაზის გასაცნობად.",
    },
    id: "1",
    like: 0,
    isMarkedForDelete: false
  },
];
