import { useState } from 'react';
import './TestPage.css';

interface Question {
  id: number;
  text: string;
  category: string;
}

const questions: Question[] = [
  // 스트레스 인식 (1-5)
  { id: 1, text: "최근 일상에서 통제할 수 없는 상황이 많다고 느낀다.", category: "stress" },
  { id: 2, text: "예상치 못한 일이 생기면 불안하고 당황스럽다.", category: "stress" },
  { id: 3, text: "중요한 일들이 내 뜻대로 되지 않는다고 느낀다.", category: "stress" },
  { id: 4, text: "해야 할 일이 너무 많아 부담스럽다.", category: "stress" },
  { id: 5, text: "일상적인 문제들을 처리하는 것이 어렵게 느껴진다.", category: "stress" },
  
  // 정서 상태 (6-8)
  { id: 6, text: "이유 없이 짜증이 나거나 화가 날 때가 많다.", category: "emotion" },
  { id: 7, text: "평소보다 우울하거나 슬픈 기분이 자주 든다.", category: "emotion" },
  { id: 8, text: "미래에 대한 희망이나 기대감이 줄어들었다.", category: "emotion" },
  
  // 정서 조절 (9-12)
  { id: 9, text: "감정이 격해지면 진정하기까지 시간이 오래 걸린다.", category: "regulation" },
  { id: 10, text: "부정적인 감정을 다스리는 것이 어렵다.", category: "regulation" },
  { id: 11, text: "감정을 표현하는 것이 불편하거나 어색하다.", category: "regulation" },
  { id: 12, text: "다른 사람들 앞에서 감정을 숨기려고 노력한다.", category: "regulation" },
  
  // 회복탄력성 (13-16)
  { id: 13, text: "어려운 일이 생겨도 금방 회복하는 편이다.", category: "resilience" },
  { id: 14, text: "스트레스 상황에서도 긍정적인 면을 찾으려 한다.", category: "resilience" },
  { id: 15, text: "문제가 생기면 해결책을 찾기 위해 적극적으로 노력한다.", category: "resilience" },
  { id: 16, text: "나는 대체로 내 삶에 만족한다.", category: "resilience" },
  
  // 취약성/정서인식 (17-20)
  { id: 17, text: "작은 일에도 예민하게 반응하는 편이다.", category: "vulnerability" },
  { id: 18, text: "다른 사람의 평가나 시선이 많이 신경 쓰인다.", category: "vulnerability" },
  { id: 19, text: "실수나 실패를 받아들이기 어렵다.", category: "vulnerability" },
  { id: 20, text: "내 감정이 무엇인지 잘 모르겠을 때가 많다.", category: "vulnerability" }
];

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'email' | 'result'>('intro');
  const [organizationCode, setOrganizationCode] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [email, setEmail] = useState('');
  const [resultType, setResultType] = useState('');

  const handleStartTest = () => {
    setCurrentStep('test');
  };

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const calculateResult = () => {
    // 각 카테고리별 점수 계산
    const scores = {
      stress: 0,
      emotion: 0,
      regulation: 0,
      resilience: 0,
      vulnerability: 0
    };

    questions.forEach(q => {
      const answer = answers[q.id] || 3;
      if (q.category === 'resilience') {
        scores[q.category] += (6 - answer); // 역채점
      } else {
        scores[q.category as keyof typeof scores] += answer;
      }
    });

    // 결과 타입 결정 (간단한 로직)
    const totalStress = scores.stress + scores.emotion + scores.regulation + scores.vulnerability;
    
    if (totalStress > 60) {
      setResultType('과활성 초조형');
    } else if (totalStress > 50) {
      setResultType('성취중독 불안형');
    } else if (totalStress > 40) {
      setResultType('고기능 억제형');
    } else if (scores.resilience < 10) {
      setResultType('무기력 회피형');
    } else {
      setResultType('회복탄력 안정형');
    }
  };

  const handleSubmitTest = () => {
    if (Object.keys(answers).length < questions.length) {
      alert('모든 문항에 응답해주세요.');
      return;
    }
    calculateResult();
    setCurrentStep('email');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    console.log('Email submitted:', email);
    console.log('Result type:', resultType);
    setCurrentStep('result');
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="test-container">
      {currentStep === 'intro' && (
        <div className="test-intro">
          <h1>E-SATI 3.1</h1>
          <h2>감정 자가진단 테스트</h2>
          <p>개인과 조직의 현재 스트레스 및 심리상태를 분석하고<br />
             당신의 성향에 맞는 최적의 솔루션을 제공합니다</p>
          
          <div className="org-code-section">
            <label>조직 코드 입력 (선택사항)</label>
            <div className="org-code-input">
              <input
                type="text"
                placeholder="조직 코드를 입력하세요"
                value={organizationCode}
                onChange={(e) => setOrganizationCode(e.target.value)}
              />
              <button className="btn-verify">확인</button>
            </div>
            <p className="org-code-desc">
              같은 조직 코드로 참여한 구성원들의 결과를 함께 확인할 수 있습니다.
            </p>
          </div>

          <button className="btn btn-primary btn-lg" onClick={handleStartTest}>
            테스트 시작하기
          </button>
        </div>
      )}

      {currentStep === 'test' && (
        <div className="test-questions">
          <div className="test-header">
            <h2>E-SATI 3.1 심리 진단</h2>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">
              {Object.keys(answers).length} / {questions.length} 문항 완료
            </p>
          </div>

          <div className="scale-guide">
            <h3>응답 방식</h3>
            <div className="scale-items">
              <span><strong>1</strong> 전혀 그렇지 않다</span>
              <span><strong>2</strong> 그렇지 않은 편이다</span>
              <span><strong>3</strong> 보통이다</span>
              <span><strong>4</strong> 그런 편이다</span>
              <span><strong>5</strong> 매우 그렇다</span>
            </div>
          </div>

          <div className="questions-list">
            {questions.map(q => (
              <div key={q.id} className="question-item">
                <div className="question-text">
                  <span className="question-number">{q.id}.</span>
                  {q.text}
                </div>
                <div className="answer-options">
                  {[1, 2, 3, 4, 5].map(value => (
                    <label key={value} className="radio-option">
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        value={value}
                        checked={answers[q.id] === value}
                        onChange={() => handleAnswer(q.id, value)}
                      />
                      <span className="radio-label">{value}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button 
            className="btn btn-primary btn-submit"
            onClick={handleSubmitTest}
          >
            제출하기
          </button>
        </div>
      )}

      {currentStep === 'email' && (
        <div className="email-collection">
          <h2>결과 받기</h2>
          <p>상세한 분석 결과를 이메일로 받아보세요</p>
          
          <form onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <label>이메일 주소</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              결과 받기
            </button>
          </form>

          <p className="privacy-notice">
            * 입력하신 이메일은 결과 전송 목적으로만 사용되며,<br />
            마케팅 목적으로는 사용되지 않습니다.
          </p>
        </div>
      )}

      {currentStep === 'result' && (
        <div className="test-result">
          <h2>테스트 완료!</h2>
          <div className="result-type">
            <h3>당신의 유형은</h3>
            <p className="type-name">{resultType}</p>
          </div>
          
          <p>상세한 분석 결과가 이메일로 발송되었습니다.</p>
          <p>더 깊이 있는 분석을 원하신다면<br />시그니처 리포트를 구매해보세요.</p>
          
          <div className="result-actions">
            <button className="btn btn-primary">
              시그니처 리포트 구매하기 (₩49,000)
            </button>
            <button className="btn btn-secondary" onClick={() => window.location.href = '/'}>
              홈으로 가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;