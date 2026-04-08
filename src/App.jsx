import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('landing');
  const isMobile = window.innerWidth < 768;

  const features = [
    {
      title: 'Speed Processing',
      desc: '짧은 순간의 시각 자극을 빠르게 인지하고 반응하는 처리속도 집중 훈련',
    },
    {
      title: 'Memory Flow',
      desc: '작업기억과 패턴 기억을 자연스럽게 강화하는 카드·숫자 기반 게임 확장',
    },
    {
      title: 'Daily Progress',
      desc: '플레이 기록, 최고 점수, 일일 성장 리포트로 습관형 두뇌 루틴 완성',
    },
  ];

  if (screen === 'playing') {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          padding: '24px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '720px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '32px',
            padding: isMobile ? '28px' : '48px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          }}
        >
          <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '16px' }}>
            Speed Focus • Reaction Training
          </div>
          <h1 style={{ fontSize: isMobile ? '34px' : '54px', margin: '0 0 16px' }}>
            Game Ready
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.8, opacity: 0.9 }}>
            곧 첫 번째 반응속도 훈련 게임이 시작됩니다.
            다음 단계에서 화살표 반응 게임과 점수 리포트가 연결됩니다.
          </p>
          <div
            style={{
              marginTop: '28px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setScreen('landing')}
              style={{
                background: 'white',
                color: '#111827',
                border: 'none',
                borderRadius: '18px',
                padding: '16px 24px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Back to Home
            </button>
            <button
              style={{
                background: '#22c55e',
                color: 'white',
                border: 'none',
                borderRadius: '18px',
                padding: '16px 24px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Start Round
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
        color: '#0f172a',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          backdropFilter: 'blur(14px)',
          background: 'rgba(248,250,252,0.82)',
          borderBottom: '1px solid rgba(226,232,240,0.8)',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: isMobile ? '14px 18px' : '18px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontWeight: 800, fontSize: '18px' }}>mins Brain Studio</div>
          <div
            style={{
              display: 'flex',
              gap: isMobile ? '10px' : '18px',
              alignItems: 'center',
              fontSize: isMobile ? '13px' : '15px',
            }}
          >
            <span>About</span>
            <span>Programs</span>
            <span>Daily Report</span>
            <button
              onClick={() => setScreen('playing')}
              style={{
                background: '#111827',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                padding: isMobile ? '10px 14px' : '12px 18px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Start
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: isMobile ? '28px 18px 60px' : '72px 28px 100px',
        }}
      >
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr',
            gap: isMobile ? '24px' : '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.8)',
                boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '18px',
              }}
            >
              매일 5분, 더 선명한 사고를 위한 훈련
            </div>

            <h1
              style={{
                fontSize: isMobile ? '34px' : '58px',
                lineHeight: 1.12,
                margin: '0 0 18px',
              }}
            >
              더 빠르게 인지하고
              <br />
              더 오래 집중하는
              <br />
              프리미엄 두뇌 훈련
            </h1>

            <p
              style={{
                fontSize: isMobile ? '16px' : '20px',
                lineHeight: 1.8,
                color: '#475569',
                marginBottom: '28px',
              }}
            >
              처리속도, 집중력, 작업기억을 하나의 루틴으로 연결하는 차세대 브레인 트레이닝 플랫폼.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '12px',
              }}
            >
              <button
                onClick={() => setScreen('playing')}
                style={{
                  background: '#111827',
                  color: 'white',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '16px 26px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Start Training
              </button>
              <button
                style={{
                  background: 'white',
                  color: '#111827',
                  border: '1px solid #dbe4ee',
                  borderRadius: '18px',
                  padding: '16px 26px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Explore Programs
              </button>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.92)',
              borderRadius: '32px',
              padding: isMobile ? '22px' : '30px',
            }}
          >
            <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '18px' }}>
              Today’s Cognitive Snapshot
            </div>
            <Metric title="Reaction" value="0.82s" />
          </div>
        </section>

        <section
          style={{
            marginTop: isMobile ? '48px' : '84px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {features.map((item, idx) => (
            <div key={idx} style={{ background: 'white', borderRadius: '28px', padding: '26px' }}>
              <h3>{item.title}</h3>
              <p style={{ color: '#475569', lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div style={{ background: '#f8fafc', borderRadius: '22px', padding: '22px' }}>
      <div style={{ color: '#64748b', fontSize: '14px' }}>{title}</div>
      <div style={{ fontSize: '30px', fontWeight: 800, marginTop: '8px' }}>{value}</div>
    </div>
  );
}
