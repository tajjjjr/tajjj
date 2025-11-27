import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AllProjectsPage } from './components/AllProjectsPage';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import ContactSection from './components/ContactSection';
import OurStory from './components/OurStory';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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
      {
        path: '/contact',
        element: <ContactSection />,
      },
    ],
  },
]);

export default router;
