# MediTrack Health Hub

A comprehensive healthcare management platform designed for patients and medical professionals to streamline healthcare delivery and management.

## Features

- **Patient Management**: Complete patient record management system
- **Doctor Dashboard**: Comprehensive dashboard for healthcare providers
- **Appointment Scheduling**: Efficient appointment booking and management
- **Medical Records**: Secure medical record storage and access
- **User Authentication**: Role-based authentication system
- **Payment Processing**: Integrated payment management
- **Messaging System**: Secure communication between patients and doctors
- **Admin Panel**: Administrative controls and user management

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Supabase (Database & Authentication)
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd meditrack-health-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Supabase configuration:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── widgets/        # Custom widgets
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations
├── lib/                # Utility functions
├── pages/              # Application pages/routes
└── ...
```

## Database Schema

The project uses Supabase with the following main tables:
- Users (patients, doctors, admins)
- Appointments
- Medical Records
- Payments
- Messages

Database migrations are located in the `supabase/migrations/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'To https://github.com/thisara011/Electronic-Health-Records-EHR-system.git''Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software developed for healthcare management purposes.

## Support

For support and questions, please contact the development team.
