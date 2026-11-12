import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { GuidePage } from './pages/GuidePage';
import { ClubsPage } from './pages/ClubsPage';
import { ClubPage } from './pages/ClubPage';
import { LivePage } from './pages/LivePage';
import { QuizPage } from './pages/QuizPage';
import { FindClubPage } from './pages/FindClubPage';
import { CreditsPage } from './pages/CreditsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="learn/:slug" element={<GuidePage />} />
          <Route path="clubs" element={<ClubsPage />} />
          <Route path="clubs/:id" element={<ClubPage />} />
          <Route path="live" element={<LivePage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="find-your-club" element={<FindClubPage />} />
          <Route path="credits" element={<CreditsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
