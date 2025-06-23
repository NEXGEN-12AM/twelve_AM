# Twelve AM 🌙

A modern, full-featured ecommerce platform built for the midnight shopping experience. Twelve AM delivers a sleek, user-friendly online shopping destination with comprehensive product management, secure payments, and seamless user experience.

## ✨ Features

**Customer Experience**
- Responsive design optimized for all devices
- Advanced product search and filtering
- Product reviews and ratings system
- Wishlist and favorites functionality
- Shopping cart with persistent storage
- Guest checkout and user accounts
- Order tracking and history

**Admin Dashboard**
- Comprehensive product management
- Order processing and fulfillment
- Customer management system
- Sales analytics and reporting
- Inventory tracking
- Promotional campaigns management

**Security & Performance**
- Secure payment processing
- SSL encryption
- User authentication and authorization
- Performance optimization
- SEO-friendly URLs
- Fast loading times

## 🛠️ Tech Stack

**Frontend**
- React.js / Next.js
- Tailwind CSS / Styled Components
- Redux / Context API for state management
- Axios for API calls

**Backend**
- Node.js with Express.js
- MongoDB / PostgreSQL
- JWT authentication
- Stripe / PayPal payment integration
- Cloudinary for image management

**DevOps**
- Docker containerization
- AWS / Vercel deployment
- GitHub Actions CI/CD
- Environment-based configurations

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB or PostgreSQL
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/twelve-am.git
   cd twelve-am
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create environment files
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   # Database
   DATABASE_URL=your_database_connection_string
   
   # Authentication
   JWT_SECRET=your_jwt_secret_key
   
   # Payment Gateway
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   
   # Cloud Storage
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Database Setup**
   ```bash
   # Run database migrations
   npm run migrate
   
   # Seed sample data (optional)
   npm run seed
   ```

5. **Start Development Servers**
   ```bash
   # Start backend server (Port 5000)
   cd backend
   npm run dev
   
   # Start frontend server (Port 3000)
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Dashboard: http://localhost:3000/admin

## 📁 Project Structure

```
twelve-am/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   ├── config/
│   └── package.json
├── docs/
├── docker-compose.yml
└── README.md
```

## 🔧 Available Scripts

**Frontend**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

**Backend**
- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server
- `npm run test` - Run API tests
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed database with sample data

## 🌐 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Product Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Order Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/status` - Update order status (Admin)

For complete API documentation, visit `/api/docs` when running the development server.

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 🚢 Deployment

### Using Docker
```bash
# Build and run with Docker Compose
docker-compose up --build

# Production deployment
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment
1. Build the frontend: `npm run build`
2. Set production environment variables
3. Deploy to your preferred hosting platform (Vercel, Netlify, AWS, etc.)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Developer** - [@yourusername](https://github.com/yourusername)
- **Backend Developer** - [@yourusername](https://github.com/yourusername)
- **UI/UX Designer** - [@yourusername](https://github.com/yourusername)

## 📞 Support

- 📧 Email: support@twelveam.com
- 💬 Discord: [Join our community](https://discord.gg/twelveam)
- 📖 Documentation: [docs.twelveam.com](https://docs.twelveam.com)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/twelve-am/issues)

## 🙏 Acknowledgments

- Thanks to all contributors who helped build Twelve AM
- Inspired by modern ecommerce best practices
- Built with love for the midnight shopping community

---

⭐ Star this repository if you find it helpful!
