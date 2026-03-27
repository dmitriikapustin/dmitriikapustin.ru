import Link from 'next/link';
import Image from 'next/image';

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  'kapustin.cc': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'kapustin.design': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  ),
  'aiacade.me': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  ),
  'kapustin.team': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

const projects = [
  {
    name: 'kapustin.cc',
    href: 'https://kapustin.cc',
    description: 'Универсальный UI/UX кит и дизайн-система. React, Next.js, Tailwind.',
  },
  {
    name: 'kapustin.design',
    href: 'https://kapustin.design',
    description: 'AI-генерация дизайна. От промпта до готовых визуалов.',
  },
  {
    name: 'aiacade.me',
    href: 'https://aiacade.me',
    description: 'Образовательная платформа по AI-инструментам и навыкам.',
  },
  {
    name: 'kapustin.team',
    href: 'https://kapustin.team',
    description: 'IT-команда: дизайн, разработка продуктов, маркетинг и автоматизация.',
  },
];

const expertise = [
  { label: 'Продуктовый дизайн', years: '10+' },
  { label: 'Разработка',         years: '10+' },
  { label: 'AI / ML',            years: '3+'  },
  { label: 'Менеджмент',         years: '8+'  },
];

const socials = [
  { label: 'Telegram', href: 'https://t.me/dmitriikapustin' },
  { label: 'Threads',  href: 'https://threads.net/@dmitriikapustin' },
  { label: 'Youtube',  href: 'https://youtube.com/@dmitriikapustin' },
];

const footerColumns = [
  {
    title: 'Проекты',
    links: [
      { label: 'kapustin.cc',     href: 'https://kapustin.cc' },
      { label: 'kapustin.design', href: 'https://kapustin.design' },
      { label: 'aiacade.me',      href: 'https://aiacade.me' },
      { label: 'kapustin.team',   href: 'https://kapustin.team' },
    ],
  },
  {
    title: 'Юридическое',
    links: [
      { label: 'ИП Капустин Д.В.', href: 'https://www.tbank.ru/business/contractor/legal/324774600583401/' },
    ],
  },
  {
    title: 'Соцсети',
    links: socials,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">
      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.06]" />
          </div>

          <div className="relative max-w-[720px] mx-auto px-5 pt-16 pb-12 sm:pt-24 sm:pb-16">
            {/* Lang switch */}
            <div className="absolute top-5 right-5">
              <Link
                href="https://dmitriikapustin.com"
                className="text-[12px] font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors tracking-[0.06em] uppercase"
              >
                EN
              </Link>
            </div>

            <div className="flex flex-col items-center text-center gap-5">
              <Image
                src="/photo.jpg"
                alt="Дмитрий Капустин"
                width={88}
                height={88}
                className="rounded-full object-cover border-2 border-[var(--border-color)] shadow-[var(--shadow-md)]"
                priority
              />

              <div className="flex flex-col gap-3">
                <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-[var(--fg)]">
                  Дмитрий Капустин
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--fg-secondary)] max-w-[480px]">
                  10+ лет в IT: дизайн, разработка и менеджмент.
                  Занимаюсь IT/AI консалтингом и строю стартапы.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-1">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-full border border-[var(--border-color)] text-[var(--fg-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--fg)] transition-all duration-[var(--transition-fast)] tracking-[-0.25px]"
                  >
                    {s.label}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 2.5l4 3.5-4 3.5" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[720px] mx-auto px-5">
          {/* ─── Статы ─── */}
          <section className="py-10 sm:py-14 border-y border-[var(--border-color)]">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              {expertise.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--fg)] tracking-[-0.03em] tabular-nums">
                    {item.years}
                  </div>
                  <div className="mt-1 text-[13px] text-[var(--fg-muted)] tracking-[-0.25px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Проекты ─── */}
          <section className="py-14 sm:py-20">
            <h2 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold tracking-[-0.02em] text-[var(--fg)] mb-6 sm:mb-8">
              Проекты
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="group flex flex-col gap-3 p-5 rounded-[var(--radius-lg)] border border-[var(--border-color)] bg-[var(--bg)] transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-md)] hover:border-[var(--border-color-strong)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-[var(--radius-md)] bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--fg-secondary)]">
                        {PROJECT_ICONS[project.name]}
                      </span>
                      <span className="text-[14px] font-semibold text-[var(--fg)] tracking-[-0.25px]">
                        {project.name}
                      </span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--fg-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[var(--fg)] transition-colors">
                      <path d="M6 3l5 5-5 5" />
                    </svg>
                  </div>
                  <p className="text-[13px] text-[var(--fg-secondary)] leading-relaxed tracking-[-0.25px]">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ─── О себе ─── */}
          <section className="pb-16 sm:pb-20">
            <div className="rounded-[clamp(12px,2vw,20px)] bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 sm:p-8">
              <h2 className="text-base font-semibold tracking-[-0.25px] text-[var(--fg)] mb-3">
                О себе
              </h2>
              <p className="text-[13px] leading-relaxed text-[var(--fg-secondary)] tracking-[-0.25px]">
                Серийный предприниматель с подтверждённым опытом в IT.
                Строю продукты на пересечении дизайна, инженерии и AI.
                Фокус — инструменты, которые делают творческую и техническую работу быстрее и лучше.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* ─── Футер ─── */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg)]">
        <div className="max-w-[720px] mx-auto px-5 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[13px] font-semibold text-[var(--fg-secondary)] mb-3 tracking-[-0.25px]">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-[var(--transition-fast)] tracking-[-0.25px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
            <p className="text-[13px] text-[var(--fg-muted)] tracking-[-0.25px]">
              &copy; {new Date().getFullYear()} Дмитрий Капустин
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
