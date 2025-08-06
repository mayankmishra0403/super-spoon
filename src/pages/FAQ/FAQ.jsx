import { useState, useEffect } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredFAQs, setFilteredFAQs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const expandAll = () => {
    const allIds = {}
    filteredFAQs.forEach(category => {
      category.questions.forEach(q => {
        allIds[q.id] = true
      })
    })
    setOpenItems(allIds)
  }

  const collapseAll = () => {
    setOpenItems({})
  }

  const popularQuestions = [
    "general-1", "ai-1", "academics-1", "placements-1", "competitions-1"
  ]

  const openPopularQuestions = () => {
    const popularItems = {}
    popularQuestions.forEach(id => {
      popularItems[id] = true
    })
    setOpenItems(popularItems)
    setSelectedCategory('all')
    setSearchTerm('')
  }

  // Filter and search functionality
  useEffect(() => {
    setIsLoading(true)

    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      let filtered = faqData.filter(category => {
        if (selectedCategory !== 'all' && category.category.toLowerCase() !== selectedCategory) {
          return false
        }

        if (searchTerm) {
          const hasMatchingQuestion = category.questions.some(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
          )
          if (hasMatchingQuestion) {
            return {
              ...category,
              questions: category.questions.filter(q =>
                q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchTerm.toLowerCase())
              )
            }
          }
          return false
        }

        return true
      })

      if (searchTerm) {
        filtered = filtered.map(category => ({
          ...category,
          questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
          )
        })).filter(category => category.questions.length > 0)
      }

      setFilteredFAQs(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, selectedCategory])

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const faqData = [
    {
      category: "General",
      icon: "🌟",
      questions: [
        {
          id: "general-1",
          question: "What is EduNova?",
          answer: "EduNova is a comprehensive learning solution that combines AI-powered tutoring, academic resources, placement assistance, and competitive programming opportunities all in one platform. We help students achieve their educational and career goals through personalized learning experiences."
        },
        {
          id: "general-2",
          question: "How do I get started?",
          answer: "Getting started is easy! Simply create an account, complete your profile, and explore our different sections. You can start with our AI tutor for personalized guidance, browse academic courses, or check out current job opportunities and competitions."
        },
        {
          id: "general-3",
          question: "Is EduNova free to use?",
          answer: "We offer both free and premium features. Basic access to courses, AI tutoring, and job listings is free. Premium features include advanced AI tutoring, exclusive courses, priority placement assistance, and premium competition access."
        },
        {
          id: "general-4",
          question: "What devices can I use to access EduNova?",
          answer: "EduNova is fully responsive and works on all devices including desktop computers, laptops, tablets, and smartphones. You can access your learning materials anywhere, anytime."
        }
      ]
    },
    {
      category: "AI Tutoring",
      icon: "🤖",
      questions: [
        {
          id: "ai-1",
          question: "How does the AI tutor work?",
          answer: "Our AI tutor uses advanced machine learning algorithms to understand your learning style, pace, and preferences. It provides personalized explanations, adapts to your progress, and offers targeted practice problems to help you master concepts effectively."
        },
        {
          id: "ai-2",
          question: "What subjects does the AI tutor cover?",
          answer: "The AI tutor covers a wide range of subjects including Mathematics, Science (Physics, Chemistry, Biology), Computer Science, Programming, Languages, and more. It's continuously learning and expanding its knowledge base."
        },
        {
          id: "ai-3",
          question: "Can the AI tutor help with homework?",
          answer: "Yes! The AI tutor can help explain concepts, guide you through problem-solving steps, and provide practice problems. However, it's designed to help you learn and understand rather than simply provide answers."
        },
        {
          id: "ai-4",
          question: "Is the AI tutor available 24/7?",
          answer: "Absolutely! Our AI tutor is available 24/7, so you can get help whenever you need it, whether it's late at night before an exam or early morning before class."
        }
      ]
    },
    {
      category: "Academics",
      icon: "📚",
      questions: [
        {
          id: "academics-1",
          question: "What types of courses are available?",
          answer: "We offer a comprehensive range of courses including STEM subjects, humanities, business, programming, languages, and professional development. Courses range from beginner to advanced levels with certificates upon completion."
        },
        {
          id: "academics-2",
          question: "Are the courses accredited?",
          answer: "Many of our courses are created in partnership with accredited institutions and industry experts. We provide certificates of completion that are recognized by employers and educational institutions."
        },
        {
          id: "academics-3",
          question: "Can I download course materials?",
          answer: "Yes, most course materials including videos, PDFs, and assignments can be downloaded for offline study. This allows you to learn even when you don't have internet access."
        },
        {
          id: "academics-4",
          question: "How do I track my progress?",
          answer: "Our platform provides detailed progress tracking including completion percentages, quiz scores, time spent studying, and achievement badges. You can view your progress dashboard anytime."
        }
      ]
    },
    {
      category: "Placements",
      icon: "💼",
      questions: [
        {
          id: "placements-1",
          question: "How does placement assistance work?",
          answer: "Our placement assistance includes job matching based on your skills, resume building tools, interview preparation, mock interviews with industry experts, and direct connections with hiring companies."
        },
        {
          id: "placements-2",
          question: "What companies partner with EduPlatform?",
          answer: "We partner with over 500 companies ranging from startups to Fortune 500 companies across various industries including technology, finance, healthcare, and more. Our partners actively recruit from our platform."
        },
        {
          id: "placements-3",
          question: "Do you help with internships too?",
          answer: "Yes! We offer both internship and full-time job opportunities. Our platform includes dedicated sections for internships, entry-level positions, and experienced professional roles."
        },
        {
          id: "placements-4",
          question: "What is your placement success rate?",
          answer: "We maintain a 95% placement rate for active users who complete our recommended preparation programs. Our comprehensive approach to skill development and interview preparation contributes to this high success rate."
        }
      ]
    },
    {
      category: "Competitions",
      icon: "🏆",
      questions: [
        {
          id: "competitions-1",
          question: "What types of competitions do you offer?",
          answer: "We host various competitions including coding contests, hackathons, academic quizzes, AI/ML challenges, design competitions, and subject-specific olympiads. There's something for every interest and skill level."
        },
        {
          id: "competitions-2",
          question: "Are there prizes for competitions?",
          answer: "Yes! We offer cash prizes, scholarships, internship opportunities, job offers, certificates, and other exciting rewards. Prize pools can range from hundreds to thousands of dollars depending on the competition."
        },
        {
          id: "competitions-3",
          question: "Can beginners participate in competitions?",
          answer: "Absolutely! We have competitions designed for all skill levels, from beginner-friendly contests to advanced challenges. We also provide preparation materials and practice problems to help you get ready."
        },
        {
          id: "competitions-4",
          question: "How do I register for competitions?",
          answer: "Simply browse our competitions page, find an event that interests you, and click 'Register'. Some competitions may have prerequisites or require team formation, which will be clearly mentioned in the competition details."
        }
      ]
    }
  ]

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about EduNova.
              Can't find what you're looking for? Contact our support team.
            </p>

            {/* Search and Filter */}
            <div className="faq-controls">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>

              <div className="filter-container">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="category-filter"
                >
                  <option value="all">All Categories</option>
                  <option value="general">General</option>
                  <option value="ai tutoring">AI Tutoring</option>
                  <option value="academics">Academics</option>
                  <option value="placements">Placements</option>
                  <option value="competitions">Competitions</option>
                </select>
              </div>

              <div className="expand-controls">
                <button onClick={openPopularQuestions} className="control-btn popular-btn">
                  ⭐ Popular
                </button>
                <button onClick={expandAll} className="control-btn">
                  Expand All
                </button>
                <button onClick={collapseAll} className="control-btn">
                  Collapse All
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading FAQs...</p>
            </div>
          ) : filteredFAQs.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No FAQs found</h3>
              <p>Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="reset-btn"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="faq-results">
              <div className="results-info">
                <p>
                  Showing {filteredFAQs.reduce((total, cat) => total + cat.questions.length, 0)}
                  {searchTerm && ` results for "${searchTerm}"`}
                </p>
              </div>

              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="faq-category" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                  <h2 className="category-title">
                    <span className="category-icon">{category.icon}</span>
                    {category.category}
                    <span className="question-count">({category.questions.length})</span>
                  </h2>
                  <div className="faq-items">
                    {category.questions.map((item, itemIndex) => (
                      <div
                        key={item.id}
                        className={`faq-item ${popularQuestions.includes(item.id) ? 'popular' : ''}`}
                        style={{animationDelay: `${(categoryIndex * 0.1) + (itemIndex * 0.05)}s`}}
                      >
                        <button
                          className={`faq-question ${openItems[item.id] ? 'active' : ''}`}
                          onClick={() => toggleItem(item.id)}
                        >
                          <span className="question-text">
                            {searchTerm ? (
                              <span dangerouslySetInnerHTML={{
                                __html: item.question.replace(
                                  new RegExp(`(${searchTerm})`, 'gi'),
                                  '<mark>$1</mark>'
                                )
                              }} />
                            ) : (
                              item.question
                            )}
                          </span>
                          <span className={`faq-icon ${openItems[item.id] ? 'rotate' : ''}`}>
                            {openItems[item.id] ? '−' : '+'}
                          </span>
                        </button>
                        <div className={`faq-answer ${openItems[item.id] ? 'open' : ''}`}>
                          <p>
                            {searchTerm ? (
                              <span dangerouslySetInnerHTML={{
                                __html: item.answer.replace(
                                  new RegExp(`(${searchTerm})`, 'gi'),
                                  '<mark>$1</mark>'
                                )
                              }} />
                            ) : (
                              item.answer
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="faq-contact">
        <div className="container">
          <div className="contact-content">
            <h2>Still have questions?</h2>
            <p>Our support team is here to help you succeed on your learning journey.</p>
            <div className="contact-options">
              <div className="contact-option">
                <div className="contact-icon">📧</div>
                <h3>Email Support</h3>
                <p>Get detailed answers via email</p>
                <a href="mailto:support@eduplatform.com" className="contact-btn">
                  support@eduplatform.com
                </a>
              </div>
              <div className="contact-option">
                <div className="contact-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Chat with our support team</p>
                <button className="contact-btn">Start Chat</button>
              </div>
              <div className="contact-option">
                <div className="contact-icon">📞</div>
                <h3>Phone Support</h3>
                <p>Speak directly with our team</p>
                <a href="tel:+1-555-123-4567" className="contact-btn">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default FAQ
