# 🎓 EduNova - Complete Learning Solution

A comprehensive education platform built with React that combines AI-powered tutoring, academic resources, placement assistance, and competitive programming opportunities all in one place.

![EduNova](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 🤖 AI-Powered Tutoring
- **24/7 AI Tutor**: Get instant help with personalized explanations
- **Adaptive Learning**: AI adapts to your learning style and pace
- **Interactive Chat**: Real-time conversation with AI assistant
- **Progress Tracking**: Monitor your learning journey with detailed analytics

### 📚 Comprehensive Academics
- **500+ Courses**: Wide range of subjects from beginner to advanced
- **Expert Instructors**: Learn from industry professionals
- **Interactive Content**: Videos, quizzes, and hands-on projects
- **Certificates**: Earn recognized certificates upon completion
- **Offline Access**: Download materials for offline study

### 💼 Placement Assistance
- **Job Matching**: AI-powered job recommendations based on your skills
- **500+ Partner Companies**: Direct connections with top employers
- **Interview Preparation**: Mock interviews and expert guidance
- **Resume Builder**: Professional resume creation tools
- **95% Placement Rate**: Proven track record of student success

### 🏆 Competitions & Contests
- **Coding Contests**: Regular programming challenges
- **Hackathons**: 48-hour innovation competitions
- **Academic Quizzes**: Subject-specific knowledge tests
- **AI Challenges**: Machine learning and data science competitions
- **Prizes & Recognition**: Cash prizes, scholarships, and job opportunities

### ❓ Dynamic FAQ System
- **Real-time Search**: Find answers instantly with live search
- **Category Filtering**: Filter by topic (AI, Academics, Placements, etc.)
- **Interactive Controls**: Expand/collapse all, popular questions
- **Smooth Animations**: Modern UI with engaging transitions
- **Mobile Responsive**: Perfect experience on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mayankmishra0403/super-spoon.git
   cd super-spoon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
npm run build
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add Custom Domain**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Domains
   - Add your .tech domain

### Deploy to Netlify
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag the `dist` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository for auto-deployment

3. **Add Custom Domain**
   - Go to Site Settings → Domain Management
   - Add your .tech domain

### Custom Domain Setup
1. **DNS Configuration**
   - Point your .tech domain to your hosting provider
   - For Vercel: Add CNAME record pointing to `cname.vercel-dns.com`
   - For Netlify: Add CNAME record pointing to your Netlify subdomain

2. **HTTPS**
   - Both Vercel and Netlify provide automatic HTTPS
   - SSL certificates are generated automatically

## 📁 Project Structure

```
education-platform/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── Layout.jsx
│   ├── pages/
│   │   ├── Home/
│   │   ├── AI/
│   │   ├── Academics/
│   │   ├── Placements/
│   │   ├── Competitions/
│   │   └── FAQ/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations)
- **Icons**: Emoji-based icons for universal compatibility
- **Responsive Design**: Mobile-first approach

## 🎨 Key Features Implementation

### Dynamic Search & Filtering
- Real-time search through FAQ content
- Category-based filtering system
- Highlighted search results
- Smooth loading states

### Interactive Animations
- Fade-in effects for content loading
- Smooth accordion animations
- Hover effects and transitions
- Staggered animation timing

### Modern UI/UX
- Glass morphism design elements
- Gradient backgrounds
- Card-based layouts
- Responsive grid systems

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1200px+)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mayank Mishra**
- GitHub: [@mayankmishra0403](https://github.com/mayankmishra0403)
- Email: mayankmishra7296@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the lightning-fast build tool
- All contributors and supporters of this project

## 📊 Project Stats

- **Total Components**: 15+
- **Pages**: 6 main sections
- **FAQ Items**: 20+ comprehensive questions
- **Responsive Breakpoints**: 4
- **Animation Effects**: 10+

---

⭐ **Star this repository if you found it helpful!**

🐛 **Found a bug?** [Open an issue](https://github.com/mayankmishra0403/super-spoon/issues)

💡 **Have a suggestion?** [Start a discussion](https://github.com/mayankmishra0403/super-spoon/discussions)
