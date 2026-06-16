import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { Root } from "./Root";

const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const ResumePage = lazy(() => import("./pages/ResumePage").then(m => ({ default: m.ResumePage })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "projects", Component: ProjectsPage },
      { path: "resume", Component: ResumePage },
    ],
  },
]);
