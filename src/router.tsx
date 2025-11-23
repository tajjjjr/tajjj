import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AllProjectsPage } from './components/AllProjectsPage';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import ContactSection from './components/ContactSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Hero />
            <ProjectsSection />
            <BlogSection />
            <ContactSection />
          </>
        ),
      },
      {
        path: '/projects',
        element: <AllProjectsPage />,
      },
    ],
  },
]);

export default router;
