const benefits = [
  {
    number: "01",
    title: "新しい来店理由ができる",
    text: "料理だけでは出会いにくかった「本や文化が好きな人」と、店がつながるきっかけをつくります。",
  },
  {
    number: "02",
    title: "店の記憶が物語と残る",
    text: "作品を聴き、作中の一皿を味わう。体験そのものが、もう一度訪れたくなる店の記憶になります。",
  },
  {
    number: "03",
    title: "空き時間を価値に変える",
    text: "定休日、アイドルタイム、夜の貸切枠など、店ごとの空き時間に合わせて企画できます。",
  },
];

const flow = [
  ["ご相談", "お店の席数、貸切可能な時間帯、料理ジャンルを伺います。"],
  ["企画づくり", "店の魅力に合う文学作品と、物語に登場するメニューを一緒に考えます。"],
  ["告知・募集", "イベントの紹介文や告知素材を整え、参加者募集を進めます。"],
  ["当日開催", "朗読と料理をひとつの体験として届け、次の来店につながる時間をつくります。"],
];

const faqs = [
  ["何席くらいから開催できますか？", "少人数のカフェから貸切可能なレストラン・居酒屋までご相談いただけます。席数やレイアウトを伺い、無理のない形をご提案します。"],
  ["どんな料理を用意すればよいですか？", "作品に登場する料理をそのまま再現するだけでなく、お店の既存メニューを生かしたアレンジも可能です。"],
  ["朗読の準備は店舗側で必要ですか？", "朗読者や作品選定を含め、実施に必要な内容は事前相談のうえで組み立てます。店舗には主に会場と料理のご協力をお願いします。"],
  ["まずは一度だけ試せますか？", "はい。まずは協力店として一回開催し、店との相性やお客様の反応を確かめるところからご相談いただけます。"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="TABERU朗読会 トップ">
          <span className="brand-mark">T</span>
          <span>TABERU朗読会</span>
        </a>
        <a className="nav-cta" href="#apply">協力店に応募する</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">レストラン・カフェ・居酒屋のオーナーさまへ</p>
          <h1>
            その一皿を、<br />
            <em>また来たい理由</em>に。
          </h1>
          <p className="hero-lead">
            物語を聴き、物語に登場する料理を味わう。
            <br />
            「文学 × 食」の体験で、新しいお客様と店のファンを育てる
            <strong>「TABERU朗読会協力店」</strong>を募集しています。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#apply">まずは話を聞いてみる <span>→</span></a>
            <a className="text-link" href="#about">TABERU朗読会とは</a>
          </div>
          <ul className="hero-notes" aria-label="対象店舗">
            <li>貸切・時間貸しができる</li>
            <li>飲食を提供できる</li>
            <li>文化的な企画に興味がある</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="book book-back"><span>物 語</span></div>
          <div className="book book-front">
            <span className="book-kicker">TABERU</span>
            <strong>朗読と<br />一皿の<br />ものがたり</strong>
            <span className="book-line" />
          </div>
          <div className="plate">
            <span className="plate-inner" />
            <span className="fork">╲╲╲╲</span>
          </div>
          <span className="steam steam-one">〜</span>
          <span className="steam steam-two">〜</span>
        </div>
      </section>

      <section className="problem">
        <p className="section-label">こんなお悩みはありませんか？</p>
        <div className="problem-grid">
          <p>新規のお客様が<br /><strong>一度きり</strong>で終わってしまう</p>
          <p>SNSやクーポン以外の<br /><strong>集客のきっかけ</strong>が欲しい</p>
          <p>空いている時間帯や貸切枠を<br /><strong>もっと活用</strong>したい</p>
        </div>
        <div className="answer">
          <span>その悩みに</span>
          <strong>「ここでしかできない体験」</strong>
          <span>という答えを。</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <p className="eyebrow">ABOUT</p>
          <h2>本の中の一皿を、<br />現実のテーブルへ。</h2>
        </div>
        <div className="about-body">
          <p className="big-copy">
            小説や物語に登場する食べ物を朗読し、その一皿を実際に味わう——。
          </p>
          <p>
            TABERU朗読会は、耳で味わう物語と、舌で味わう料理をひとつにした参加型イベントです。
            お客様は「食事をする場所」としてだけでなく、「心に残る時間を過ごした場所」としてお店を知ります。
          </p>
          <blockquote>
            朗読が料理への期待をつくり、<br />
            料理が物語の余韻を深くする。
          </blockquote>
        </div>
      </section>

      <section className="benefits section">
        <div className="section-heading centered">
          <p className="eyebrow">FOR YOUR BUSINESS</p>
          <h2>固定客づくりにつながる、<br />3つのきっかけ</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.number}>
              <span className="card-number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
        <p className="note">※集客やリピートを保証するものではありません。お店の条件に合わせて、継続的な関係づくりを目指します。</p>
      </section>

      <section className="scene section">
        <div className="scene-copy">
          <p className="eyebrow light">THE EXPERIENCE</p>
          <h2>静かに聴き、<br />語らい、味わう。</h2>
          <p>
            朗読のあとは、料理を囲んで感想を交わす時間へ。
            共通の体験が自然な会話を生み、店とお客様、お客様同士の距離を近づけます。
          </p>
        </div>
        <div className="scene-quote">
          <span>“</span>
          <p>次は、あの人も<br />連れてきたい。</p>
        </div>
      </section>

      <section className="flow section">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>開催までの流れ</h2>
          <p>初めてのイベント開催でも、ひとつずつ相談しながら進めます。</p>
        </div>
        <ol className="flow-list">
          {flow.map(([title, text], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="plan section">
        <div>
          <p className="eyebrow">PARTNER SHOP</p>
          <h2>まずは一回、<br />お店との相性を<br />確かめてください。</h2>
        </div>
        <div className="plan-card">
          <p className="plan-tag">協力店としてご相談いただけること</p>
          <ul>
            <li><span>✓</span> 初回イベントの開催相談</li>
            <li><span>✓</span> 店舗に合う作品・料理テーマの企画</li>
            <li><span>✓</span> 継続開催プランのご提案</li>
          </ul>
          <div className="price">
            <span>継続プラン例</span>
            <strong>月額 30,000円</strong>
            <small>月2回開催を想定／内容は事前相談</small>
          </div>
          <p className="note">※初回開催の条件・費用は店舗ごとにご相談のうえ決定します。</p>
        </div>
      </section>

      <section className="faq section">
        <div className="section-heading centered">
          <p className="eyebrow">FAQ</p>
          <h2>よくあるご質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>＋</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="apply" id="apply">
        <div className="apply-inner">
          <p className="eyebrow light">PARTNER WANTED</p>
          <h2>あなたの店の一皿から、<br />新しい物語をはじめませんか。</h2>
          <p>
            まだ具体的な開催日や作品が決まっていなくても大丈夫です。
            まずは店舗の状況と、やってみたいことをお聞かせください。
          </p>
          <div className="apply-box">
            <span>協力店相談のご連絡方法</span>
            <strong>このページをお送りした担当者へ<br />「協力店相談」とご返信ください。</strong>
            <p>確認後、日程調整のご連絡を差し上げます。</p>
          </div>
          <a className="button cream" href="#top">ページ上部へ戻る <span>↑</span></a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">T</span>
          <span>TABERU朗読会</span>
        </a>
        <p>物語を聴く。料理を味わう。店を好きになる。</p>
        <small>© TABERU朗読会</small>
      </footer>
    </main>
  );
}
