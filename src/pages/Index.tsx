import { useState } from "react";

const quote1 = {
  lines: [
    "Когда пузырьки в кипящей воде подобны рыбьим глазам",
    "и есть тихий звук — это первое кипение.",
    "",
    "Когда по краям вода кипит подобно бьющим родникам",
    "в виде связок жемчуга — это второе кипение.",
    "",
    "Когда вода кипит как бурлящие волны,",
    "а звук подобен бьющимся валам — это третье кипение.",
    "",
    "Достигнув вершины кипения,",
    "вода становится старой, её уже пить нельзя.",
  ],
};

const quote2 = {
  lines: [
    "Чай по характеру своему скромен,",
    "не стоит заваривать в большом количестве,",
    "а то он станет блеклым и пресным…",
    "",
    "Если когда глотаешь — горек,",
    "а в горле сладок, то это чай.",
  ],
};

const MonkIllustration = () => (
  <div className="monk-wrapper">
    <img
      src="https://cdn.poehali.dev/projects/5a385ddf-3ecd-4850-9309-b71f6c5ae65b/files/078537cc-a839-41ed-a720-19cc66957af5.jpg"
      alt="Лу Юй — монах"
      className="monk-img"
    />
    <div className="monk-geo-accent top-left" />
    <div className="monk-geo-accent bottom-right" />
  </div>
);

const BoilingStages = () => (
  <div className="stages">
    {["I", "II", "III"].map((num, i) => (
      <div key={i} className={`stage stage-${i + 1}`}>
        <span className="stage-num">{num}</span>
        <div className="stage-bubbles">
          {Array.from({ length: i + 1 }).map((_, j) => (
            <span key={j} className="bubble" style={{ animationDelay: `${j * 0.4}s` }} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Index = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-scene">
      <div className={`card-body ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>

        {/* FRONT */}
        <div className="card-face card-front">
          <div className="geo-bg" />
          <div className="geo-line line-1" />
          <div className="geo-line line-2" />
          <div className="geo-diamond" />

          <header className="card-header">
            <span className="label-top">Лу Юй · Чайный канон</span>
            <div className="divider-h" />
          </header>

          <main className="card-main">
            <MonkIllustration />

            <div className="quotes-col">
              <blockquote className="quote quote-1">
                {quote1.lines.map((line, i) =>
                  line === "" ? <br key={i} /> : <p key={i}>{line}</p>
                )}
              </blockquote>

              <BoilingStages />
            </div>
          </main>

          <footer className="card-footer">
            <span className="tap-hint">нажми, чтобы перевернуть</span>
            <div className="geo-stripe" />
          </footer>
        </div>

        {/* BACK */}
        <div className="card-face card-back">
          <div className="geo-bg geo-bg-back" />
          <div className="geo-line line-1" />
          <div className="geo-diamond geo-diamond-back" />

          <div className="back-content">
            <div className="back-label">О чае</div>
            <blockquote className="quote quote-2">
              {quote2.lines.map((line, i) =>
                line === "" ? <br key={i} /> : <p key={i}>{line}</p>
              )}
            </blockquote>
            <div className="back-ornament">
              <span>茶</span>
            </div>
          </div>

          <footer className="card-footer">
            <span className="tap-hint">нажми, чтобы перевернуть</span>
            <div className="geo-stripe" />
          </footer>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .card-scene {
          min-height: 100vh;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: 'Golos Text', sans-serif;
          perspective: 1400px;
          cursor: pointer;
        }

        .card-body {
          position: relative;
          width: 820px;
          min-height: 560px;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .card-body.flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          width: 100%;
          min-height: 560px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ── FRONT ── */
        .card-front {
          background: #1e1e1e;
          border: 2px solid #e8a0b0;
        }

        .geo-bg {
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(232,160,176,0.04) 40px,
              rgba(232,160,176,0.04) 41px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(111,168,120,0.04) 40px,
              rgba(111,168,120,0.04) 41px
            );
          pointer-events: none;
        }

        .geo-line {
          position: absolute;
          background: #6fa878;
          pointer-events: none;
        }
        .line-1 {
          top: 0; left: 60px;
          width: 2px; height: 100%;
          opacity: 0.25;
        }
        .line-2 {
          bottom: 60px; left: 0;
          width: 100%; height: 2px;
          opacity: 0.18;
        }

        .geo-diamond {
          position: absolute;
          top: -28px; right: 80px;
          width: 56px; height: 56px;
          background: #e8a0b0;
          transform: rotate(45deg);
          opacity: 0.7;
        }

        .card-header {
          padding: 1.5rem 2rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          z-index: 1;
        }
        .label-top {
          font-family: 'Cormorant', serif;
          font-size: 0.8rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #e8a0b0;
        }
        .divider-h {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #e8a0b0 0%, #6fa878 60%, transparent 100%);
        }

        .card-main {
          flex: 1;
          display: flex;
          gap: 2rem;
          padding: 1.5rem 2rem;
          position: relative;
          z-index: 1;
        }

        /* Monk */
        .monk-wrapper {
          position: relative;
          flex-shrink: 0;
          width: 260px;
        }
        .monk-img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
          display: block;
        }
        .monk-geo-accent {
          position: absolute;
          width: 24px; height: 24px;
          background: #6fa878;
        }
        .monk-geo-accent.top-left {
          top: -6px; left: -6px;
        }
        .monk-geo-accent.bottom-right {
          bottom: -6px; right: -6px;
          background: #e8a0b0;
        }

        /* Quotes col */
        .quotes-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .quote {
          font-family: 'Cormorant', serif;
          font-style: italic;
          color: #f0ece4;
          line-height: 1.8;
        }
        .quote p { margin: 0; }

        .quote-1 {
          font-size: 0.9rem;
          font-weight: 300;
        }

        /* Boiling stages */
        .stages {
          display: flex;
          gap: 1rem;
          align-items: flex-end;
        }
        .stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .stage-num {
          font-family: 'Cormorant', serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #e8a0b0;
        }
        .stage-bubbles {
          display: flex;
          gap: 3px;
          align-items: flex-end;
        }
        .bubble {
          display: block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #6fa878;
          animation: bubbleFloat 1.6s ease-in-out infinite;
        }
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        .stage-2 .bubble { width: 10px; height: 10px; background: #88c496; }
        .stage-3 .bubble { width: 12px; height: 12px; background: #aad6b4; }

        /* Footer */
        .card-footer {
          padding: 0.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .tap-hint {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: rgba(232,160,176,0.45);
          text-transform: uppercase;
        }
        .geo-stripe {
          width: 60px; height: 3px;
          background: linear-gradient(90deg, #e8a0b0, #6fa878);
        }

        /* ── BACK ── */
        .card-back {
          background: #1a2820;
          border: 2px solid #6fa878;
          transform: rotateY(180deg);
        }
        .geo-bg-back {
          background:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(111,168,120,0.06) 40px,
              rgba(111,168,120,0.06) 41px
            );
        }
        .geo-diamond-back {
          right: auto;
          left: 80px;
          background: #6fa878;
        }

        .back-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem 3rem;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }
        .back-label {
          font-family: 'Cormorant', serif;
          font-size: 0.75rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #6fa878;
        }
        .quote-2 {
          font-size: 1.05rem;
          font-weight: 300;
          color: #e8f5ec;
          max-width: 480px;
        }
        .back-ornament {
          align-self: flex-end;
          font-size: 3.5rem;
          color: rgba(111,168,120,0.25);
          font-family: serif;
          line-height: 1;
          margin-top: -1rem;
        }

        @media (max-width: 700px) {
          .card-body { width: 100%; min-height: auto; }
          .card-face { position: relative; min-height: auto; }
          .card-body.flipped .card-front { display: none; }
          .card-body:not(.flipped) .card-back { display: none; }
          .card-body { transform: none !important; transform-style: flat; }
          .card-main { flex-direction: column; }
          .monk-wrapper { width: 100%; }
          .monk-img { max-height: 200px; }
          .quote-1 { font-size: 0.82rem; }
        }
      `}</style>
    </div>
  );
};

export default Index;
