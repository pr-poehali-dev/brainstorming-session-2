interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-base uppercase tracking-widest">Racing Mentality</div>
        <nav className="flex gap-8">
          <a
            href="#catalog"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Каталог
          </a>
          <a
            href="#constructor"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Конструктор
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}