import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ChatProvider } from './components/chat/ChatContext'
import { HomeView } from './views/HomeView'
import { CompareView } from './views/CompareView'

function App() {
  return (
    <ChatProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="compare" element={<CompareView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ChatProvider>
  )
}

export default App
