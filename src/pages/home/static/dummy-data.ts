import countrieJapan from "@/assets/japan 2.png";
import heroImage from "@/assets/japan.png";
import countrieEngland from '@/assets/london 2.webp';
import countrieFrance from '@/assets/paris 2.jpeg';

export const HERO_SECTION__DATA: {
  title: string;
  text: string;
  image: string;
} = {
  title: "Around the world",
  text: "Discover cultures, landscapes, and stories from every country. Dive into unique traditions, local cuisines, and hidden gems that make our globe extraordinary.",
  image: heroImage,
};

export const COUNTRIES__DATA: {
  title: string;
  capital: string;
  population: string;
  image: string;
  description: string;
  id: string;
  like: number
}[] = [
  {
    image: countrieJapan,
    title: "Japan",
    capital: "Tokyo",
    population: "125100000",
    description: "Japan, an island nation in East Asia, is known for its rich cultural heritage and technological advancement. Comprised of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—Japan boasts a unique blend of traditional and modern influences. The country is home to iconic landmarks such as Mount Fuji, ancient temples, and bustling cities like Tokyo, which is a global hub for technology, fashion, and cuisine. Japan's cultural legacy is profound, from the traditional arts of calligraphy and tea ceremonies to contemporary pop culture phenomena like anime and manga. The Japanese cuisine, famed for its fresh ingredients and meticulous presentation, includes dishes like sushi, ramen, and tempura. Festivals, such as Hanami (cherry blossom viewing) and Tanabata (Star Festival), reflect the deep appreciation for nature and tradition. Japan also emphasizes harmony with nature, evident in its gardens and architecture. With its efficient public transportation, especially the Shinkansen (bullet train), exploring the country is accessible and convenient. The Japanese people are known for their politeness and hospitality, making Japan a welcoming destination for travelers. Overall, Japan's unique juxtaposition of old and new captivates millions, drawing visitors to experience its enchanting culture and beauty.",
    id: "1",
    like: 0,
  },
  {
    image: countrieEngland,
    title: "Great Britain",
    capital: "London",
    population: "56000000",
    description: "Great Britain, comprising England, Scotland, and Wales, is an island nation steeped in rich history and cultural diversity. With a population of approximately 56 million, it has played a pivotal role in global affairs, notably during the British Empire's expansion. London, the capital, is a vibrant metropolis filled with iconic landmarks like the Tower of London, Buckingham Palace, and the British Museum, which houses countless treasures. The rich literary tradition is highlighted by famous authors such as William Shakespeare, Charles Dickens, and J.K. Rowling, whose works continue to influence literature worldwide. Each region of Great Britain offers distinct attractions: Scotland boasts breathtaking highlands and the historic Edinburgh Castle, while Wales is renowned for its stunning coastlines and the majestic Snowdonia National Park. The countryside, with its rolling hills and charming villages, invites exploration. Great Britain is also known for its cultural festivals, music, and sports, particularly football, which unites communities across the nation. The combination of rich history, stunning landscapes, and vibrant culture makes Great Britain a fascinating destination, where visitors can delve into centuries of tradition while enjoying contemporary life in bustling cities.",
    id: "2",
    like: 0,
  },
  {
    image: countrieFrance,
    title: "France",
    capital: "Paris",
    population: "67000000", 
    description: "France, located in Western Europe, is celebrated for its art, fashion, gastronomy, and history. With a population of around 67 million, it is one of the world's leading cultural and economic centers. Paris, the capital, is often referred to as the “City of Light,” famous for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. The country's diverse landscape ranges from the picturesque vineyards of Bordeaux to the stunning beaches of the French Riviera and the majestic Alps. France is renowned for its culinary excellence, with a rich tradition of wine-making, cheese production, and exquisite pastries. French cuisine is celebrated worldwide, influencing culinary practices globally. The French lifestyle is characterized by a strong emphasis on family, leisure, and enjoyment, with an array of festivals, art exhibitions, and music events throughout the year. The country’s rich history, from the reign of Louis XIV to the French Revolution, has shaped its cultural identity. France's commitment to preserving its heritage is evident in its historical sites, museums, and cultural institutions. As a top travel destination, France captivates millions of visitors eager to explore its vibrant culture and breathtaking scenery.",
    id: "3",
    like: 0,
  },
];
