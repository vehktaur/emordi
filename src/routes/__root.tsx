import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '@/components/header'
import NotFound from '@/components/not-found'

export const Route = createRootRoute({
  component: App,
  notFoundComponent: NotFound,
})

function App() {
  return (
    <>
      <HeadContent />

      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
