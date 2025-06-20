export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightHolder = 'Hero App';
  return (
    <footer className="w-screen border-t">
      <p className="flex gap-2 py-6 px-4 justify-center items-center text-xs">
        &copy; {currentYear} {copyrightHolder}. All rights reserved).
      </p>
    </footer>
  );
};
