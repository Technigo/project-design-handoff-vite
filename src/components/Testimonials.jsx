import { TestimonialCard } from "./TestimonialCard";
import styled from "styled-components";

const TestimonialContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 16px 0;
  margin-right: -24px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TestimonialWrapper = styled.div`
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 65vw;
  max-width: 100%;
`;

const testimonials = [
  {
    stars: 5,
    name: "H-Smith",
    title: "Simplified genius",
    text: "This idea is very simple but still very impactful. It's a great reminder to spread positivity, even in small ways!",
    date: "Oct 18, 2024 • US",
  },
  {
    stars: 5,
    name: "LM_Gbg",
    title: "A.m.a.z.i.n.g 🤗",
    text: "This app makes my day. It does so much more than any other social or well-being app. Forget about likes >> start making smiles!",
    date: "July 6, 2024 • Sweden",
  },
  {
    stars: 5,
    name: "Valerie-in-Paris",
    title: "One of my favorite apps ❤️❤️❤️",
    text: "Fun and simple acts, and no cost. I complimented an older lady, and she was so surprised- she hadn't gotten a compliment since she was...",
    date: "Aug 22, 2024 • France",
  },
  {
    stars: 5,
    name: "SisuAino",
    title: "Brightens your day 🙂",
    text: "I looove tracking the global kindness progress. Suomi in top 10!! 😅",
    date: "Oct 18, 2024 •US",
}];

export const Testimonials = () => {
  return (
    <TestimonialContainer>
      {testimonials.map((testimonial, index) => (
        <TestimonialWrapper key={index}>
          <TestimonialCard
            stars={testimonial.stars}
            name={testimonial.name}
            title={testimonial.title}
            text={testimonial.text}
            date={testimonial.date}
          />
        </TestimonialWrapper>
      ))}
    </TestimonialContainer>
  );
};
