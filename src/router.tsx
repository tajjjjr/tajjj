import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AllProjectsPage } from './components/AllProjectsPage';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import ContactSection from './components/ContactSection';
import OurStory from './components/OurStory';

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
      {
        path: '/our-story',
        element: <OurStory />,
      },
    ],
  },
]);

export default router;
