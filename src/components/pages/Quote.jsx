import styled from "styled-components";
// import { css } from "styled-components";
import anna from "../../assets/anna.png";
import useDeviceType from "../useDeviceType";

const PinkWrapper = styled.div`
  background-color: #f9cdcc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 16px;
  row-gap: 30px;

  @media (min-width: 650px) {
    flex-direction: row;
    column-gap: 30px;
  }
`;

const Icon = styled.svg`
  width: 40px;
  height: 40px;

  @media (min-width: 650px) {
    width: 110px;
    height: 110px;
    order: 1;
  }
`;

const Blockquote = styled.blockquote`
  color: #1c2996;
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  letter-spacing: 0.02em;
  text-align: left;

  @media (min-width: 650px) {
    order: 2;
  }
`;

const Image = styled.img`
  width: 120px;

  @media (min-width: 650px) {
    order: 3;
  }
`;

export const Quote = () => {
  const deviceType = useDeviceType();

  if (deviceType === "none") {
    return null;
  }

  return (
    <PinkWrapper>
      <Layout>
        <Image
          src={anna}
          alt="Portrait photo of a white woman with black hair smiling. The caption below reads 'Anna Lindgren"
        />
        <Icon width="119" height="117" viewBox="0 0 119 117" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5985 1.12454C10.8928 3.28568 5.15469 9.55957 2.12397 21.3251C0.969974 25.8044 0.879837 26.6654 0.849118 33.5248C0.813548 41.4219 1.19188 44.0713 3.30465 50.706C5.4635 57.4867 10.6939 63.2571 16.9607 65.7712C20.0472 67.0099 20.5112 67.0775 27.1668 67.2612C31.0019 67.367 34.1393 67.6228 34.1393 67.8299C34.1393 68.6204 31.2816 75.8988 30.0552 78.2321C27.607 82.889 24.6955 86.8443 20.8374 90.7545C16.6466 95.0022 13.0423 97.3388 7.98694 99.085C2.96674 100.82 0.993014 102.664 0.214115 106.348C-0.736167 110.842 1.55445 115.067 5.54273 116.178C9.49745 117.279 16.8661 115.221 23.63 111.128C39.1195 101.755 50.1498 85.178 53.7153 65.9152C54.8749 59.6474 55.265 51.5584 55.0491 38.2398C54.8523 26.1004 54.7779 25.0852 53.8123 21.3378C50.305 7.73054 41.0952 0.453365 27.5063 0.551766C25.0411 0.569806 21.9324 0.827698 20.5985 1.12454ZM84.1526 1.16062C77.636 2.7621 71.6801 7.61779 68.5944 13.8445C67.176 16.706 65.6866 22.1467 65.2181 26.1775C64.5265 32.1242 64.9549 42.5617 66.0665 46.8499C68.1429 54.8602 71.79 60.401 77.389 64.0509C81.3288 66.6187 88.1606 67.9652 94.8183 67.4859L98.3559 67.2313L97.4278 70.283C95.2318 77.5031 90.1231 85.9644 84.8741 91.0759C80.8834 94.9624 77.1182 97.2965 71.3947 99.4327C66.6045 101.22 65.9505 101.675 64.7524 104.046C63.6963 106.136 63.5802 110.83 64.5398 112.656C65.997 115.429 68.0576 116.551 71.6918 116.551C80.8664 116.551 94.271 108.59 103.051 97.9275C107.813 92.144 112.456 83.832 114.976 76.5753C116.543 72.0644 118.035 64.9098 118.608 59.1501C119.242 52.7897 119.069 28.1812 118.362 24.0947C117.115 16.8851 114.914 12.3333 110.502 7.83427C105.281 2.51077 100.025 0.495595 91.5103 0.553405C88.7116 0.572676 85.4505 0.84164 84.1526 1.16062Z"
            fill="#F65135"
          />
        </Icon>

        <Blockquote>
          I love attending Sunny Yoga events, and I must say, they are truly a transformative experience. The
          instructors are not only highly knowledgeable and skilled but also incredibly supportive, guiding me through
          each pose with patience and encouragement.
        </Blockquote>
      </Layout>
    </PinkWrapper>
  );
};
