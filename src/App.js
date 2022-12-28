import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootRoute from './routes/index'

const queryClient = new QueryClient()
const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RootRoute />
      </QueryClientProvider>
    </div>
  )
}

export default App
