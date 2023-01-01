import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { YoutubeApiProvider } from './context/YoutubeApiContext'
import RootRoute from './routes/index'

const queryClient = new QueryClient()
const App = () => {
  return (
    <div className="App">
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <RootRoute />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  )
}

export default App
