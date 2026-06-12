import { useLocation } from "react-router-dom";

export default function BodyLayout({ children }) {
  const loc = useLocation();
  const isHome = loc.pathname === "/";
  return (
    <div className={`${isHome ? 'w-full' : 'flex flex-col md:flex-row'} h-full min-h-screen bg-[#080809]`}>
          {children}
    </div>
  );
}