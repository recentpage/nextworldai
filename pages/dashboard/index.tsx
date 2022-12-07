import Sidebar from "../../components/Sidebar/Sidebar";

export default function index() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      </div>
    </div>
  );
}
