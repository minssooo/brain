import { useState } from 'react';

export default function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
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
            <span onClick={() => scrollToSection('programs')} style={{ cursor: 'pointer' }}>Programs</span>
            <span onClick={() => scrollToSection('report')} style={{ cursor: 'pointer' }}>Daily Report</span>
            <span onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</span>
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
          id="programs"
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

        <section
          id="report"
          style={{ marginTop: isMobile ? '48px' : '84px' }}
        >
          <div style={{ background: 'white', borderRadius: '28px', padding: '28px' }}>
            <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '12px' }}>
              Daily Report Preview
            </div>
            <h3 style={{ fontSize: '28px', margin: '0 0 14px' }}>오늘의 성장 리포트</h3>
            <p style={{ color: '#475569', lineHeight: 1.9 }}>
              최고 반응속도, 평균 기록, 연속 훈련 일수, 최근 7일 성장률을 한눈에 보여주는
              리포트 기능이 다음 단계에서 연결됩니다.
            </p>
          </div>
        </section>

        <section
          id="about"
          style={{
            marginTop: isMobile ? '48px' : '84px',
          }}
        >
          <div style={{ background: 'white', borderRadius: '28px', padding: '28px' }}>
            <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '12px' }}>
              About
            </div>
            <h2 style={{ fontSize: isMobile ? '28px' : '38px', margin: '0 0 14px' }}>
              뇌과학 독서에서 시작된
              <br />
              개인 브레인 트레이닝 아카이브
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.9, marginBottom: '22px' }}>
              다양한 뇌과학·인지과학 독서를 바탕으로 훈련 설계 아이디어를 축적한 개인 북 아카이브입니다.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '14px',
              }}
            >
              {[
                '뉴럴 링크',
                '기억하는 뇌, 망각하는 뇌',
                '건강의 뇌과학',
                '무의식은 어떻게 나를 설계하는가',
                '나라는 착각',
                '독서의 뇌과학',
                '올리버 색스 대표작',
                '예민해서 힘들 땐 뇌과학',
                '사이코패스의 뇌',
                '생각은 어떻게 행동이 되는가',
                '걷기의 세계',
                '정재승의 과학 콘서트',
              ].map((book, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '18px',
                    minHeight: '96px',
                    boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 700,
                    lineHeight: 1.5,
                  }}
                >
                  {book}
                </div>
              ))}
            </div>
          </div>
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
