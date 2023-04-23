import "./App.css";
import Alert from "./components/Alert";
import StudentInfoComponent from "./components/StudentInfoComponent";

function App() {
  return (
    <div className="App">
      {/* <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />  */}
      <StudentInfoComponent />
    </div>
  );
}

export default App;
