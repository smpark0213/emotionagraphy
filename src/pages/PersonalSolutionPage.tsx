import { Link } from 'react-router-dom';
import './PersonalSolutionPage.css';

const PersonalSolutionPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="personal-hero">
        <div className="personal-hero-content">
          <h1>개인을 위한 <span className="highlight">고성과 심리 프로그램</span></h1>
          <p className="subtitle">"최고의 성과는 최적의 심리 상태에서 시작됩니다."</p>
          <p className="description">성과와 심리적 안정성의 균형을 통해 잠재력을 최대로 이끌어내는 고성과자 전문 심리 컨설팅을 경험해 보세요.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section section-white">
        <div className="container">
          <h2 className="section-title">개인 맞춤형 심리 솔루션</h2>
          <p className="section-subtitle">개인과 팀을 위한 과학적이고 체계적인 심리 분석 서비스</p>
          <div className="grid-container-2">
            <div className="service-box">
              <h3>개인 맞춤형 분석</h3>
              <p>회원가입 없이 5분만에 완료되는 과학적 테스트로 당신만의 심리 패턴을 발견하세요.</p>
              <ul className="service-features">
                <li>즉시 이메일로 결과 전송</li>
                <li>스트레스 근본 원인 분석</li>
                <li>맞춤형 해결책 제공</li>
                <li>심층 분석 리포트 옵션</li>
              </ul>
              <Link to="/test" className="btn-secondary">무료 테스트 시작하기</Link>
            </div>
            <div className="service-box">
              <h3>기업용 팀 분석</h3>
              <p>팀장이 제공하는 쿠폰으로 전체 팀의 스트레스 레벨과 심리 상태를 종합 측정합니다.</p>
              <ul className="service-features">
                <li>개별 팀원 결과 이메일 전송</li>
                <li>팀장에게 전체 추이 리포트</li>
                <li>그룹 심리 역학 분석</li>
                <li>조직 개선 방안 제시</li>
              </ul>
              <Link to="/test" className="btn-secondary">팀 테스트 시작하기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="section section-gray">
        <div className="container">
          <h2 className="section-title">왜 고성과자에게 이모셔너그라피 블랙이 필요한가요?</h2>
          <div className="grid-container-3">
            <div className="service-box">
              <h3>01 성과와 웰빙의 균형</h3>
              <p>하버드 비즈니스 리뷰(2021)에 따르면, 고성과자는 번아웃 위험이 63% 더 높습니다. 리더의 정신 건강이 조직 성과와 직결된다는 사실이 입증되었습니다.</p>
            </div>
            <div className="service-box">
              <h3>02 객관적 자기 인식</h3>
              <p>Journal of Applied Psychology(2023)에 따르면, 자기 인식이 높은 리더는 스트레스 상황에서 42% 더 효과적인 의사결정을 합니다.</p>
            </div>
            <div className="service-box">
              <h3>03 의사결정력 강화</h3>
              <p>스탠포드 경영대학원 연구(2022)에 따르면, 심리적 안정성이 높은 경영진은 불확실한 상황에서 27% 더 나은 성과를 보입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section id="differentiators" className="section section-white">
        <div className="container">
          <h2 className="section-title">이모셔너그라피 블랙 심리 프로그램의 차별성</h2>
          <div className="grid-container-3">
            <div className="service-box">
              <h3>① 성과 중심 접근</h3>
              <p>단순한 심리 상담이 아닌, 고성과자의 특성과 환경을 고려한 맞춤형 솔루션을 제공합니다.</p>
            </div>
            <div className="service-box">
              <h3>② 과학적 측정 도구</h3>
              <p>국제적으로 검증된 심리 측정 도구를 활용하여 객관적이고 정확한 분석 결과를 제공합니다.</p>
            </div>
            <div className="service-box">
              <h3>③ 박사급 전문가 1:1 컨설팅</h3>
              <p>고성과 전문직의 특성을 이해하는 전문 컨설턴트가 맞춤형 솔루션을 제시합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section section-black">
        <div className="container">
          <div className="quote-section">
            <p className="quote-text">"심층 분석 리포트를 통해 스트레스의 근본 원인과 당신만의 심리 패턴을 파악하고, 일상에서 바로 적용할 수 있는 맞춤형 해결책을 제공받으세요."</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">98%</span>
              <p className="stat-label">고객 만족도</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">280%</span>
              <p className="stat-label">투자 대비 수익률</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">30%+</span>
              <p className="stat-label">직원 만족도 향상</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">5만+</span>
              <p className="stat-label">누적 프로필 분석</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section section-white">
        <div className="container">
          <h2 className="section-title">함께하는 기업들</h2>
          <p className="section-subtitle">다양한 기업들이 이모셔너그라피 블랙의 서비스를 활용하여 조직 문화 개선에 노력하고 있습니다.</p>
          <div className="partners-container">
            <div className="partner-logo">SAMSUNG</div>
            <div className="partner-logo">NAVER</div>
            <div className="partner-logo">KAKAO</div>
            <div className="partner-logo">SK</div>
            <div className="partner-logo">HYUNDAI</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section section-black">
        <div className="container">
          <h2 className="section-title" style={{ color: '#fff' }}>고객 성공 사례</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>실제 사용자들이 경험한 변화와 성과를 확인해보세요</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"이모셔너그라피 블랙의 심리 검사 덕분에 우리 팀의 스트레스 요인을 정확히 파악할 수 있었고, 맞춤형 솔루션을 통해 팀 분위기가 크게 개선되었습니다."</p>
              <div className="testimonial-author">
                <div className="author-avatar">김</div>
                <div className="author-info">
                  <div className="author-name">김민준</div>
                  <div className="author-title">인사팀장, 삼성전자</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"개인 맞춤형 스트레스 관리 솔루션을 통해 업무 효율성이 크게 향상되었습니다. 직원들의 심리적 안정감이 높아지면서 창의적인 아이디어도 더 많이 나오고 있습니다."</p>
              <div className="testimonial-author">
                <div className="author-avatar">이</div>
                <div className="author-info">
                  <div className="author-name">이지원</div>
                  <div className="author-title">CEO, 스타트업 A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section section-white">
        <div className="container">
          <h2 className="section-title">개인 심리컨설팅 프로그램</h2>
          <p className="section-subtitle">당신의 잠재력을 극대화할 최적의 솔루션을 선택하세요</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <span className="pricing-badge">오픈 특가</span>
              <h3 className="pricing-title">기본 감정 패턴 검사</h3>
              <div className="pricing-price">
                <span className="original-price">정가 29만원</span>
                <span className="current-price">19만원</span>
              </div>
              <ul className="pricing-features">
                <li>감정 패턴 검사</li>
                <li>스트레스 심리 검사</li>
                <li>개인 분석 리포트 제공</li>
                <li>1회 심리 컨설팅 (50분)</li>
              </ul>
              <Link to="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'inline-block' }}>프로그램 신청하기</Link>
            </div>
            <div className="pricing-card">
              <span className="pricing-badge">오픈 특가</span>
              <h3 className="pricing-title">3개월 특별관리 프로그램</h3>
              <div className="pricing-price">
                <span className="original-price">정가 99만원</span>
                <span className="current-price">79만원</span>
              </div>
              <ul className="pricing-features">
                <li>감정 패턴 검사</li>
                <li>스트레스 심리 검사</li>
                <li>심층 심리 검사</li>
                <li>분석 리포트 제공</li>
                <li>4회 심리 컨설팅 (1회 50분 x 4회기)</li>
              </ul>
              <Link to="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'inline-block' }}>프로그램 신청하기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalSolutionPage;