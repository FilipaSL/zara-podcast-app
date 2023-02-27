import "./App.css";

// libraries
import { Routes, Route } from "react-router-dom";

//layout
import DefaultLayout from "./layouts";

//views
import { Main, Details, Episodes } from "./views";

function App() {
  return (
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
  );
}

export default App;
