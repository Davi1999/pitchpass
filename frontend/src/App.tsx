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
import { EraPage } from './pages/EraPage';
import { EraProfilesPage } from './pages/EraProfilesPage';
import { EraProfilePage } from './pages/EraProfilePage';
import { EraStoriesPage } from './pages/EraStoriesPage';
import { EraStoryPage } from './pages/EraStoryPage';
import { EraSeasonsPage } from './pages/EraSeasonsPage';
import { EraSeasonPage } from './pages/EraSeasonPage';

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
          <Route path="era" element={<EraPage />} />
          <Route path="era/players" element={<EraProfilesPage kind="player" />} />
          <Route path="era/players/:slug" element={<EraProfilePage kind="player" />} />
          <Route path="era/managers" element={<EraProfilesPage kind="manager" />} />
          <Route path="era/managers/:slug" element={<EraProfilePage kind="manager" />} />
          <Route path="era/stories" element={<EraStoriesPage />} />
          <Route path="era/stories/:slug" element={<EraStoryPage />} />
          <Route path="era/seasons" element={<EraSeasonsPage />} />
          <Route path="era/seasons/:slug" element={<EraSeasonPage />} />
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
