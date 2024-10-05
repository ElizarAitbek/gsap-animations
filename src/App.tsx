import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
export default function App() {
  return (
    <div className="overflow-hidden">
      <Welcome />
      <Hero />
    </div>
  );
}
