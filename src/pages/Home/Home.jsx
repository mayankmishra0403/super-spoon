import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Learning Journey with
              <span className="gradient-text"> EduNova</span>
            </h1>
            <p className="hero-description">
              Experience the future of education with AI-powered tutoring, comprehensive academics, 
              placement assistance, and competitive programming - all in one platform.
            </p>
            <div className="hero-buttons">
              <Link to="/ai" className="btn btn-primary">
                Start Learning with AI
              </Link>
              <Link to="/academics" className="btn btn-secondary">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Everything You Need to Succeed</h2>
            <p>Comprehensive tools and resources designed to accelerate your learning and career growth</p>
          </div>
          <div className="features-grid">
            <Link to="/ai" className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Tutoring</h3>
              <p>Get personalized learning assistance with our advanced AI tutor that adapts to your learning style.</p>
            </Link>
            <Link to="/academics" className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Academics</h3>
              <p>Access a vast library of courses, study materials, and resources across all subjects.</p>
            </Link>
            <Link to="/placements" className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Placement Assistance</h3>
              <p>Get job-ready with interview preparation, company insights, and placement opportunities.</p>
            </Link>
            <Link to="/competitions" className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Competitions & Contests</h3>
              <p>Participate in coding contests, hackathons, and academic competitions to showcase your skills.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="faq-preview">
        <div className="container">
          <div className="faq-preview-content">
            <h2>Have Questions?</h2>
            <p>Find answers to common questions about our platform, courses, and services.</p>
            <Link to="/faq" className="btn btn-primary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
