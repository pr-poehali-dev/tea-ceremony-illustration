import { useState } from "react";

const ILLUSTRATION = "https://cdn.poehali.dev/projects/5a385ddf-3ecd-4850-9309-b71f6c5ae65b/files/07589884-d891-4b87-ae47-9aa72e412422.jpg";

const WillowBranch = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 120 220"
    style={{ width: "100%", height: "100%", transform: flip ? "scaleX(-1)" : undefined }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M60 210 C55 165 45 115 38 55" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 210 C66 172 76 128 82 78" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 210 C56 168 46 138 24 105" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M60 210 C64 170 72 142 94 118" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
    {[
      [38,55],[41,78],[40,102],[44,125],
      [82,78],[80,100],[77,122],[75,142],
      [24,105],[28,124],[32,142],
      [94,118],[90,136],[86,154],
    ].map(([cx,cy],i) => (
      <ellipse key={i} cx={cx} cy={cy} rx="5.5" ry="9" fill="#D4C4A0" opacity="0.88" />
    ))}
    {[
      [38,55],[41,78],[40,102],[44,125],
      [82,78],[80,100],[77,122],[75,142],
      [24,105],[28,124],[32,142],
      [94,118],[90,136],[86,154],
    ].map(([cx,cy],i) => (
      <circle key={`d${i}`} cx={cx} cy={cy-3} r="2.5" fill="#FFF8E7" opacity="0.75" />
    ))}
  </svg>
);

const TeaCup = () => (
  <svg viewBox="0 0 80 70" width="70" height="62" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* steam */}
    <path d="M22 18 Q18 10 22 4" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M32 16 Q28 8 32 2" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2.4s" repeatCount="indefinite" begin="0.4s" />
    </path>
    <path d="M42 18 Q38 10 42 4" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" opacity="0.45">
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="1.8s" repeatCount="indefinite" begin="0.8s" />
    </path>
    {/* cup */}
    <path d="M10 24 L14 56 Q32 62 50 56 L54 24 Z" fill="#FFF8E7" stroke="#D4A853" strokeWidth="2" strokeLinejoin="round" />
    {/* handle */}
    <path d="M54 30 Q68 32 68 44 Q68 56 54 52" stroke="#D4A853" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* saucer */}
    <ellipse cx="32" cy="60" rx="26" ry="5" fill="#E8C87A" opacity="0.9" />
    {/* tea surface */}
    <path d="M13 30 Q32 34 51 30" stroke="#C49A2A" strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

const EasterEgg = ({ color, stripe, rotate }: { color: string; stripe: string; rotate: number }) => (
  <div style={{ transform: `rotate(${rotate}deg)`, display: "inline-block" }}>
    <svg viewBox="0 0 36 48" width="36" height="48" fill="none">
      <ellipse cx="18" cy="26" rx="16" ry="20" fill={color} />
      <ellipse cx="18" cy="26" rx="16" ry="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="2" y1="26" x2="34" y2="26" stroke={stripe} strokeWidth="3" opacity="0.5" />
      <line x1="6" y1="18" x2="30" y2="18" stroke={stripe} strokeWidth="2" opacity="0.3" />
      <ellipse cx="18" cy="18" rx="7" ry="5" fill="rgba(255,255,255,0.15)" />
    </svg>
  </div>
);

const Index = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="scene" onClick={() => setFlipped(f => !f)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>

        {/* ── FRONT ── */}
        <div className="face front">
          <div className="geo-grid" />
          <div className="deco-diamond deco-tr" />
          <div className="deco-square deco-tl" />
          <div className="deco-line deco-vline" />
          <div className="deco-line deco-hline" />

          <div className="branch bl"><WillowBranch /></div>
          <div className="branch br"><WillowBranch flip /></div>

          <div className="illus-frame">
            <img src={ILLUSTRATION} alt="Пасхальная открытка" className="illus" />
            <div className="illus-corner ic-tl" />
            <div className="illus-corner ic-br" />
          </div>

          <div className="center-label">
            <span className="easter-text">Христос Воскресе</span>
            <div className="golden-divider" />
            <span className="easter-sub">Воистину Воскресе</span>
          </div>

          <div className="eggs-zone">
            <EasterEgg color="#D4A853" stripe="#FFF8E7" rotate={-14} />
            <EasterEgg color="#E8C87A" stripe="#8B6914" rotate={4} />
            <EasterEgg color="#C49A2A" stripe="#FFF8E7" rotate={10} />
          </div>

          <div className="cup-zone"><TeaCup /></div>

          <footer className="foot">
            <span className="hint">нажми, чтобы перевернуть ↺</span>
            <div className="stripe" />
          </footer>
        </div>

        {/* ── BACK ── */}
        <div className="face back">
          <div className="geo-grid geo-grid-back" />
          <div className="deco-diamond deco-bl-back" />
          <div className="deco-square deco-tr-back" />
          <div className="branch br-back"><WillowBranch flip /></div>

          <div className="back-inner">
            <p className="back-overline">Светлый праздник</p>
            <div className="golden-divider" />
            <blockquote className="back-big">
              Пусть этот день согреет<br />душу и дом
            </blockquote>
            <div className="golden-divider short" />
            <p className="back-body">
              Верба расцветает первой — знак весны и обновления.
              Она приносит в дом тепло и свет после долгой зимы.
            </p>
            <p className="back-body">
              Выпейте чашку чая в кругу близких —<br />
              это и есть настоящая пасхальная радость.
            </p>
            <div className="back-eggs">
              <EasterEgg color="#D4A853" stripe="#FFF8E7" rotate={-8} />
              <EasterEgg color="#FBF0D2" stripe="#C49A2A" rotate={5} />
              <EasterEgg color="#E8C87A" stripe="#8B6914" rotate={-3} />
            </div>
          </div>

          <footer className="foot">
            <span className="hint">нажми, чтобы перевернуть ↺</span>
            <div className="stripe" />
          </footer>
        </div>
      </div>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .scene {
          min-height: 100vh;
          background: #2A1F0E;
          background-image:
            radial-gradient(ellipse at 25% 25%, rgba(212,168,83,0.15) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 75%, rgba(212,168,83,0.1) 0%, transparent 50%);
          display: flex; align-items: center; justify-content: center;
          padding: 2rem;
          font-family: 'Golos Text', sans-serif;
          perspective: 1600px;
          cursor: pointer;
          user-select: none;
        }

        .card {
          position: relative;
          width: 800px; height: 540px;
          transform-style: preserve-3d;
          transition: transform 0.75s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .card.flipped { transform: rotateY(180deg); }

        .face {
          position: absolute; inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }

        /* ── FRONT ── */
        .front {
          background: #FDF6E3;
          border: 2px solid #D4A853;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(212,168,83,0.06);
        }

        .geo-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            repeating-linear-gradient(45deg,
              transparent 0,transparent 42px,
              rgba(212,168,83,0.08) 42px,rgba(212,168,83,0.08) 43px),
            repeating-linear-gradient(-45deg,
              transparent 0,transparent 42px,
              rgba(139,105,20,0.05) 42px,rgba(139,105,20,0.05) 43px);
        }
        .geo-grid-back {
          background-image:
            repeating-linear-gradient(-45deg,
              transparent 0,transparent 42px,
              rgba(139,105,20,0.07) 42px,rgba(139,105,20,0.07) 43px);
        }

        .deco-diamond {
          position: absolute;
          width: 50px; height: 50px;
          transform: rotate(45deg);
          pointer-events: none;
        }
        .deco-tr { top: -18px; right: 72px; background: #D4A853; opacity: 0.8; }
        .deco-bl-back { bottom: 40px; left: 72px; background: #C49A2A; opacity: 0.6; }

        .deco-square {
          position: absolute;
          width: 18px; height: 18px;
          pointer-events: none;
        }
        .deco-tl { top: 14px; left: 14px; background: #E8C87A; }
        .deco-tr-back { top: 14px; right: 14px; background: #D4A853; }

        .deco-line {
          position: absolute; background: rgba(212,168,83,0.2); pointer-events: none;
        }
        .deco-vline { top: 0; left: 68px; width: 1px; height: 100%; }
        .deco-hline { bottom: 68px; left: 0; width: 100%; height: 1px; }

        /* Branches */
        .branch {
          position: absolute; top: 0;
          width: 100px; height: 220px;
          pointer-events: none; z-index: 2;
        }
        .bl { left: 14px; }
        .br { right: 14px; }
        .br-back { position: absolute; top: 0; right: 14px; width: 90px; height: 200px; pointer-events: none; opacity: 0.5; }

        /* Illustration */
        .illus-frame {
          position: absolute;
          top: 22px; left: 50%;
          transform: translateX(-50%);
          width: 270px; height: 270px;
          clip-path: polygon(6% 0%, 94% 0%, 100% 6%, 100% 94%, 94% 100%, 6% 100%, 0% 94%, 0% 6%);
          overflow: hidden;
          border: 3px solid #D4A853;
          z-index: 1;
          box-shadow: 0 6px 24px rgba(139,105,20,0.3);
        }
        .illus { width: 100%; height: 100%; object-fit: cover; display: block; }
        .illus-corner {
          position: absolute; width: 20px; height: 20px; background: #D4A853;
        }
        .ic-tl { top: 0; left: 0; }
        .ic-br { bottom: 0; right: 0; }

        /* Center label */
        .center-label {
          position: absolute;
          bottom: 88px; left: 50%;
          transform: translateX(-50%);
          text-align: center; width: 300px;
          z-index: 3;
        }
        .easter-text {
          font-family: 'Cormorant', serif;
          font-size: 1.75rem; font-weight: 600;
          color: #5A3A06; letter-spacing: 0.05em;
          display: block;
        }
        .easter-sub {
          font-family: 'Cormorant', serif;
          font-size: 0.9rem; font-style: italic;
          color: #8B6914; letter-spacing: 0.12em;
          display: block; margin-top: 4px;
        }
        .golden-divider {
          width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #D4A853 30%, #C49A2A 70%, transparent);
          margin: 7px 0;
        }
        .golden-divider.short { width: 50%; margin: 7px auto; }

        /* Eggs */
        .eggs-zone {
          position: absolute; bottom: 82px; left: 128px;
          display: flex; gap: 10px; align-items: flex-end;
          z-index: 3;
        }

        /* Cup */
        .cup-zone {
          position: absolute; bottom: 76px; right: 114px;
          z-index: 3;
        }

        /* Footer */
        .foot {
          position: absolute; bottom: 0; left: 0; right: 0; height: 44px;
          background: rgba(212,168,83,0.1);
          border-top: 1px solid rgba(212,168,83,0.3);
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem; z-index: 5;
        }
        .hint {
          font-size: 0.62rem; letter-spacing: 0.14em;
          color: rgba(139,105,20,0.45); text-transform: uppercase;
        }
        .stripe {
          width: 50px; height: 3px;
          background: linear-gradient(90deg, #D4A853, #E8C87A);
        }

        /* ── BACK ── */
        .back {
          background: #FBF0D2;
          border: 2px solid #C49A2A;
          transform: rotateY(180deg);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          display: flex; flex-direction: column;
        }

        .back-inner {
          flex: 1; display: flex; flex-direction: column;
          justify-content: center; gap: 1rem;
          padding: 2.5rem 3.5rem 2.5rem 3rem;
          position: relative; z-index: 2;
          max-width: 560px;
        }
        .back-overline {
          font-size: 0.68rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: #8B6914;
          font-family: 'Golos Text', sans-serif;
        }
        .back-big {
          font-family: 'Cormorant', serif;
          font-size: 1.9rem; font-weight: 600;
          font-style: italic; color: #4A2E04;
          line-height: 1.2;
        }
        .back-body {
          font-family: 'Cormorant', serif;
          font-style: italic; font-size: 0.95rem;
          color: #6B4A0A; line-height: 1.75;
        }
        .back-eggs {
          display: flex; gap: 8px; align-items: flex-end;
          margin-top: 0.5rem;
        }

        @media (max-width: 820px) {
          .card { width: 100%; height: auto; transform-style: flat; }
          .face { position: relative; inset: auto; height: auto; min-height: 480px; }
          .card.flipped .front, .card:not(.flipped) .back { display: none; }
          .card { transform: none !important; }
          .illus-frame { width: 200px; height: 200px; top: 16px; }
          .easter-text { font-size: 1.3rem; }
          .back-inner { padding: 2rem; }
          .back-big { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  );
};

export default Index;
