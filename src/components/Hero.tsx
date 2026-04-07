import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/100ccd07-00f5-44dd-9903-336cc2f143c2/files/17b4b699-f2e8-4bb5-92f9-155c83aebc70.jpg"
          alt="Enduro rider on mountain trail"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-medium">
          Кастомная мото-одежда
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          RACING<br />
          <span className="text-yellow-400">MENTALITY</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Выразите свою страсть к эндуро с Racing Mentality!
        </p>
        <a
          href="#constructor"
          className="inline-block bg-yellow-400 text-black font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white transition-colors duration-300"
        >
          Создать свой дизайн
        </a>
      </div>
    </div>
  );
}