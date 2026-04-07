import { useState } from "react";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Худи Race Classic",
    category: "hoodie",
    price: 4990,
    colors: ["white", "blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://cdn.poehali.dev/projects/100ccd07-00f5-44dd-9903-336cc2f143c2/files/f13eed96-499d-4034-b04a-8af59f993e52.jpg",
    tag: "Хит продаж",
  },
  {
    id: 2,
    name: "Худи Enduro Spirit",
    category: "hoodie",
    price: 5490,
    colors: ["blue", "yellow"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://cdn.poehali.dev/projects/100ccd07-00f5-44dd-9903-336cc2f143c2/files/2eb4ecc0-55d2-4072-aed6-2a18f9a8986e.jpg",
    tag: "Новинка",
  },
  {
    id: 3,
    name: "Футболка Moto Line",
    category: "tshirt",
    price: 2490,
    colors: ["white", "blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://cdn.poehali.dev/projects/100ccd07-00f5-44dd-9903-336cc2f143c2/files/57732d47-fe8f-4efb-8bb2-e8648693b571.jpg",
    tag: null,
  },
  {
    id: 4,
    name: "Футболка Race Bold",
    category: "tshirt",
    price: 2790,
    colors: ["yellow", "white"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://cdn.poehali.dev/projects/100ccd07-00f5-44dd-9903-336cc2f143c2/files/3f5ab25e-734d-4595-bf4e-619219a24247.jpg",
    tag: "Лимитед",
  },
];

const colorMap: Record<string, string> = {
  white: "bg-white border border-neutral-300",
  blue: "bg-blue-600",
  yellow: "bg-yellow-400",
};

const colorLabel: Record<string, string> = {
  white: "Белый",
  blue: "Синий",
  yellow: "Жёлтый",
};

type Filter = "all" | "hoodie" | "tshirt";

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = products.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  return (
    <section id="catalog" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-medium mb-2">
              Наша коллекция
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              КАТАЛОГ ТОВАРОВ
            </h2>
          </div>
          <div className="flex gap-2">
            {(["all", "hoodie", "tshirt"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`uppercase text-sm tracking-widest px-5 py-2 border transition-all duration-300 cursor-pointer font-medium ${
                  activeFilter === f
                    ? "bg-black text-white border-black"
                    : "bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black"
                }`}
              >
                {f === "all" ? "Все" : f === "hoodie" ? "Худи" : "Футболки"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-neutral-100 aspect-square mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wide px-2 py-1">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white uppercase text-xs tracking-widest px-6 py-3 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap hover:bg-yellow-400 hover:text-black">
                  Заказать
                </button>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 text-base mb-1">{product.name}</h3>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-neutral-900 font-bold text-lg">{product.price.toLocaleString()} ₽</p>
                  <div className="flex gap-1">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        title={colorLabel[color]}
                        className={`w-4 h-4 rounded-full ${colorMap[color]}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-neutral-400 text-xs uppercase tracking-wide">
                  {product.sizes.join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 border border-neutral-200 px-8 py-5 bg-neutral-50">
            <Icon name="Palette" size={20} className="text-yellow-500" />
            <div className="text-left">
              <p className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">Не нашли подходящий вариант?</p>
              <p className="text-neutral-500 text-sm">Создайте свой уникальный дизайн в конструкторе</p>
            </div>
            <a
              href="#constructor"
              className="ml-4 bg-yellow-400 text-black font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Создать дизайн
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
