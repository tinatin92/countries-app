import AboutDescription from "../../components/description/index";
import Image from "../../components/image/index";
import aboutImage from "@/assets/aboutpage.png";
import { Container } from "@/components/UI/container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import classes from "./index.module.css";

const ABOUT_PAGE__DATA = {
  "en": {
    title: "About AllGlobe",
    image: aboutImage,
    description:
      "Welcome to AllGlobe, your gateway to exploring the worlds diverse cultures, histories, and landscapes. Whether you're planning your next trip or simply curious about different nations, we provide comprehensive insights into countries from all corners of the globe. From detailed guides on geography, population, and languages to the unique traditions and must-visit attractions, AllGlobe is your trusted resource for discovering the world.",
  },
  "ka": {
    title: "ჩვენს შესახებ",
    image: aboutImage,
    description:
      "კეთილი იყოს თქვენი მობრძანება AllGlobe-ში, თქვენი კარიბჭე მსოფლიოს მრავალფეროვანი კულტურების, ისტორიებისა და პეიზაჟების შესასწავლად. მიუხედავად იმისა, გეგმავთ თქვენს მომავალ მოგზაურობას ან უბრალოდ გაინტერესებთ სხვადასხვა ერების შესახებ, ჩვენ გთავაზობთ ყოვლისმომცველ ინფორმაციას მსოფლიოს ყველა კუთხის ქვეყნების შესახებ. გეოგრაფიის, მოსახლეობისა და ენების დეტალური სახელმძღვანელოებიდან დაწყებული უნიკალური ტრადიციებითა და ღირსშესანიშნაობებით დამთავრებული, AllGlobe არის თქვენი სანდო რესურსი მსოფლიოს აღმოსაჩენად."
  }
};

const AboutView: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const [content, setContent] = useState<{ title: string; image: string; description: string } | null>(null);

  useEffect(() => {
    if (lang === "en" || lang === "ka") {
      setContent(ABOUT_PAGE__DATA[lang]);
    } else {
      setContent(ABOUT_PAGE__DATA.en); 
    }
  }, [lang]); 

  if (!content) {
    return <p>Loading...</p>; 
  }

  return (
    <section className={classes["about-section"]}>
      <Container>
        <div className={classes.container}>
          <AboutDescription title={content.title} description={content.description} />
          <Image image={content.image} title={content.title}/>  
        </div>
      </Container>
    </section>
  );
};

export default AboutView;
