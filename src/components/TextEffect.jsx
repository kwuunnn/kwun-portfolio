import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Software Engineer",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1500,
        "Product Manager",
        1500,
      ]}
      speed={50}
      className=" text-[2rem] sm:text-[3rem] md:text-[4rem] text-primary font-bold"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
