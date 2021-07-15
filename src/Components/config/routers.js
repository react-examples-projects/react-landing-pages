import { lazy } from "react";
const TestingLazy = lazy(() => import("../Pages/Testing/Main"));
const SignupLazy = lazy(() => import("../Pages/Signup/Signup"));
const LoginLazy = lazy(() => import("../Pages/Login/Login"));
const AboutLazy = lazy(() => import("../Pages/About/About"));
const ExploreLazy = lazy(() => import("../Pages/Explore/Explore"));
const ProductLazy = lazy(() => import("../Pages/Product/Product"));
const StartLazy = lazy(() => import("../Pages/Start/Start"));
const MemeLazy = lazy(() => import("../Pages/Meme/MemeContainer"));
const BlogLayout = lazy(() => import("../Pages/BlogLayout/BlogLayout"));
const BlogLayout2 = lazy(() => import("../Pages/BlogLayout2/BlogLayout2"));
const TodoLazy = lazy(() => import("../Pages/Todo/Todo"));
const Index = lazy(() => import("../Pages/Index"));
const Me = lazy(() => import("../Pages/Me/Me"));
const GPS = lazy(() => import("../Pages/Gps/Gps"));
const Tv = lazy(() => import("../Pages/tv/Tv"));
const route = (path, Component) => ({ path, Component });
  
const routers = [
  route("/tv", Tv),
  route("/gps", GPS),
  route("/me", Me),
  route("/about", AboutLazy),
  route("/signup", SignupLazy),
  route("/login", LoginLazy),
  route("/product", ProductLazy),
  route("/explore", ExploreLazy),
  route("/start", StartLazy),
  route("/meme", MemeLazy),
  route("/todo", TodoLazy),
  route("/blog", BlogLayout),
  route("/blog2", BlogLayout2),
  route("/testing", TestingLazy),
  route("/", Index),
];

export default routers;
