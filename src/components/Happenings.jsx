//import styled
import styled from "styled-components";

//import reusables
import { HeadingTwo } from "../reusables/HeadingTwo";
import { HappeningsCard } from "../reusables/HappeningsCard";

//import pictures
import Cartwheel from "../../public/images/cartwheel.png";

//data object for yogis
const happeningsData = [
  {
    picture: Cartwheel,
    title: "Wheel Pose Workshop",
    date: "23.04.2024",
    description:
      "This workshop will cover how you can improve, deepen and develop your backbends in a safe, injury-free and healthy way. We will go through simple but effective techniques to use the muscles necessary to create balance and reduce the risk of injury in your yoga practice...",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "I'm baby humblebrag tempor cronut, lomo copper mug elit yes plz. Hashtag cred exercitation viral neutral milk hotel.",
  },

  {
    picture: Cartwheel,
    title: "Dummy text?",
    date: "12.34.5678",
    description:
      "Retro mukbang woke messenger bag. In truffaut cillum farm-to-table wolf prism artisan iPhone cupidatat.",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "Af selvage pickled cloud bread gorpcore chillwave swag culpa marxism beard craft beer in nostrud disrupt.",
  },

  {
    picture: Cartwheel,
    title: "Dummy text?",
    date: "12.34.5678",
    description:
      "Tumeric jean shorts echo park nisi, artisan before they sold out grailed mixtape pabst pinterest.",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "Lorem keytar nostrud, hexagon dreamcatcher irure edison bulb sus beard roof party brunch. ",
  },

  {
    picture: Cartwheel,
    title: "Dummy text?",
    date: "12.34.5678",
    description:
      "Organic shoreditch minim try-hard, ennui bruh sint enim street art palo santo. ",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "Lorem keytar nostrud, hexagon dreamcatcher irure edison bulb sus beard roof party brunch.",
  },
];

//styles
const HappeningSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px 16px;

  @media all and (min-width: 744px) {
    padding: 64px 59px;
  }

  @media all and (min-width: 744px) {
    padding: 90px 127px;
  }
`;

//component
export const Happenings = () => {
  return (
    <HappeningSection>
      <HeadingTwo>Happenings</HeadingTwo>
      {/* render HappeningsCard with data */}
      {happeningsData.map((hap, index) => (
        <HappeningsCard
          key={index}
          picture={<img src={Cartwheel} alt={`${hap.title} picture`} />}
          title={hap.title}
          date={hap.date}
          description={hap.description}
        />
      ))}
    </HappeningSection>
  );
};
