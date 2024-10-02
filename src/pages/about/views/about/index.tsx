
import AboutDescription from "../../components/description"
import aboutImage from '@/assets/aboutpage.png'

const ABOUT_PAGE__DATA = {
    title: 'About AllGlobe',
    image:aboutImage,
    description: 'Welcome to AllGlobe, your gateway to exploring the worlds diverse cultures, histories, and landscapes. Whether youre planning your next trip or simply curious about different nations, we provide comprehensive insights into countries from all corners of the globe. From detailed guides on geography, population, and languages to the unique traditions and must-visit attractions, AllGlobe is your trusted resource for discovering the world.'
}

const AboutView :React.FC = () =>{

    return <AboutDescription {...ABOUT_PAGE__DATA}/>
}

export default AboutView