// libraries
import { Routes, Route } from "react-router-dom";

//context
import { InfoProvider } from "./helpers/InfoContext";

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
      </Routes>
    </InfoProvider>
  );
}

export default App;
