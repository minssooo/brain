export default function App() {
  const features = [
    {
      title: 'Speed Focus',
      desc: '중앙 자극과 주변 위치를 빠르게 판단하는 처리속도 훈련',
    },
    {
      title: 'Memory Boost',
      desc: '숫자/카드 기억 기반 작업기억 훈련으로 확장 예정',
    },
    {
      title: 'Adaptive Difficulty',
      desc: '정답률에 따라 자동으로 속도와 난이도가 조절',
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f1f5f9',
      color: '#0f172a',
      fontFamily: 'Arial, sans-serif',
      padding: '60px 20px'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'white',
              padding: '10px 16px',
              borderRadius: '999px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              marginBottom: '20px'
            }}>
              Brain Training Web MVP
            </div>

            <h1 style={{
              fontSize: '48px',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              집중력과 처리속도를 높이는
              <br />
              심플 두뇌훈련 게임
            </h1>

            <p style={{
              color: '#475569',
              lineHeight: 1.8,
              fontSize: '18px',
              marginBottom: '30px'
            }}>
              BrainHQ 스타일의 속도 처리 훈련을 참고한 심플 웹사이트입니다.
              랜딩페이지부터 게임, 점수 저장, 일일 훈련 리포트까지 순차 확장 가능한 구조입니다.
            </p>

            <div>
              <button style={{
                background: '#111827',
                color: 'white',
                border: 'none',
                padding: '14px 24px',
                borderRadius: '16px',
                marginRight: '12px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                게임 시작
              </button>

              <button style={{
                background: 'white',
                border: '1px solid #cbd5e1',
                padding: '14px 24px',
                borderRadius: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                기능 보기
              </button>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '32px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}>
            <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
              오늘의 훈련 미리보기
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}>
              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '20px' }}>
                <div style={{ color: '#64748b', fontSize: '14px' }}>반응속도</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>0.82s</div>
              </div>

              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '20px' }}>
                <div style={{ color: '#64748b', fontSize: '14px' }}>집중도</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>92%</div>
              </div>

              <div style={{
                background: '#f8fafc',
                borderRadius: '20px',
                padding: '20px',
                gridColumn: '1 / span 2'
              }}>
                <div style={{ color: '#64748b', fontSize: '14px' }}>추천 훈련</div>
                <div style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '8px' }}>
                  Speed Focus Game
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '80px'
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
            }}>
              <h3>{f.title}</h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}