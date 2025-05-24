/**
 * Node moules
 */
import { createBrowserRouter, type RouteObject } from 'react-router';

/**
 * Pages
 */
import HomePage from '@/pages/HomePage';

/**
 * Layouts
 */
import RootLayout from '@/layouts/RootLayout';

/**
 * Error boundaries
 */
import RootErrorBoundary from '@/pages/RootErrorBoundary';

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouteChildren,
  },
]);

export default router;
