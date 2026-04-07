import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/100ccd07-00f5-44dd-9903-336cc2f143c2/files/896cba1a-01bb-44b9-bae7-86d81de72b42.jpg"
            alt="Custom racing apparel"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-0" />
      <h3 className="absolute top-12 right-6 text-yellow-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Конструктор дизайна
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10">
        Выбирай цвет, добавляй графику и текст — твоя одежда, твои правила. Создай то, что никто больше не носит.
      </p>
      <a
        href="#constructor"
        className="absolute bottom-12 left-6 z-10 bg-yellow-400 text-black font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-white transition-colors duration-300"
      >
        Создать дизайн
      </a>
    </div>
  );
}