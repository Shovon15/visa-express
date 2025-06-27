import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Tour & Travels",
        2000,
        "Work Permit",
        2000,
        "Visit Visa Processing",
        2000,
        "Expert Consultancy",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={30}
      deletionSpeed={90}
      style={{ display: "inline-block", color: "#43a047" }}
    />
  );
};

export default TypingAnimation;
