import React from 'react';
import './OrganizationalSolutionPage.css';

const OrganizationalSolutionPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의사항이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <div className="organizational-solution-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content fade-in-up">
          <h1>당신의&nbsp;회사, <span className="highlight-white">조직&nbsp;심리&nbsp;파트너</span>가&nbsp;필요합니다</h1>
          <p className="subtitle">조직문화의 심리적 안정성으로 성과를 높이는 과학적인 방법</p>
          <a href="#contact" className="btn-primary">무료 컨설팅 상담 요청하기</a>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section section-white">
        <div className="container">
          <h2 className="section-title">성과를 내는 리더라면 반드시 체크해야 할 것</h2>
          <p className="section-subtitle">리더와 조직이 겪는 현실적인 문제들을 확인해보세요</p>
          
          <div className="problem-grid">
            <div className="problem-item">
              <h3>심리적 안정성 저하</h3>
              <p>팀원들이 자유롭게 의견을 제시하지 못하고, 실수를 두려워하며 소극적으로 변하고 있습니다.</p>
            </div>
            <div className="problem-item">
              <h3>부서간 갈등과 불신</h3>
              <p>부서간 협업이 원활하지 않고, 서로에 대한 불신이 누적되어 조직 전체의 생산성이 떨어집니다.</p>
            </div>
            <div className="problem-item">
              <h3>높은 이직률과 번아웃</h3>
              <p>우수한 인재들이 계속 떠나고, 남은 직원들은 업무 과부하로 번아웃을 경험하고 있습니다.</p>
            </div>
            <div className="problem-item">
              <h3>비효율적인 커뮤니케이션</h3>
              <p>정보 전달이 원활하지 않고, 회의는 많지만 실질적인 결과로 이어지지 않습니다.</p>
            </div>
            <div className="problem-item">
              <h3>조직문화 충돌</h3>
              <p>세대간, 부서간, 개인간 가치관과 업무 방식의 차이로 인한 지속적인 마찰이 발생합니다.</p>
            </div>
            <div className="problem-item">
              <h3>변화 저항과 혁신 부족</h3>
              <p>새로운 시도나 변화에 대한 저항이 강하고, 혁신적인 아이디어가 나오지 않습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section section-black">
        <div className="container">
          <h2 className="section-title">Fractional Chief Culture Officer</h2>
          <p className="section-subtitle">심리학 기반의 정교한 조직문화 솔루션을 시간제 계약으로 제공합니다</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>조직문화 충돌 진단 및 중재</h3>
              <p>과학적 진단 도구를 활용하여 조직 내 갈등의 근본 원인을 파악하고, 심리학 기반의 중재 솔루션을 제공합니다.</p>
            </div>
            <div className="service-card">
              <h3>온보딩·오프보딩 프로세스 설계</h3>
              <p>신입 직원의 조직 적응을 돕고, 퇴사자의 지식 전수를 원활하게 하는 심리학적 프로세스를 설계합니다.</p>
            </div>
            <div className="service-card">
              <h3>갈등 커뮤니케이션 구조 설계</h3>
              <p>건설적인 갈등 해결과 효과적인 의사소통을 위한 체계적인 커뮤니케이션 구조를 구축합니다.</p>
            </div>
            <div className="service-card">
              <h3>리더십 코칭 및 워크숍</h3>
              <p>심리학 이론에 기반한 리더십 역량 강화 프로그램과 팀 빌딩 워크숍을 진행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-white">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">68%</span>
              <p className="stat-label">리더의 심리적 안정감이 팀 성과에 직접 영향을 미친다고 응답한 기업<br />(맥킨지 2023)</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">3.5배</span>
              <p className="stat-label">심리적 안정성이 보장된 팀의 혁신 성과 향상률<br />(하버드 비즈니스 리뷰 2022)</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">300%</span>
              <p className="stat-label">심리 관리 프로그램 도입 기업의 투자 대비 수익률<br />(글로벌 HR 리서치 2023)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section section-black">
        <div className="container">
          <h2 className="section-title">컨설팅 프로세스</h2>
          <p className="section-subtitle">체계적이고 과학적인 접근을 통해 지속 가능한 변화를 만들어갑니다</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>초기 상담</h3>
              <p>조직의 현재 상황과 목표를 파악하고 맞춤형 솔루션 방향을 설정합니다.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>데이터 수집</h3>
              <p>과학적 진단 도구를 활용하여 조직문화와 구성원의 심리 상태를 분석합니다.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>솔루션 설계</h3>
              <p>수집된 데이터를 바탕으로 조직에 최적화된 맞춤형 솔루션을 설계합니다.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>실행 및 코칭</h3>
              <p>설계된 솔루션을 단계적으로 실행하며 지속적인 코칭을 제공합니다.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>결과 측정</h3>
              <p>정량적, 정성적 지표를 통해 성과를 측정하고 지속적인 개선 방안을 제시합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="section section-white">
        <div className="container">
          <h2 className="section-title">왜 Emotiongraphy Black인가</h2>
          <p className="section-subtitle">글로벌 기업들이 신뢰하는 과학적 접근법과 검증된 성과</p>
          
          <div className="features-grid">
            <div className="feature-item">
              <h3>심리치료 박사 + 조직문화 전문성</h3>
              <p>아이비리그 출신 심리치료박사이자 조직문화 컨설팅 전문가가 심층적이고 실질적인 솔루션을 제공합니다.</p>
            </div>
            <div className="feature-item">
              <h3>실증 데이터 기반 접근</h3>
              <p>Google, Microsoft, Salesforce 등 글로벌 기업의 검증된 방법론과 최신 연구 결과를 기반으로 합니다.</p>
            </div>
            <div className="feature-item">
              <h3>3개월 내 가시적 성과</h3>
              <p>평균 3개월 내에 인재 유지율 향상, 생산성 증대, 조직 만족도 개선 등의 구체적인 성과를 확인할 수 있습니다.</p>
            </div>
            <div className="feature-item">
              <h3>맞춤형 프랙셔널 서비스</h3>
              <p>풀타임 CCO 고용 부담 없이 필요한 만큼만 전문 서비스를 받을 수 있는 효율적인 솔루션입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-black">
        <div className="container">
          <h2 className="section-title">무료 컨설팅 상담</h2>
          <p className="section-subtitle">조직의 심리적 안정성 향상을 위한 첫걸음을 시작하세요</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" placeholder="이름을 입력해주세요" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">회사명</label>
                <input type="text" id="company" name="company" placeholder="회사명을 입력해주세요" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" placeholder="이메일을 입력해주세요" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">문의 내용</label>
              <textarea id="message" name="message" placeholder="조직의 현재 상황과 궁금한 점을 자세히 알려주세요" required></textarea>
            </div>
            <button type="submit" className="btn-primary">무료 상담 신청하기</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default OrganizationalSolutionPage;