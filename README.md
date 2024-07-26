# LearnWorld

LearnWorld is a global educational platform that allows students to learn any course available from class to university level. Teachers can register for specific courses, choose their preferred mode of teaching (online/offline/home), and optionally enable batch systems. Our goal is to open up education to anyone in the world, allowing students to learn from any teacher they want.

## Features

- **Global Course Listings**: Comprehensive database of academic courses from around the world.
- **Teacher Registration**: Teachers can create profiles and list the courses they want to teach.
- **Student Enrollment**: Students can browse and enroll in available courses.
- **Teaching Modes**: Teachers can choose to teach online, offline, or at home.
- **Batch System**: Teachers can enable batch systems or allow continuous enrollment.
- **Secure Authentication**: Using Laravel Sanctum for secure, stateless token-based authentication.
- **Cross-Platform Support**: Web platform built with Laravel and Next.js, and mobile app built with React Native and Expo.

## Technology Stack

### Frontend
- **Web**: Next.js
- **Mobile**: React Native with Expo

### Backend
- **Server**: Laravel with Sanctum for authentication
- **Database**: MySQL
- **API**: RESTful API

## Development Setup

### Prerequisites

- Node.js and npm
- PHP and Composer
- Laravel CLI
- Expo CLI

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/learnworld.git
   cd learnworld
   ```

2. **Backend Setup (Laravel)**:
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   ```

3. **Frontend Setup (Next.js)**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Mobile App Setup (React Native)**:
   ```bash
   cd mobile
   npm install
   expo start
   ```

### Environment Variables

Set up your `.env` file in the `backend` directory with the following variables:

```
APP_NAME=LearnWorld
APP_ENV=local
APP_KEY=base64:xxxxxxxxxxxxxxxxxxxxxxxxxxxx
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=learnworld
DB_USERNAME=root
DB_PASSWORD=
```

### Usage

1. **Start the Laravel server**:
   ```bash
   php artisan serve
   ```

2. **Start the Next.js development server**:
   ```bash
   npm run dev
   ```

3. **Start the Expo development server**:
   ```bash
   expo start
   ```

## Development Phases

### Phase 1: Project Setup
- Initialize repositories and set up the development environment.
- Set up Laravel backend with Sanctum for stateless token-based authentication.
- Set up Next.js frontend and integrate with the backend.
- Set up React Native mobile app and integrate with the backend.

### Phase 2: Core Features
- Implement user registration and authentication.
- Create models and database schema for courses, teachers, and students.
- Implement course listing and enrollment functionalities.
- Implement teaching modes and batch system options.

### Phase 3: Advanced Features
- Add search and filtering capabilities for courses.
- Implement communication tools (chat/discussion forums).
- Enhance user profiles with additional details and preferences.
- Implement notification system for important updates and reminders.

### Phase 4: Testing and Deployment
- Write unit and integration tests for all features.
- Perform user acceptance testing (UAT).
- Deploy the web application and mobile app to production environments.

## Contributing

We welcome contributions from the community! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to us at [hello@barakahsoft.com](mailto:hello@barakahsoft.com).

---

*Happy Learning with LearnWorld!*