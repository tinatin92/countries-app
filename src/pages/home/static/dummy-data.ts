import countrieJapan from "@/assets/japan 2.png";
import heroImage from "@/assets/japan.png";
import countrieEngland from '@/assets/london 2.webp';
import countrieFrance from '@/assets/paris 2.jpeg';

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
    image: countrieEngland,
    title: {
      'en': "Great Britain",
      'ka': "ბრიტანეთი",
    },
    capital: {
      'en':"London",
      'ka': "ლონდონი",
    },
    population: "67100000",
    description: {
      'en': "nia National Park. The countryside, with its rolling hills and charming villages, invites exploration. Great Britain is also known for its cultural festivals, music, and sports, particularly football, which unites communities across the nation. The combination of rich history, stunning landscapes, and vibrant culture makes Great Britain a fascinating destination, where visitors can delve into centuries of tradition while enjoying contemporary life in bustling cities.",
      "ka": "„დიდი ბრიტანეთი, რომელიც მოიცავს ინგლისს, შოტლანდიას და უელსს, არის კუნძულოვანი ქვეყანა, რომელიც გაჟღენთილია მდიდარი ისტორიით და კულტურული მრავალფეროვნებით. დაახლოებით 56 მილიონი მოსახლეობით, მან გადამწყვეტი როლი ითამაშა გლობალურ საქმეებში, განსაკუთრებით ბრიტანეთის იმპერიის ექსპანსიის დროს. ლონდონი. , დედაქალაქი, არის ენერგიული მეტროპოლია, რომელიც სავსეა საკულტო ღირშესანიშნაობებით, როგორიცაა ლონდონის კოშკი, ბუკინგემის სასახლე და ბრიტანეთის მუზეუმი, სადაც განთავსებულია უთვალავი საგანძური. როულინგი, რომლის ნამუშევრები აგრძელებენ გავლენას ლიტერატურაზე მთელს მსოფლიოში, დიდი ბრიტანეთის თითოეული რეგიონი გამოირჩევა განსაცვიფრებელი ატრაქციონებით: შოტლანდია ამაყობს თვალწარმტაცი მთიანეთებით და ისტორიული ედინბურგის ციხესიმაგრით, ხოლო უელსი ცნობილია თავისი განსაცვიფრებელი სანაპიროებით და დიდებული სნოუდონიის ეროვნული პარკით ბორცვები და მომხიბლავი სოფლები, იწვევენ გამოკვლევებს, დიდი ბრიტანეთი ასევე ცნობილია თავისი კულტურული ფესტივალებით, მუსიკით და სპორტით, განსაკუთრებით ფეხბურთით, რომელიც აერთიანებს საზოგადოებებს მთელი ქვეყნის მასშტაბით. მდიდარი ისტორიის, განსაცვიფრებელი პეიზაჟების და ცოცხალი კულტურის ერთობლიობა დიდ ბრიტანეთს აქცევს მომხიბვლელ ადგილად, სადაც მნახველებს შეუძლიათ მრავალსაუკუნოვანი ტრადიციების ჩაღრმავება და დატკბნენ თანამედროვე ცხოვრებით ხმაურიან ქალაქებში."
    },
    id: "2",
    like: 0,
    isMarkedForDelete: false
  },
  {
    image: countrieFrance,
    title: {
      'en': "France",
      'ka': "საფრანგეთი",
    },
    capital: {
      'en':"Paris",
      'ka': "პარიზი",
    },
    population: "5600000",
    description: {
      'en': "France, located in Western Europe, is celebrated for its art, fashion, gastronomy, and history. With a population of around 67 million, it is one of the world's leading cultural and economic centers. Paris, the capital, is often referred to as the “City of Light,” famous for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. The country's diverse landscape ranges from the picturesque vineyards of Bordeaux to the stunning beaches of the French Riviera and the majestic Alps. France is renowned for its culinary excellence, with a rich tradition of wine-making, cheese production, and exquisite pastries. French cuisine is celebrated worldwide, influencing culinary practices globally. The French lifestyle is characterized by a strong emphasis on family, leisure, and enjoyment, with an array of festivals, art exhibitions, and music events throughout the year. The country’s rich history, from ",
      "ka": "საფრანგეთი, რომელიც მდებარეობს დასავლეთ ევროპაში, ცნობილია თავისი ხელოვნებით, მოდის, გასტრონომიითა და ისტორიით. დაახლოებით 67 მილიონი მოსახლეობით, ის მსოფლიოს ერთ-ერთი წამყვანი კულტურული და ეკონომიკური ცენტრია. დედაქალაქ პარიზს ხშირად მოიხსენიებენ. როგორც სინათლის ქალაქი, რომელიც ცნობილია თავისი საკულტო ღირშესანიშნაობებით, როგორიცაა ეიფელის კოშკი, ლუვრის მუზეუმი და ღვთისმშობლის ტაძარი. დიდებული ალპები ცნობილია თავისი კულინარიული ბრწყინვალებით, ღვინის დამზადების მდიდარი ტრადიციით, დახვეწილი ფრანგული სამზარეულოთი, რომელიც გავლენას ახდენს კულინარიულ პრაქტიკაზე მთელს მსოფლიოში. დასვენება და სიამოვნება, მთელი წლის განმავლობაში ფესტივალების, ხელოვნების გამოფენებისა და მუსიკალური ღონისძიებებით, ქვეყნის მდიდარი ისტორიით"
    },
    id: "3",
    like: 0,
    isMarkedForDelete: false
  },
];
