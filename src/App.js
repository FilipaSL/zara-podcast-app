// libraries
import { Routes, Route, Navigate } from "react-router-dom";

//context
import { InfoProvider } from "./contexts/InfoContext";

//layout
import DefaultLayout from "./layouts";

//views
import { Main, Details, Episodes } from "./views";

function App() {
  return (
    <InfoProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Main />} />
          <Route path="podcast/:podcastId" element={<Details />} />
          <Route
            path="podcast/:podcastId/episodes/:episodeId"
            element={<Episodes />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </InfoProvider>
  );
}

export default App;
