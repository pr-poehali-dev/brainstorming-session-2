import { useState } from "react";
import Icon from "@/components/ui/icon";

type ItemType = "hoodie" | "tshirt" | "";
type ClothingColor = "white" | "blue" | "yellow" | "";
type PrintColor = "black" | "white" | "blue" | "yellow" | "multicolor" | "";
type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";
type PrintLocation = "front" | "back" | "sleeve" | "front-back";

const steps = ["Тип изделия", "Цвет и размер", "Дизайн", "Контакты"];

export default function Catalog() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [itemType, setItemType] = useState<ItemType>("");
  const [color, setColor] = useState<ClothingColor>("");
  const [sizes, setSizes] = useState<Size[]>([]);
  const [quantity, setQuantity] = useState(1);

  const [printLocation, setPrintLocation] = useState<PrintLocation>("front");
  const [printColor, setPrintColor] = useState<PrintColor>("");
  const [hasText, setHasText] = useState(false);
  const [customText, setCustomText] = useState("");
  const [hasLogo, setHasLogo] = useState(false);
  const [description, setDescription] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deadline, setDeadline] = useState("");

  const toggleSize = (s: Size) => {
    setSizes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const canNext = () => {
    if (step === 0) return !!itemType;
    if (step === 1) return !!color && sizes.length > 0;
    if (step === 2) return !!printColor;
    if (step === 3) return !!name && !!phone;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const clothingColors = [
    { value: "white", label: "Белый", cls: "bg-white border-2 border-neutral-300" },
    { value: "blue", label: "Синий", cls: "bg-blue-600" },
    { value: "yellow", label: "Жёлтый", cls: "bg-yellow-400" },
  ];

  const printColors = [
    { value: "black", label: "Чёрный", cls: "bg-neutral-900" },
    { value: "white", label: "Белый", cls: "bg-white border-2 border-neutral-300" },
    { value: "blue", label: "Синий", cls: "bg-blue-600" },
    { value: "yellow", label: "Жёлтый", cls: "bg-yellow-400" },
    { value: "multicolor", label: "Мульти", cls: "bg-gradient-to-br from-blue-500 via-yellow-400 to-white" },
  ];

  const printLocations = [
    { value: "front", label: "Грудь (спереди)", icon: "AlignCenter" },
    { value: "back", label: "Спина (сзади)", icon: "AlignCenter" },
    { value: "sleeve", label: "Рукав", icon: "Minus" },
    { value: "front-back", label: "Спереди и сзади", icon: "LayoutTemplate" },
  ];

  return (
    <section id="catalog" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-medium mb-2">
            Индивидуальный заказ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
            СОЗДАЙ СВОЮ ВЕЩЬ
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto">
            Заполни анкету — мы свяжемся с тобой, уточним детали и запустим производство
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white shadow-sm border border-neutral-100">
            {/* Steps */}
            <div className="flex border-b border-neutral-100">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 py-4 text-center text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                    i === step
                      ? "bg-yellow-400 text-black"
                      : i < step
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-400"
                  }`}
                >
                  <span className="hidden sm:inline">{s}</span>
                  <span className="sm:hidden">{i + 1}</span>
                </div>
              ))}
            </div>

            <div className="p-8">
              {/* Step 0 — Тип изделия */}
              {step === 0 && (
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 uppercase tracking-wide">
                    Что хотите заказать?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        value: "hoodie",
                        label: "Худи",
                        sub: "Оверсайз, с капюшоном",
                        icon: "Wind",
                      },
                      {
                        value: "tshirt",
                        label: "Футболка",
                        sub: "Унисекс, классический крой",
                        icon: "Shirt",
                      },
                    ].map((item) => (
                      <button
                        key={item.value}
                        onClick={() => setItemType(item.value as ItemType)}
                        className={`p-6 border-2 text-left transition-all duration-200 cursor-pointer ${
                          itemType === item.value
                            ? "border-yellow-400 bg-yellow-50"
                            : "border-neutral-200 hover:border-neutral-400"
                        }`}
                      >
                        <Icon
                          name={item.icon}
                          size={28}
                          className={itemType === item.value ? "text-yellow-500 mb-3" : "text-neutral-400 mb-3"}
                        />
                        <p className="font-bold text-neutral-900 text-lg uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-neutral-500 text-sm mt-1">{item.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1 — Цвет и размер */}
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">
                      Цвет изделия
                    </h3>
                    <div className="flex gap-4">
                      {clothingColors.map((c) => (
                        <button
                          key={c.value}
                          onClick={() => setColor(c.value as ClothingColor)}
                          className={`flex flex-col items-center gap-2 cursor-pointer group`}
                        >
                          <div
                            className={`w-12 h-12 rounded-full transition-all duration-200 ${c.cls} ${
                              color === c.value
                                ? "ring-4 ring-yellow-400 ring-offset-2 scale-110"
                                : "hover:scale-105"
                            }`}
                          />
                          <span className="text-xs text-neutral-600 uppercase tracking-wide">
                            {c.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">
                      Размеры
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {(["XS", "S", "M", "L", "XL", "XXL"] as Size[]).map((s) => (
                        <button
                          key={s}
                          onClick={() => toggleSize(s)}
                          className={`w-14 h-14 border-2 font-bold text-sm uppercase transition-all duration-200 cursor-pointer ${
                            sizes.includes(s)
                              ? "border-yellow-400 bg-yellow-400 text-black"
                              : "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <p className="text-neutral-400 text-xs mt-2">Можно выбрать несколько размеров</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">
                      Количество
                    </h3>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-10 h-10 border-2 border-neutral-200 text-neutral-700 font-bold hover:border-neutral-400 transition-colors cursor-pointer text-lg"
                      >
                        −
                      </button>
                      <span className="text-2xl font-bold text-neutral-900 w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-10 h-10 border-2 border-neutral-200 text-neutral-700 font-bold hover:border-neutral-400 transition-colors cursor-pointer text-lg"
                      >
                        +
                      </button>
                      <span className="text-neutral-400 text-sm">шт.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 — Дизайн */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">
                      Расположение принта
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {printLocations.map((loc) => (
                        <button
                          key={loc.value}
                          onClick={() => setPrintLocation(loc.value as PrintLocation)}
                          className={`flex items-center gap-3 p-4 border-2 text-left transition-all duration-200 cursor-pointer ${
                            printLocation === loc.value
                              ? "border-yellow-400 bg-yellow-50"
                              : "border-neutral-200 hover:border-neutral-400"
                          }`}
                        >
                          <Icon
                            name={loc.icon}
                            size={18}
                            className={printLocation === loc.value ? "text-yellow-500" : "text-neutral-400"}
                          />
                          <span className="text-sm font-medium text-neutral-800">{loc.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wide">
                      Цвет печати
                    </h3>
                    <div className="flex gap-4 flex-wrap">
                      {printColors.map((c) => (
                        <button
                          key={c.value}
                          onClick={() => setPrintColor(c.value as PrintColor)}
                          className="flex flex-col items-center gap-2 cursor-pointer"
                        >
                          <div
                            className={`w-10 h-10 rounded-full transition-all duration-200 ${c.cls} ${
                              printColor === c.value
                                ? "ring-4 ring-yellow-400 ring-offset-2 scale-110"
                                : "hover:scale-105"
                            }`}
                          />
                          <span className="text-xs text-neutral-600 uppercase tracking-wide">
                            {c.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setHasText(!hasText)}
                        className={`w-6 h-6 border-2 flex items-center justify-center transition-colors cursor-pointer ${
                          hasText ? "bg-yellow-400 border-yellow-400" : "border-neutral-300"
                        }`}
                      >
                        {hasText && <Icon name="Check" size={14} className="text-black" />}
                      </button>
                      <span className="font-medium text-neutral-800">Добавить текст на изделие</span>
                    </div>
                    {hasText && (
                      <input
                        type="text"
                        placeholder="Введите текст (например: RACING MENTALITY)"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setHasLogo(!hasLogo)}
                        className={`w-6 h-6 border-2 flex items-center justify-center transition-colors cursor-pointer ${
                          hasLogo ? "bg-yellow-400 border-yellow-400" : "border-neutral-300"
                        }`}
                      >
                        {hasLogo && <Icon name="Check" size={14} className="text-black" />}
                      </button>
                      <span className="font-medium text-neutral-800">Есть готовый логотип / графика</span>
                    </div>
                    {hasLogo && (
                      <p className="text-neutral-400 text-sm bg-neutral-50 border border-neutral-200 px-4 py-3">
                        Файл можно будет прислать после отправки заявки — мы напишем вам в мессенджер.
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 uppercase tracking-wide">
                      Описание идеи
                    </h3>
                    <textarea
                      rows={4}
                      placeholder="Опишите своими словами, как должна выглядеть вещь: стиль, настроение, что важно отразить..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 3 — Контакты */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 uppercase tracking-wide">
                    Ваши контакты
                  </h3>
                  <p className="text-neutral-500 text-sm -mt-4 mb-4">
                    Мы свяжемся, чтобы уточнить детали и согласовать макет перед печатью.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2 block">
                        Имя *
                      </label>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2 block">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2 block">
                      Желаемые сроки
                    </label>
                    <input
                      type="text"
                      placeholder="Например: к 20 мая, без спешки, срочно"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="w-full border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-neutral-50 border border-neutral-200 p-5 mt-4 space-y-2">
                    <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-3">
                      Ваш заказ
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Изделие</span>
                      <span className="font-medium text-neutral-900">
                        {itemType === "hoodie" ? "Худи" : "Футболка"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Цвет</span>
                      <span className="font-medium text-neutral-900 capitalize">
                        {color === "white" ? "Белый" : color === "blue" ? "Синий" : "Жёлтый"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Размеры</span>
                      <span className="font-medium text-neutral-900">{sizes.join(", ")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Количество</span>
                      <span className="font-medium text-neutral-900">{quantity} шт.</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Принт</span>
                      <span className="font-medium text-neutral-900">
                        {printLocations.find((l) => l.value === printLocation)?.label}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-10 pt-6 border-t border-neutral-100">
                {step > 0 ? (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 uppercase text-sm tracking-widest transition-colors cursor-pointer font-medium"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    Назад
                  </button>
                ) : (
                  <div />
                )}

                {step < steps.length - 1 ? (
                  <button
                    onClick={() => canNext() && setStep((s) => s + 1)}
                    disabled={!canNext()}
                    className={`flex items-center gap-2 uppercase text-sm tracking-widest font-bold px-8 py-3 transition-all duration-200 ${
                      canNext()
                        ? "bg-yellow-400 text-black hover:bg-black hover:text-white cursor-pointer"
                        : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                    }`}
                  >
                    Далее
                    <Icon name="ArrowRight" size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canNext()}
                    className={`flex items-center gap-2 uppercase text-sm tracking-widest font-bold px-8 py-3 transition-all duration-200 ${
                      canNext()
                        ? "bg-yellow-400 text-black hover:bg-black hover:text-white cursor-pointer"
                        : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                    }`}
                  >
                    Отправить заявку
                    <Icon name="Send" size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-neutral-100 shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCheck" size={32} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 uppercase tracking-wide mb-3">
              Заявка отправлена!
            </h3>
            <p className="text-neutral-500 max-w-sm mx-auto mb-8">
              Мы получили твой заказ и свяжемся с тобой в течение 24 часов для уточнения деталей.
            </p>
            <button
              onClick={() => { setSubmitted(false); setStep(0); setItemType(""); setColor(""); setSizes([]); setQuantity(1); setPrintColor(""); setDescription(""); setName(""); setPhone(""); setEmail(""); }}
              className="uppercase text-sm tracking-widest font-bold px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              Создать ещё один заказ
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
