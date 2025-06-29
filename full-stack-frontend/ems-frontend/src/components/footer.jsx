function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-1">&copy; 2025 MyWebsite</p>
      <div>
        <a href="https://twitter.com" className="text-white me-3">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://github.com/vihang-dandawar" className="text-white me-3">
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:support@example.com" className="text-white">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;