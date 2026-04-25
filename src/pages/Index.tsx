import { useState } from "react"
import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

const ACCENT = "#6C63FF"
const CARD_BG = "#141B2B"

const SEND_LEAD_URL = "https://functions.poehali.dev/b0d6585c-a8d7-49c6-895e-2f7b7ed943e5"

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", marketplace: "", tariff: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    } finally {
      setLoading(false)
      setSent(true)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: "#0A0F1A" }}>
      <Navbar />

      {/* WebGL Background */}
      <div className="fixed inset-0 w-full h-full">
        <GradientBlinds
          gradientColors={["#0A0F1A", "#1a0e3d", "#2d1b69", "#6C63FF"]}
          angle={15}
          noise={0.2}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.35}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10">

        {/* ── HERO ── */}
        <section className="flex min-h-screen items-center justify-center px-5 sm:px-10">
          <div className="flex max-w-4xl flex-col items-center gap-8 text-center">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Wildberries", "Ozon", "Яндекс Маркет"].map((mp) => (
                <span key={mp} className="rounded-full px-4 py-1.5 text-sm font-semibold text-white border border-white/20" style={{ background: "rgba(108,99,255,0.2)" }}>
                  {mp}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-2xl">
              Выведем ваш товар<br />
              <span style={{ background: "linear-gradient(135deg, #a78bfa, #6C63FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                в топ маркетплейсов
              </span>
            </h1>

            <p className="text-lg text-white/80 max-w-2xl drop-shadow-lg md:text-xl">
              Рост продаж от <strong className="text-white">30% уже в первый месяц</strong> — за счёт оптимизации карточек, рекламы и работы с отзывами.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90 shadow-2xl"
                style={{ background: "linear-gradient(135deg, #6C63FF, #9b5de5)" }}
              >
                Оставить заявку
              </button>
              <button
                onClick={() => scrollTo("cases")}
                className="inline-flex items-center gap-2 justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 shadow-xl"
              >
                Кейсы
                <Icon name="ArrowRight" size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* ── ПРЕИМУЩЕСТВА ── */}
        <section id="services" className="py-24 px-5 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Что мы делаем</h2>
              <p className="text-white/60 max-w-xl mx-auto">Полный цикл продвижения на маркетплейсах — от анализа до роста выручки</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "FileText", title: "Оптимизация карточек", desc: "Заголовки, описания, фото и характеристики под алгоритмы поиска" },
                { icon: "TrendingUp", title: "Реклама на площадке", desc: "Внутренняя реклама WB и Ozon — настройка, ведение, снижение ДРР" },
                { icon: "Star", title: "Работа с отзывами", desc: "Мотивация покупателей, ответы, улучшение рейтинга товара" },
                { icon: "BarChart2", title: "Аналитика продаж", desc: "Еженедельные отчёты, динамика, рекомендации по ассортименту" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all" style={{ background: CARD_BG }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(108,99,255,0.2)" }}>
                    <Icon name={icon} size={24} className="text-violet-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── О НАС ── */}
        <section id="about" className="py-24 px-5 sm:px-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">

            {/* Основной блок */}
            <div className="rounded-3xl border border-white/10 overflow-hidden grid md:grid-cols-2 gap-0" style={{ background: CARD_BG }}>
              <div className="p-10 md:p-14 flex flex-col justify-center gap-6">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold w-fit" style={{ background: "rgba(108,99,255,0.2)", color: "#a78bfa" }}>
                  <Icon name="Users" size={14} />
                  О нас
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Стартап-агентство с командой сильных специалистов</h2>
                <p className="text-white/65 leading-relaxed">
                  Меня зовут Иван — я основатель TopSeller. Я собрал команду фрилансеров: SEO-специалисты, дизайнеры инфографики, копирайтеры и аналитики маркетплейсов. У каждого 2–4 года работы с Wildberries, Ozon и Яндекс Маркет.
                </p>
                <p className="text-white/65 leading-relaxed">
                  Мы новые — и это наш плюс: не гоним поток клиентов, а выкладываемся на 200% ради каждого проекта. Я лично проверяю каждую карточку перед сдачей — это моя гарантия качества.
                </p>
              </div>
              <div className="relative min-h-[320px] md:min-h-0 overflow-hidden" style={{ background: "rgba(108,99,255,0.06)" }}>
                <img
                  src="https://cdn.poehali.dev/projects/90fe917b-0747-4d25-b611-c94aac899ff0/bucket/048136c4-d8a6-463b-a2cd-8d70e8c752c3.jpg"
                  alt="Иван — основатель TopSeller"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "320px" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(10,15,26,0.9) 0%, transparent 100%)" }}>
                  <div className="text-white font-bold text-lg">Иван</div>
                  <div className="text-white/55 text-sm">Основатель & управляющий партнёр</div>
                </div>
              </div>
            </div>

            {/* Спецпредложение */}
            <div
              className="rounded-3xl p-8 md:p-10 border flex flex-col md:flex-row md:items-center gap-6"
              style={{ background: "linear-gradient(135deg, rgba(247,179,43,0.12), rgba(247,179,43,0.05))", borderColor: "rgba(247,179,43,0.35)" }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "rgba(247,179,43,0.2)" }}>
                <Icon name="Gift" size={24} style={{ color: "#f7b32b" }} />
              </div>
              <div className="flex-grow">
                <div className="text-white font-bold text-lg mb-1">Первый месяц — особые условия</div>
                <div className="flex flex-col sm:flex-row gap-4 mt-3">
                  {[
                    { icon: "Search", text: "Бесплатный расширенный аудит стоимостью 10 000 ₽" },
                    { icon: "CreditCard", text: "Постоплата — платите, когда увидите результат" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-white/75 text-sm">
                      <Icon name={icon} size={15} style={{ color: "#f7b32b" }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="shrink-0 rounded-xl px-6 py-3 font-semibold text-sm transition-all hover:opacity-90 whitespace-nowrap"
                style={{ background: "#f7b32b", color: "#1f2a44" }}
              >
                Занять место
              </button>
            </div>

          </div>
        </section>

        {/* ── ТАРИФЫ ── */}
        <section id="pricing" className="py-24 px-5 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Пакеты продвижения на маркетплейсах</h2>
              <p className="text-white/60 max-w-xl mx-auto">SEO, дизайн, репутация — выберите стратегию роста для вашего бизнеса на Ozon / Wildberries</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Старт",
                  price: "15 000 ₽",
                  desc: "Для первых шагов и тестирования гипотез",
                  features: [
                    { text: "SEO-оптимизация до 30 карточек", muted: false },
                    { text: "Еженедельный отчёт по позициям", muted: false },
                    { text: "Сбор семантического ядра", muted: false },
                    { text: "Чат-поддержка 24/7", muted: false },
                    { text: "Без дизайна и инфографики", muted: true },
                  ],
                  popular: false,
                  btnText: "Выбрать «Старт»",
                },
                {
                  name: "Бизнес",
                  price: "30 000 ₽",
                  desc: "Основной драйвер продаж для селлеров",
                  features: [
                    { text: "Всё из «Старта» (до 50 карточек)", muted: false },
                    { text: "Дизайн инфографики — до 5 слайдов/мес", muted: false },
                    { text: "Анализ конкурентов (цены, ключи) 2 раза/мес", muted: false },
                    { text: "Приоритетная поддержка", muted: false },
                    { text: "SEO-аудит + рекомендации", muted: false },
                  ],
                  popular: true,
                  btnText: "Запустить «Бизнес»",
                },
                {
                  name: "Всё включено",
                  price: "50 000 ₽",
                  desc: "Полный комплекс | максимальный рост",
                  features: [
                    { text: "Всё из «Бизнес» (безлимит карточек)", muted: false },
                    { text: "Управление отзывами / репутацией", muted: false },
                    { text: "Настройка рекламы на маркетплейсе", muted: false },
                    { text: "Расширенная аналитика + KPI", muted: false },
                    { text: "Личный менеджер 24/7", muted: false },
                  ],
                  popular: false,
                  btnText: "Взять «Всё включено»",
                },
              ].map(({ name, price, desc, features, popular, btnText }) => (
                <div
                  key={name}
                  className="rounded-2xl p-8 border flex flex-col gap-5 transition-all hover:-translate-y-1"
                  style={{
                    background: popular ? "linear-gradient(135deg, rgba(108,99,255,0.25), rgba(155,93,229,0.15))" : CARD_BG,
                    borderColor: popular ? "#f7b32b" : "rgba(255,255,255,0.1)",
                    boxShadow: popular ? "0 0 40px rgba(247,179,43,0.15)" : "none",
                    position: "relative",
                  }}
                >
                  {popular && (
                    <div
                      className="absolute -top-3 right-6 text-xs font-bold px-4 py-1 rounded-full"
                      style={{ background: "#f7b32b", color: "#1f2a44" }}
                    >
                      ✓ Самый востребованный
                    </div>
                  )}
                  <div>
                    <div className="text-white font-bold text-2xl">{name}</div>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="text-3xl font-extrabold text-white">{price}</span>
                      <span className="text-white/50 text-sm">/ месяц</span>
                    </div>
                    <div className="text-white/50 text-sm mt-2 pb-4 border-b border-white/10">{desc}</div>
                  </div>
                  <ul className="flex flex-col gap-3 flex-grow">
                    {features.map(({ text, muted }) => (
                      <li key={text} className={`flex items-center gap-2 text-sm ${muted ? "text-white/35" : "text-white/75"}`}>
                        <Icon
                          name={muted ? "X" : "Check"}
                          size={16}
                          className="shrink-0"
                          style={{ color: muted ? "rgba(255,255,255,0.25)" : "#4ade80" }}
                        />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="mt-2 w-full rounded-xl py-3.5 font-semibold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
                    style={{
                      background: popular
                        ? `linear-gradient(135deg, ${ACCENT}, #9b5de5)`
                        : "linear-gradient(98deg, #162b3c 0%, #1e3a5f 100%)",
                    }}
                  >
                    {btnText}
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ДОВЕРИЕ ── */}
        <section id="cases" className="py-24 px-5 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Почему нам доверяют первые клиенты</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "ShieldCheck", title: "Гарантия возврата денег", desc: "Если за месяц SEO-позиции не выросли — вернём стоимость оптимизации." },
                { icon: "CreditCard", title: "Постоплата", desc: "Для первых трёх клиентов оплата только после первых улучшений." },
                { icon: "Eye", title: "Прозрачность", desc: "Вы видите, кто конкретный исполнитель — фрилансер с опытом 2–4 года." },
                { icon: "UserCheck", title: "Личный контроль", desc: "Основатель проверяет каждую карточку перед отправкой." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-8 border border-white/10 flex gap-5 items-start transition-all hover:border-white/20" style={{ background: CARD_BG }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(108,99,255,0.2)" }}>
                    <Icon name={icon} size={22} style={{ color: "#a78bfa" }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-2">{title}</div>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ФОРМА ── */}
        <section id="contact" className="py-24 px-5 sm:px-10">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl border border-white/10 p-10 md:p-14" style={{ background: CARD_BG }}>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Оставить заявку</h2>
                <p className="text-white/60">Ответим в течение 30 минут в рабочее время</p>
              </div>
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-white text-xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-white/60">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Имя</label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Иван"
                        className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 border border-white/10 outline-none focus:border-violet-500 transition-colors"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Телефон</label>
                      <input
                        required
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 border border-white/10 outline-none focus:border-violet-500 transition-colors"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="ivan@mail.ru"
                      className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 border border-white/10 outline-none focus:border-violet-500 transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Маркетплейс</label>
                      <select
                        value={form.marketplace}
                        onChange={e => setForm(p => ({ ...p, marketplace: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3 text-white border border-white/10 outline-none focus:border-violet-500 transition-colors appearance-none"
                        style={{ background: "#141B2B" }}
                      >
                        <option value="">Выберите маркетплейс</option>
                        <option value="wb">Wildberries</option>
                        <option value="ozon">Ozon</option>
                        <option value="ym">Яндекс Маркет</option>
                        <option value="all">Все площадки</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Тариф</label>
                      <select
                        value={form.tariff}
                        onChange={e => setForm(p => ({ ...p, tariff: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3 text-white border border-white/10 outline-none focus:border-violet-500 transition-colors appearance-none"
                        style={{ background: "#141B2B" }}
                      >
                        <option value="">Выберите тариф</option>
                        <option value="start">Старт — 15 000 ₽/мес</option>
                        <option value="business">Бизнес — 30 000 ₽/мес</option>
                        <option value="all">Всё включено — 50 000 ₽/мес</option>
                        <option value="unknown">Ещё не решил</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-4 text-lg font-bold text-white transition-all hover:opacity-90 mt-2 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #6C63FF, #9b5de5)" }}
                  >
                    {loading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p className="text-white/30 text-xs text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-5 sm:px-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Частые вопросы</h2>
            </div>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {[
                { q: "Как быстро будет виден результат?", a: "Первые результаты (рост показов и кликов) обычно заметны уже через 1–2 недели. Рост выручки на 30%+ — в течение первого месяца работы." },
                { q: "Нужно ли мне разбираться в продвижении?", a: "Нет. Мы берём все технические задачи на себя: оптимизацию, рекламу, аналитику. Вам достаточно предоставить доступ к кабинету и отвечать на наши вопросы." },
                { q: "С чего начать сотрудничество?", a: "Оставьте заявку — мы проведём бесплатный аудит вашего магазина, покажем точки роста и предложим оптимальный тариф. Без обязательств." },
              ].map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-white/10 px-6"
                  style={{ background: CARD_BG }}
                >
                  <AccordionTrigger className="text-white font-semibold text-left py-5 hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── ФУТЕР ── */}
        <footer className="border-t border-white/10 py-12 px-5 sm:px-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6C63FF, #9b5de5)" }}>
                <Icon name="TrendingUp" size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">TopSeller</span>
            </div>
            <div className="text-white/40 text-sm text-center">
              © 2026 TopSeller. Продвижение на маркетплейсах
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:business1its1me@gmail.com" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2">
                <Icon name="Mail" size={16} />
                business1its1me@gmail.com
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Icon name="Send" size={18} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  )
}