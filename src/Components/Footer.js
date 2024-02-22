const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-rose-500 text-white py-4">
        <div className="container mx-auto flex items-center justify-center">
          <p className="mr-2">Created By</p>
          <i className="fas fa-heart text-red-500 mx-1"></i>
          <a
            href="https://www.linkedin.com/in/gopala-krishna-kimidi"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 underline hover:text-gray-300"
            title="Gopal Krishna Linkedin Profile"
          >
            Gopala Krishna
          </a>
          <i className="fas fa-copyright mx-1"></i>
          <span>{year}</span>
          <strong className="ml-2">TastyFoodJourney<span className="text-red-500"></span></strong>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  