import { useState, FormEvent, useEffect, useRef } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const successMessageRef = useRef<HTMLDivElement>(null);
  const messageTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Auto-resize textarea
    if (name === 'message' && messageTextareaRef.current) {
      messageTextareaRef.current.style.height = 'auto';
      messageTextareaRef.current.style.height = Math.max(140, messageTextareaRef.current.scrollHeight) + 'px';
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Scroll to success message
    if (successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: ''
      });
      setShowSuccess(false);
    }, 5000);
    
    console.log('Form submitted:', formData);
  };

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form validation enhancement
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const element = e.target;
    if (element.required && !element.value) {
      element.style.borderColor = 'rgba(255, 100, 100, 0.5)';
    } else if (element.value) {
      element.style.borderColor = 'rgba(100, 255, 100, 0.3)';
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
  };

  return (
    <>
      {/* Page Title Section */}
      <section className="page-title-section">
        <div className="container">
          <h1 className="page-title fade-in-up">문의하기</h1>
          <p className="page-subtitle fade-in-up">당신의 조직과 개인의 성장을 위한 첫걸음을 함께 시작하겠습니다</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content fade-in-up">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className={`success-message ${showSuccess ? 'show' : ''}`} ref={successMessageRef}>
                <p>문의사항이 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.</p>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름을 입력해주세요"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">회사명</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="회사명을 입력해주세요 (선택사항)"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="이메일을 입력해주세요"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="연락처를 입력해주세요 (선택사항)"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="inquiry-type">문의 유형 *</label>
                <select
                  id="inquiry-type"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  required
                >
                  <option value="">문의 유형을 선택해주세요</option>
                  <option value="개인">개인 심리컨설팅</option>
                  <option value="조직">조직 심리 파트너</option>
                  <option value="협업">협업 문의</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">제목 *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="문의 제목을 입력해주세요"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">문의 내용 *</label>
                <textarea
                  ref={messageTextareaRef}
                  id="message"
                  name="message"
                  placeholder="문의하고 싶은 내용을 자세히 작성해주세요. 현재 상황, 목표, 궁금한 점 등을 포함해주시면 더 정확한 답변을 드릴 수 있습니다."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  required
                />
              </div>
              
              <button type="submit" className="btn-submit">문의사항 전송하기</button>
              
              <div className="contact-info">
                <p>긴급한 문의는 <span className="highlight">이메일</span> 또는 <span className="highlight">전화</span>로 직접 연락해주세요</p>
                <p>평균 <span className="highlight">24시간 이내</span> 답변드리고 있습니다</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;