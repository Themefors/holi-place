import images from "../../public/images";


const aboutContent = {
  about: {
    title: "About Us",
    subtitle: "A Harmony of Spirituality and Modern Education",
    description: [
      "Our madrasa was established with the goal of providing a high-quality Islamic education alongside modern academic learning. Here, students not only study the Holy Quran and Hadith but also acquire essential skills for contemporary life.",
      "Our mission is to nurture students who can balance religious knowledge with modernity and become positive contributors to society."
    ],
    mission: "To provide excellent religious and modern education that shapes the next generation into knowledgeable and ethical citizens.",
    vision: "To be a well-organized and progressive madrasa serving as a beacon of light for the nation and society.",
    values: [
      "Sincerity and Integrity",
      "Dedication to Education",
      "Building Ethical and Ideal Individuals",
      "Community Service",
      "Global Perspective"
    ],
    button: {
      text: "Learn More",
      link: "/about"
    },
    images: [
      {
        src: images.image.about_1,
        alt: "Students studying in a classroom"
      },
      {
        src: images.image.about_2,
        alt: "Islamic teacher guiding a student"
      }
    ]
  }
}

export default aboutContent;
