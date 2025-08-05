#!/bin/bash

# EduPlatform Deployment Script
# This script helps you deploy your education platform quickly

echo "🎓 EduPlatform Deployment Helper"
echo "================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Deployment Options:"
    echo "1. Vercel (Recommended)"
    echo "2. Netlify"
    echo "3. Manual deployment"
    echo ""
    
    read -p "Choose deployment option (1-3): " choice
    
    case $choice in
        1)
            echo "🚀 Deploying to Vercel..."
            if command -v vercel &> /dev/null; then
                vercel --prod
            else
                echo "📥 Installing Vercel CLI..."
                npm i -g vercel
                vercel --prod
            fi
            ;;
        2)
            echo "📁 Build completed! Upload the 'dist' folder to Netlify:"
            echo "   1. Go to https://netlify.com"
            echo "   2. Drag and drop the 'dist' folder"
            echo "   3. Configure your custom domain in site settings"
            ;;
        3)
            echo "📁 Build completed! Your files are in the 'dist' folder."
            echo "   Upload these files to your hosting provider."
            ;;
        *)
            echo "❌ Invalid option. Build completed, files are in 'dist' folder."
            ;;
    esac
    
    echo ""
    echo "🌐 Don't forget to configure your .tech domain!"
    echo "📖 Check DEPLOYMENT.md for detailed instructions."
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
