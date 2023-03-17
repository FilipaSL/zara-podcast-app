// libraries
import { Routes, Route, Navigate } from "react-router-dom";

//context
import { LoadingProvider } from "./contexts/LoadingContext";

//layout
import DefaultLayout from "./layouts";

//views
import { Main, Details, Episodes } from "./views";

function App() {
  return (
    <LoadingProvider>
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
    </LoadingProvider>
  );
}

export default App;
