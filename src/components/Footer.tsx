const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyRight">
                <p>&copy; {new Date().getFullYear()} Saim Mobilephysio</p>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/terms">Impressum</a>
                <a href="/privacy">Datenschutz</a>
            </div>
        </footer>
    );
};

export default Footer;
