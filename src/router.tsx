import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AllProjectsPage } from './components/AllProjectsPage';
import { AllPostsPage } from './components/AllPostsPage';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import ContactSection from './components/ContactSection';
import { SinglePostPage } from './components/SinglePostPage';

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
        path: '/blog',
        element: <AllPostsPage />,
      },
      // {
      //   path: '/blog/:postId',
      //   element: <SinglePostPage />,
      // }
    ],
  },
]);

export default router;
