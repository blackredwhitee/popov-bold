import Link from "next/link";
import CaseIcon from "@/components/CaseIcon";
import LeadForm from "@/components/LeadForm";
import LogoMark from "@/components/LogoMark";
import Note from "@/components/Note";
import Pic from "@/components/Pic";
import { TgIcon } from "@/components/icons";
import { CASES } from "@/data/cases";
import {
  ABOUT, AWARDS, BOOKS, CAREER_CASES, FAQ, FIT, HOBBIES, NOT_FIT, PAINS, QUOTES, SERVICES, STEPS, TIMELINE,
} from "@/data/home";
import { COMPANY_LOGOS, OUTLET_LOGOS } from "@/data/logos";
import { FEATURED, fmtDate, MEDIA_STATS } from "@/data/media";
import { asset, FORBES, RESUME_PDF, shown, SHOW_NOTES, SITE_URL, TELEGRAM, TELEGRAM_HANDLE } from "@/lib/config";
import { JsonLd, meta } from "@/lib/seo";
import { Faq, MethodScheme } from "./_home/Interactive";
import s from "./home.module.css";

export const metadata = meta({
  title: "Михаил Попов — предприниматель, основатель Talkbank и EasyFinance",
  description: "Предприниматель в финтехе и инновациях: основатель Talkbank, EasyFinance и TG Market, топ-35 предпринимателей в сфере ИИ по версии RB.ru. Помогаю собственникам находить, где бизнес теряет деньги, и выводить его в прибыль.",
  path: "/",
});

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function Home() {
  const faq = FAQ.filter((f) => shown(f.a));
  const practice = CASES.filter((c) => c.icon);
  const logos = [...COMPANY_LOGOS, ...OUTLET_LOGOS];
  return (
    <main className={s.home}>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Person", name: "Михаил Попов", jobTitle: "Предприниматель, основатель и CEO Talkbank",
        url: SITE_URL, image: SITE_URL + "/img/portrait-840.jpg", sameAs: [TELEGRAM, FORBES],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQ.filter((f) => !f.a.startsWith("[")).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }} />

      {/* Первый экран */}
      <section id="top" className={`container ${s.hero}`}>
        <p className={s.kicker}><span>●</span> Предприниматель в финтехе и инновациях. Основатель Talkbank и EasyFinance</p>
        <h1 className={s.h1}>Нахожу, где бизнес теряет деньги. <em>И&nbsp;помогаю собственнику превратить потери в&nbsp;прибыль.</em></h1>
        <div className={s.heroGrid}>
          <figure className={s.photo}>
            <Pic name="portrait" widths={[420, 840]} sizes="(max-width: 900px) 80vw, 380px" alt="Михаил Попов" priority />
          </figure>
          <div className={s.heroCopy}>
            <p>Прошёл путь от финансового аналитика до финансового директора и CEO собственных компаний. Сегодня помогаю собственникам с выручкой от 300 млн ₽ находить, где бизнес теряет деньги, и выводить его в прибыль.</p>
            <div className={s.heroBtns}>
              <a href="#form" className="btn btn-primary">Обсудить задачу <span aria-hidden="true">→</span></a>
              <a href="#cases" className="btn btn-outline">Кейсы</a>
            </div>
          </div>
          <dl className={s.nums}>
            <div><dt>25+</dt><dd>лет в управлении — до генерального директора (оборот $500+ млн, 25&nbsp;000 человек)</dd></div>
            <div><dt>350&nbsp;000+</dt><dd>клиентов EasyFinance</dd></div>
            <div><dt>6</dt><dd>советов директоров</dd></div>
            <div><dt>{MEDIA_STATS.total}</dt><dd>публикаций в СМИ</dd></div>
          </dl>
        </div>
      </section>

      {/* Бегущая строка логотипов */}
      <div className={s.marquee} aria-label="Компании, где работал, и издания, которые писали">
        <div className={s.track}>
          {[0, 1].map((k) => (
            <div key={k} className={s.trackPart} aria-hidden={k === 1 || undefined}>
              {logos.map((l) => <LogoMark key={l.file + k} logo={l} h={26} />)}
            </div>
          ))}
        </div>
      </div>

      {/* С чем приходят */}
      <section className={`container sec ${s.pains}`} data-reveal>
        <div className={s.head}>
          <h2 className="h2">С чем ко мне приходят</h2>
          <a href="#form" className="link">Узнали себя? Напишите</a>
        </div>
        <ol>
          {PAINS.map((p, i) => (
            <li key={p.q}><span>{pad(i)}</span><b>{p.q}</b><em>{p.a}</em><i aria-hidden="true">→</i></li>
          ))}
        </ol>
      </section>

      {/* Цитата */}
      <section className={`container ${s.quote}`} data-reveal>
        <figure className={s.quotePhoto}>
          <Pic name="about" widths={[520, 1040]} sizes="(max-width: 900px) 90vw, 520px" alt="Михаил Попов" />
        </figure>
        <blockquote>
          <p><span>«</span>{QUOTES.afterPains}<span>»</span></p>
          <footer>Михаил Попов</footer>
        </blockquote>
      </section>

      {/* Как я работаю */}
      <section id="how" className="band-navy">
        <div className={`container sec ${s.how}`} data-reveal>
          <div className={s.head}>
            <h2 className="h2">Как я работаю</h2>
            <p>Я работаю с собственником и его командой внутри компании по авторской методике «7П+1». Она позволяет получить устойчивый рост выручки и прибыли и вывести компанию на более высокий уровень развития.</p>
          </div>
          <ol className={s.steps}>
            {STEPS.map((x, i) => (
              <li key={x.t}><span>{pad(i)}</span><strong>{x.t}</strong><em>{x.d}</em></li>
            ))}
          </ol>
          <div className={s.pay}>
            <p><b>Партнёрство, а не подряд.</b> Фиксированная часть плюс процент от&nbsp;прироста выручки или прибыли. При долгосрочном партнёрстве — доля в&nbsp;бизнесе. Мне выгодно, чтобы вы заработали больше.</p>
            <a href="#form" className="btn btn-primary">Узнать условия <span aria-hidden="true">→</span></a>
          </div>
          <Note style={{ marginTop: 16 }}>Черновик: формулировку, размеры и условия утверждает Михаил.</Note>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className={`container sec ${s.services}`} data-reveal>
        <div className={s.head}>
          <h2 className="h2">Услуги</h2>
          <p>Большинство клиентов начинают с диагностики — через 2–4 недели понятно, где компания теряет деньги и в каком приоритете строить работу по исправлению ситуации.</p>
        </div>
        <div className={s.svcList}>
          {SERVICES.map((v, i) => (
            <a key={v.t} href="#form" className={s.svc}>
              <span className={s.svcNum}>{pad(i)}</span>
              <div className={s.svcMain}>
                <h3>{v.t}{i === 0 && <span className={s.tag}>начните с этого</span>}</h3>
                <p>{v.what}</p>
              </div>
              <div className={s.svcSide}><span>{v.who}</span><b>{v.term}</b></div>
            </a>
          ))}
        </div>
      </section>

      {/* Методология */}
      <section className="band-white">
        <div className={`container sec ${s.method}`} data-reveal>
          <MethodScheme note={<Note>Черновые описания — финальный текст даёт Михаил.</Note>} />
        </div>
      </section>

      {/* Кейсы */}
      <section id="cases" className={s.caseBig} data-reveal>
        <div className="container">
          <p className={s.caseMeta}>Кейс · производство · выручка 800 млн ₽ · акселератор, 2026</p>
          <div className={s.caseRow}>
            <b>+20%</b>
            <div>
              <p>Собственник хотел продать убыточный бизнес. После трансформации компания вышла в&nbsp;прибыль, выручка выросла на&nbsp;20% за год.</p>
              <Link href="/cases/proizvodstvo-800-mln/" className={s.caseLink}>Разбор кейса →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={`container sec ${s.practice}`} data-reveal>
        <div className={s.head}>
          <h2 className="h2">Ещё проекты</h2>
          <Link href="/cases/" className="link">Все кейсы</Link>
        </div>
        <div className={s.pgrid}>
          {practice.map((c) => (
            <article key={c.title} className={s.pcard}>
              <span className={s.picon}>{c.icon && <CaseIcon name={c.icon} size={48} />}</span>
              <h3>{c.title}</h3>
              {c.num && <b>{c.num}</b>}
              <p>{c.numLabel}</p>
            </article>
          ))}
        </div>
        <div className={s.career}>
          <span>Из прошлой карьеры</span>
          {CAREER_CASES.map((c) => <div key={c.co}><b>{c.num}</b><em>{c.d}</em><i>{c.co}</i></div>)}
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className="band-white">
        <div className={`container sec ${s.about}`} data-reveal>
          <div className={s.aboutText}>
            <h2 className="h2">Обо мне</h2>
            <div className={s.paras}>{ABOUT.filter(shown).map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
            <Note>Черновик на согласование. Уточнить: 20 или 25 тыс. сотрудников; можно ли упоминать брата Александра.</Note>
            {RESUME_PDF && <a href={asset(RESUME_PDF)} download className="btn btn-outline" style={{ alignSelf: "flex-start" }}>Скачать резюме (PDF)</a>}
          </div>
          <figure className={s.aboutPhoto}>
            <Pic name="gallery-5" widths={[720, 1100]} sizes="(max-width: 900px) 90vw, 480px" alt="Михаил Попов" />
          </figure>
        </div>
      </section>

      <figure className={s.team}>
        <Pic name="team" widths={[1600, 2400]} sizes="100vw" alt="Михаил Попов с командой Talkbank" />
        <figcaption className="container">С командой Talkbank</figcaption>
      </figure>

      {/* Вне работы */}
      <section className={`container sec ${s.life}`} data-reveal>
        <h2 className="h2">Вне работы</h2>
        <div>
          <h3>Увлечения</h3>
          <ul className={s.hobbies}>{HOBBIES.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
        <div>
          <h3>Советую прочитать</h3>
          <ol className={s.books}>{BOOKS.map((b) => <li key={b.t}><b>{b.t}</b><span>{b.a}</span></li>)}</ol>
        </div>
      </section>

      {/* Акселератор */}
      <section className={`container sec ${s.accel}`} data-reveal>
        <h2 className="h2">Акселератор для собственников</h2>
        <div>
          <p>Помогаю собственникам вырасти до 1 млрд ₽ выручки: убрать системные барьеры, выстроить управленческую архитектуру, организовать финансирование, усилить команду и личную эффективность. По методологии «7П+1». <b>10+ компаний, 5+ млрд ₽ совокупной выручки.</b> Работает с декабря 2025 года.</p>
          <p className={s.accelNote}>Отбор — через обязательное собеседование.</p>
          <div className={s.heroBtns}>
            <a href="#form" className="btn btn-primary">Подать заявку <span aria-hidden="true">→</span></a>
            <a href="https://pnpconsulting.ru" className="btn btn-outline" target="_blank" rel="noopener">Сайт акселератора ↗</a>
          </div>
        </div>
      </section>

      {/* Медиа */}
      <section className="band-navy">
        <div className={`container sec ${s.media}`} data-reveal>
          <div className={s.head}>
            <h2 className="h2">Обо мне пишут</h2>
            <Link href="/media/" className="link">Все {MEDIA_STATS.total} публикаций</Link>
          </div>
          <dl className={s.mediaNums}>
            <div><dt>{MEDIA_STATS.total}</dt><dd>публикаций</dd></div>
            <div><dt>{MEDIA_STATS.outlets}</dt><dd>изданий</dd></div>
            <div><dt>{MEDIA_STATS.top}</dt><dd>в РБК, «Ведомостях», «Коммерсанте», РГ, Forbes, «Известиях»</dd></div>
          </dl>
          <div className={s.outlets}>{OUTLET_LOGOS.map((l) => <LogoMark key={l.file} logo={l} h={30} />)}</div>
          <div className={s.mediaCols}>
            <ul className={s.clips}>
              {FEATURED.slice(0, 8).map((p) => (
                <li key={p.url}><a href={p.url} target="_blank" rel="nofollow noopener"><span>{p.pub} · {fmtDate(p).slice(-4)}</span><b>{p.title}</b><i aria-hidden="true">↗</i></a></li>
              ))}
            </ul>
            <ul className={s.awards}>
              {AWARDS.map((w) => (
                <li key={w.n}>{w.url ? <a href={w.url} target="_blank" rel="noopener"><b>{w.n} ↗</b></a> : <b>{w.n}</b>}<span>{w.d}{w.y && ` · ${w.y}`}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Отзывы — только когда будут реальные */}
      {SHOW_NOTES && (
        <section className="container sec" data-reveal>
          <h2 className="h2" style={{ marginBottom: 32 }}>Отзывы собственников</h2>
          <Note box>Блок скрыт на боевой версии, пока нет реальных отзывов с согласием.</Note>
        </section>
      )}

      {/* Кому подходит */}
      <section className={`container sec ${s.fit}`} data-reveal>
        <div><h2>Подходит</h2><ul>{FIT.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div className={s.notFit}><h2>Не подходит</h2><ul>{NOT_FIT.map((x) => <li key={x}>{x}</li>)}</ul></div>
      </section>

      {/* FAQ */}
      <section className="band-white">
        <div className={`container sec ${s.faqSec}`} data-reveal>
          <h2 className="h2">Частые вопросы</h2>
          <Faq items={faq} />
        </div>
      </section>

      {/* Заявка */}
      <section id="form" className="band-navy">
        <div className={`container sec ${s.final}`}>
          <h2>Обсудим вашу задачу<span>?</span></h2>
          <div className={s.finalGrid}>
            <div className={s.finalSide}>
              <p>Отвечу лично в течение 1 рабочего дня.</p>
              <blockquote>«{QUOTES.form}»</blockquote>
              <a href={TELEGRAM} className="btn btn-outline-light" target="_blank" rel="noopener"><TgIcon color="#fff" size={18} />{TELEGRAM_HANDLE}</a>
            </div>
            <div><LeadForm source="home" /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
