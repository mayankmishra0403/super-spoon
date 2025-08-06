import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EduNova</h3>
            <p>Your complete learning solution with AI-powered tutoring, comprehensive academics, placement assistance, and competitive programming.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/ai">AI Tutor</a></li>
              <li><a href="/academics">Academics</a></li>
              <li><a href="/placements">Placements</a></li>
              <li><a href="/competitions">Competitions</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 EduNova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
