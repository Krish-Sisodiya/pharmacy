import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-green-500 selection:text-white">
      <AppRoutes />
    </div>
  );
};

export default App;