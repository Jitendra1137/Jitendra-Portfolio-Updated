const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Jitendra Kumar Jat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
