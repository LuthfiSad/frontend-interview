import RootView from "@features/_global/views/root";
import DetailVideoView from "@features/detailVideo/view/detailVideo";
import VideoView from "@features/video/view/video";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "/",
        element: <VideoView />,
      },
      {
        path: "/detail/:id",
        element: <DetailVideoView />,
      },
    ],
  },
]);
