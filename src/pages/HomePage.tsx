import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>SUSTAINABLE<br />HIGH-PERFORMANCE</h1>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <p className="vision-text">
            성과와 삶의 균형은 충돌하는 것이 아니라, <br />
            <strong>함께 발전할 때</strong> 비로소 완성됩니다.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Why Emotiongraphy Black?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>성과 중심의 한계</h3>
              <p>성과만을 쫓는 시대는 끝났습니다. 무너지지 않는 성장을 위해, 이제는 심리 관리가 필수입니다.</p>
            </div>
            <div className="why-card">
              <h3>보이지 않는 위험</h3>
              <p>개인의 번아웃, 우울, 불안은 결국 조직의 붕괴로 이어집니다. 치료가 아닌 예방이 필요합니다.</p>
            </div>
            <div className="why-card">
              <h3>과학적 솔루션의 부재</h3>
              <p>감이나 위로가 아닌, 데이터 기반의 정밀한 진단과 실행 가능한 맞춤형 솔루션이 필요합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Who We Are For</h2>
          <div className="who-grid">
            <div className="who-card">
              <h3>For Individuals</h3>
              <ul>
                <li>지속가능한 성과를 원하는 전문가</li>
                <li>심리적 안정을 찾고 싶은 리더</li>
                <li>냉철한 의사결정이 필요한 책임자</li>
                <li>나만의 루틴을 만들고 싶은 창업가</li>
              </ul>
            </div>
            <div className="who-card">
              <h3>For Organizations</h3>
              <ul>
                <li>구성원의 번아웃 리스크 관리</li>
                <li>팀 단위 스트레스 레벨 진단</li>
                <li>데이터 기반 조직문화 개선</li>
                <li>전문직을 위한 심리 돌봄 시스템</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">CEO</h2>
          <div className="ceo-grid">
            <div className="ceo-photo"></div>
            <div className="ceo-bio">
              <h3>허정윤 (Jeongyun April Hur)</h3>
              <p className="title">이모셔너그라피 블랙 CEO | 조직문화 심리 컨설턴트</p>
              <p>허정윤은 심리 기반 조직문화 솔루션 브랜드 <strong>이모셔너그라피 블랙</strong>에서 심리학과 조직심리학을 바탕으로, 개인과 조직이 <strong>지속 가능한 방식으로 성장할 수 있는 심리 솔루션을 설계하고 실행</strong>하고 있습니다.</p>
              <p>호주, 캐나다, 미국 등 다양한 문화권에서의 생활 경험을 통해 <strong>다문화 심리에 대한 깊은 이해</strong>를 쌓았고, 이를 기반으로 <strong>성과 압박 속에서 일하는 전문가들과 조직을 위한 정서적 회복과 자기 인식 도구</strong>를 개발하고 있습니다.</p>
              <p><strong>미국에서 심리치료 박사 과정을 이수</strong>하고, <strong>서울대 교육종합연구원에서의 연구 경험</strong>과 <strong>학계와 현장을 넘나드는 전문성</strong>을 바탕으로, 조직과 개인이 감정에 압도되지 않고 <strong>자신만의 페이스로 고성과를 유지할 수 있도록 돕는 것</strong>이 그녀의 목표입니다.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;