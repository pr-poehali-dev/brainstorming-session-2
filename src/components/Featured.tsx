export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/100ccd07-00f5-44dd-9903-336cc2f143c2/files/4dfbdc14-c240-4348-b0aa-f9e0faca477b.jpg"
          alt="Enduro rider in custom hoodie"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Твой стиль — твои правила</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждая вещь создаётся под тебя. Выбери цвет, добавь свою графику или текст — и получи худи или футболку, которая отражает твою страсть к эндуро.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold text-lg">01</span>
            <div>
              <p className="font-semibold text-neutral-900 uppercase text-sm tracking-wide">Худи</p>
              <p className="text-neutral-500 text-sm">Оверсайз, с принтом</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:ml-8">
            <span className="text-yellow-500 font-bold text-lg">02</span>
            <div>
              <p className="font-semibold text-neutral-900 uppercase text-sm tracking-wide">Футболки</p>
              <p className="text-neutral-500 text-sm">Унисекс, все размеры</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:ml-8">
            <span className="text-yellow-500 font-bold text-lg">03</span>
            <div>
              <p className="font-semibold text-neutral-900 uppercase text-sm tracking-wide">Цвета</p>
              <p className="text-neutral-500 text-sm">Белый, синий, жёлтый</p>
            </div>
          </div>
        </div>
        <a href="#catalog" className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 cursor-pointer w-fit uppercase tracking-widest font-medium">
          Смотреть каталог
        </a>
      </div>
    </div>
  );
}