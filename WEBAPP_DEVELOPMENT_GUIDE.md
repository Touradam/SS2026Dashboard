# Web Application Development Guide for LLMs

## Executive Summary
This guide establishes professional standards for developing modern web applications. Follow these principles to deliver production-ready, maintainable, and scalable solutions.

---

## 1. Project Initialization & Structure

### 1.1 Technology Stack Selection
**Frontend Frameworks** (choose based on requirements):
- React: Component-based, large ecosystem, ideal for SPAs
- Next.js: React with SSR/SSG, excellent for SEO and performance
- Vue 3: Progressive framework, gentle learning curve
- Svelte/SvelteKit: Compiled framework, minimal runtime overhead

**Backend Options**:
- Node.js + Express: Flexible, JavaScript everywhere
- Next.js API routes: Integrated with frontend
- FastAPI (Python): Type-safe, auto-documentation
- Django: Batteries-included, ORM, admin panel

**Database Selection**:
- PostgreSQL: Relational, ACID compliance, JSON support
- MongoDB: Document store, flexible schema
- Redis: Caching, sessions, real-time features
- Supabase/Firebase: Managed backend-as-a-service

### 1.2 Standard Project Structure
```
project-root/
├── .cursor/              # Cursor IDE rules and configs
│   └── rules/            # Project-specific AI guidance
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base components (Button, Input, etc.)
│   │   └── features/    # Feature-specific components
│   ├── lib/             # Utility functions and helpers
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API clients and data fetching
│   ├── types/           # TypeScript type definitions
│   ├── styles/          # Global styles and theme
│   └── app/             # Pages/routes (Next.js App Router)
├── public/              # Static assets
├── tests/               # Test files
├── docs/                # Project documentation
├── .env.example         # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project overview
```

---

## 2. Development Principles

### 2.1 Code Quality Standards

**Type Safety**:
- Use TypeScript for all JavaScript projects
- Define explicit types, avoid `any`
- Leverage type inference where appropriate
- Create shared types in `types/` directory

**Component Design**:
- Single Responsibility: Each component does one thing well
- Composition over inheritance
- Props interface at component top
- Clear prop naming and documentation
- Keep components under 200 lines (extract if larger)

**Naming Conventions**:
- Components: PascalCase (`UserProfile.tsx`)
- Functions/variables: camelCase (`getUserData`)
- Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
- Files: kebab-case for utilities (`api-client.ts`)
- CSS classes: BEM or kebab-case

### 2.2 State Management

**Local State**:
- useState for simple component state
- useReducer for complex state logic
- Keep state as close to usage as possible

**Global State**:
- Context API for theme, auth, simple shared state
- Zustand/Jotai for complex application state
- React Query/SWR for server state
- Avoid Redux unless dealing with very complex state

**Server State Best Practices**:
```typescript
// Use React Query for data fetching
import { useQuery } from '@tanstack/react-query';

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return <div>{data.map(user => <UserCard key={user.id} user={user} />)}</div>;
}
```

---

## 3. UI/UX Development

### 3.1 Design System Approach

**Component Libraries** (choose one):
- shadcn/ui: Customizable, copy-paste components
- Radix UI: Unstyled, accessible primitives
- Material-UI: Complete design system
- Chakra UI: Simple, modular, accessible

**Styling Strategy**:
- Tailwind CSS: Utility-first, rapid development
- CSS Modules: Scoped styles, type-safe with TypeScript
- styled-components: CSS-in-JS, dynamic styling
- Maintain consistent spacing scale (4px, 8px, 16px, 24px, 32px)

### 3.2 Responsive Design
- Mobile-first approach
- Breakpoints: `sm: 640px, md: 768px, lg: 1024px, xl: 1280px`
- Test on mobile, tablet, desktop viewports
- Use CSS Grid and Flexbox appropriately
- Ensure touch targets are at least 44x44px

### 3.3 Accessibility (WCAG 2.1 AA)
- Semantic HTML: use correct elements (`<button>`, `<nav>`, `<article>`)
- ARIA labels where necessary
- Keyboard navigation support (Tab, Enter, Escape)
- Color contrast ratio minimum 4.5:1
- Focus indicators visible
- Alt text for images
- Form labels and error messages

---

## 4. Performance Optimization

### 4.1 Frontend Performance

**Code Splitting**:
- Lazy load routes: `const Page = lazy(() => import('./Page'))`
- Dynamic imports for heavy components
- Separate vendor bundles

**Asset Optimization**:
- Image optimization: WebP format, responsive images, lazy loading
- Use Next.js `<Image>` component or similar
- Compress SVGs, inline small icons
- Font optimization: subset fonts, preload critical fonts

**React Performance**:
- Memoization: `useMemo`, `useCallback`, `React.memo`
- Avoid anonymous functions in JSX props
- Virtual scrolling for long lists (react-virtual)
- Debounce/throttle expensive operations

**Metrics to Monitor**:
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Cumulative Layout Shift (CLS) < 0.1
- First Input Delay (FID) < 100ms

### 4.2 Backend Performance

**Caching Strategy**:
- HTTP caching headers (Cache-Control, ETag)
- Redis for session and data caching
- CDN for static assets
- Database query results caching

**Database Optimization**:
- Index frequently queried fields
- Use connection pooling
- Implement pagination for large datasets
- Avoid N+1 queries (use joins or data loaders)

---

## 5. Security Best Practices

### 5.1 Authentication & Authorization
- Use established libraries (NextAuth.js, Passport, Auth0)
- JWT tokens: short expiration, secure storage
- HttpOnly cookies for sensitive tokens
- Implement RBAC (Role-Based Access Control)
- Rate limiting on auth endpoints

### 5.2 Data Protection
- Input validation on client AND server
- Sanitize user input to prevent XSS
- Use parameterized queries to prevent SQL injection
- CORS configuration: whitelist specific origins
- CSRF protection for state-changing operations
- HTTPS only in production
- Environment variables for secrets (never commit)

### 5.3 API Security
```typescript
// Example: Input validation with Zod
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2).max(50),
});

export async function createUser(data: unknown) {
  const validated = userSchema.parse(data); // Throws if invalid
  // Proceed with validated data
}
```

---

## 6. Testing Strategy

### 6.1 Testing Pyramid
- **Unit Tests (70%)**: Individual functions and utilities
- **Integration Tests (20%)**: Component interactions, API routes
- **E2E Tests (10%)**: Critical user flows

### 6.2 Testing Tools
- **Unit/Integration**: Vitest or Jest
- **React Testing**: React Testing Library
- **E2E**: Playwright or Cypress
- **API Testing**: Supertest or REST Client

### 6.3 What to Test
- User interactions (clicks, form submissions)
- Data transformations and business logic
- Error states and edge cases
- API endpoints (success and error responses)
- Authentication flows
- Critical user journeys (signup, checkout, etc.)

**Example Test**:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('submits form with valid credentials', async () => {
    const onSubmit = vi.fn();
    render(<LoginForm onSubmit={onSubmit} />);
    
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'user@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123'
    });
  });
});
```

---

## 7. Git Workflow & Version Control

### 7.1 Commit Standards
- Small, atomic commits focused on single changes
- Clear commit messages: `feat: add user authentication`
- Conventional Commits format:
  - `feat:` new feature
  - `fix:` bug fix
  - `refactor:` code restructuring
  - `docs:` documentation changes
  - `test:` adding tests
  - `chore:` maintenance tasks

### 7.2 Branching Strategy
- `main`: production-ready code
- `develop`: integration branch
- Feature branches: `feature/user-auth`
- Bug fixes: `fix/login-error`
- Merge via Pull Requests with code review

### 7.3 What NOT to Commit
- `.env` files (use `.env.example` as template)
- `node_modules/`
- Build artifacts (`dist/`, `.next/`)
- IDE-specific files (except `.cursor/` if project-specific)
- Sensitive credentials, API keys, tokens
- Large binary files (use Git LFS if needed)

---

## 8. API Design

### 8.1 RESTful Principles
- Resource-based URLs: `/api/users`, `/api/posts/:id`
- HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove)
- Status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error)
- Consistent response format:
```typescript
// Success
{
  success: true,
  data: { /* payload */ }
}

// Error
{
  success: false,
  error: {
    message: "User not found",
    code: "USER_NOT_FOUND"
  }
}
```

### 8.2 API Documentation
- Use OpenAPI/Swagger for REST APIs
- GraphQL: introspection and GraphQL Playground
- Document request/response schemas
- Provide example requests
- Version APIs: `/api/v1/users`

---

## 9. Error Handling

### 9.1 Frontend Error Handling
- Error boundaries for React component errors
- Toast notifications for user-facing errors
- Sentry or similar for error tracking
- Graceful degradation, not blank screens
- Retry logic for failed network requests

```typescript
// Error Boundary Example
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToService(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### 9.2 Backend Error Handling
- Centralized error handling middleware
- Log errors with context (user ID, request ID)
- Don't expose stack traces in production
- Return appropriate status codes
- Handle async errors with try-catch or error middleware

---

## 10. Documentation Standards

### 10.1 Code Documentation
- JSDoc comments for public functions
- Complex logic explanation in comments
- README.md with setup instructions
- API documentation (Swagger/OpenAPI)
- Architecture decision records (ADRs) for major decisions

### 10.2 README Template
```markdown
# Project Name

Brief description of the project.

## Features
- Feature 1
- Feature 2

## Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js, PostgreSQL
- Deployment: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Installation
1. Clone the repository
2. `npm install`
3. Copy `.env.example` to `.env` and configure
4. `npm run dev`

## Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run test` - Run tests

## License
MIT
```

---

## 11. Deployment & DevOps

### 11.1 Environment Management
- Development, Staging, Production environments
- Environment-specific configuration
- Use `.env` files (never commit secrets)
- CI/CD pipeline for automated deployments

### 11.2 Deployment Platforms
- **Frontend**: Vercel, Netlify, Cloudflare Pages
- **Backend**: Railway, Render, AWS, DigitalOcean
- **Databases**: Supabase, PlanetScale, Neon
- **Containerization**: Docker for consistent environments

### 11.3 Monitoring & Observability
- Application logs (structured JSON logs)
- Error tracking: Sentry, Rollbar
- Performance monitoring: Vercel Analytics, Datadog
- Uptime monitoring: UptimeRobot, Better Uptime
- Set up alerts for critical failures

---

## 12. Development Workflow for LLMs

### 12.1 Starting a New Project
1. **Understand Requirements**: Ask clarifying questions if unclear
2. **Choose Tech Stack**: Based on requirements, not trends
3. **Initialize Project**: Use official CLIs (`create-next-app`, `create-react-app`, etc.)
4. **Setup Git**: Initialize repository, create `.gitignore`
5. **Configure TypeScript**: Strict mode enabled
6. **Install Dependencies**: Core libraries only, add as needed
7. **Setup Project Structure**: Follow standard structure
8. **Create README**: Document setup and usage

### 12.2 Implementing Features
1. **Read Existing Code**: Understand patterns and conventions
2. **Plan Implementation**: Break into small steps
3. **Create Types First**: Define data structures
4. **Build Component Hierarchy**: Start with parent components
5. **Implement UI**: Follow design system
6. **Add Business Logic**: Keep separate from presentation
7. **Handle Edge Cases**: Loading, error, empty states
8. **Test Implementation**: Write tests for critical paths
9. **Commit Frequently**: Small, meaningful commits

### 12.3 Code Review Checklist (Self-Review)
- [ ] TypeScript types defined, no `any`
- [ ] Components properly structured and named
- [ ] Error handling implemented
- [ ] Loading states handled
- [ ] Responsive design works on mobile
- [ ] Accessibility requirements met
- [ ] No console.logs in production code
- [ ] Environment variables used for configuration
- [ ] Tests written for new functionality
- [ ] Documentation updated
- [ ] No security vulnerabilities introduced

### 12.4 Refactoring Existing Code
- Understand before changing
- Make one change at a time
- Ensure tests pass after each change
- Don't mix refactoring with feature additions
- Document why, not just what

---

## 13. Common Patterns & Anti-Patterns

### 13.1 Good Patterns ✓

**Custom Hooks for Reusable Logic**:
```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue] as const;
}
```

**Separation of Concerns**:
```typescript
// services/user-service.ts - API logic
export async function fetchUser(id: string) {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// components/UserProfile.tsx - UI logic
export function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading } = useQuery(['user', userId], () => fetchUser(userId));
  if (isLoading) return <Spinner />;
  return <div>{data.name}</div>;
}
```

### 13.2 Anti-Patterns to Avoid ✗

**Prop Drilling** (passing props through many levels):
- Solution: Use Context API or state management library

**Massive Components** (1000+ lines):
- Solution: Extract smaller, focused components

**Tight Coupling**:
- Solution: Dependency injection, interfaces

**Premature Optimization**:
- Solution: Measure first, optimize bottlenecks

**Magic Numbers/Strings**:
- Solution: Define named constants

---

## 14. Progressive Enhancement Strategy

### 14.1 Build Phases
**Phase 1: MVP (Minimum Viable Product)**
- Core functionality only
- Basic UI (can be unstyled)
- Essential features working
- Deploy early, iterate fast

**Phase 2: Polish**
- Improved UI/UX
- Loading states and animations
- Error handling refinement
- Responsive design
- Basic testing

**Phase 3: Scale**
- Performance optimization
- Comprehensive testing
- Monitoring and analytics
- Security hardening
- Documentation

### 14.2 Feature Development Priority
1. **Must Have**: Core functionality, blocks user goals
2. **Should Have**: Important but not critical
3. **Nice to Have**: Enhances experience
4. **Won't Have**: Out of scope for current version

---

## 15. Communication & Collaboration

### 15.1 Working with Users
- Ask clarifying questions when requirements are ambiguous
- Explain technical decisions in simple terms
- Provide options when multiple valid approaches exist
- Be honest about limitations and trade-offs
- Show progress incrementally

### 15.2 Code Comments
- Explain WHY, not WHAT (code shows what)
- Document non-obvious decisions
- Note performance considerations
- Link to relevant issues or documentation
- Keep comments up-to-date with code

```typescript
// BAD: States the obvious
// Get the user name
const name = user.name;

// GOOD: Explains reasoning
// Use display name for public profiles, username for internal tools
const displayText = isPublicProfile ? user.displayName : user.username;
```

---

## 16. Quick Reference

### 16.1 Essential Dependencies

**React/Next.js Project**:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "@tanstack/react-query": "^5.0.0",
    "zod": "^3.22.0",
    "zustand": "^4.4.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### 16.2 File Templates

**React Component**:
```typescript
import { FC } from 'react';

interface ComponentNameProps {
  // Define props
}

export const ComponentName: FC<ComponentNameProps> = ({ /* props */ }) => {
  // State and hooks
  
  // Event handlers
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

**API Route (Next.js)**:
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Implementation
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## 17. Final Principles

1. **Clarity over Cleverness**: Write code that others (and future you) can understand
2. **Test the Happy Path First**: Get core functionality working before edge cases
3. **Security by Default**: Never trust user input, always validate
4. **Performance Matters**: But not at the cost of maintainability
5. **Document Decisions**: Future developers (including AI) will thank you
6. **Iterate and Improve**: Perfect is the enemy of good
7. **Stay Current**: Web technologies evolve, keep learning
8. **User Experience First**: Technical perfection means nothing if users can't use it

---

## Appendix: When in Doubt

- **TypeScript over JavaScript**: Always
- **Functional over Class Components**: Unless you have a specific reason
- **Server Components over Client Components**: In Next.js App Router
- **Controlled over Uncontrolled Components**: For forms
- **Declarative over Imperative**: Where possible
- **Composition over Props**: For complex component APIs
- **Multiple Small Files over Large Files**: For maintainability

---

This guide is a living document. As web development best practices evolve, update this guide to reflect current standards and patterns.
