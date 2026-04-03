export default function BodyLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 container mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}