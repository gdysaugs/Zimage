import { Navigate, Route, Routes } from 'react-router-dom'
import { Account } from './pages/Account'
import { Image } from './pages/Image'
import { Purchase } from './pages/Purchase'
import { TextImage } from './pages/TextImage'
import { Video } from './pages/Video'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<TextImage />} />
      <Route path='/image' element={<Image />} />
      <Route path='/video' element={<Video />} />
      <Route path='/purchase' element={<Purchase />} />
      <Route path='/anime' element={<Navigate to='/' replace />} />
      <Route path='/voice' element={<Navigate to='/' replace />} />
      <Route path='/account' element={<Account />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
