import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-5 py-12 flex flex-wrap justify-center">
        <div className="flex flex-col lg:w-1/4 w-full px-4 mb-8">
          <h4 className="text-lg font-bold mb-4">About</h4>
          <a href="/#" className="text-blue-600 mb-2">History</a>
          <a href="/#" className="text-blue-600 mb-2">Fit Club in a nutshell</a>
          <a href="/#" className="text-blue-600 mb-2">What we do</a>
          <a href="/#" className="text-blue-600 mb-2">Location</a>
          <a href="/#" className="text-blue-600 mb-2">Management Team</a>
        </div>

        <div className="flex flex-col lg:w-1/4 w-full px-4 mb-8">
          <h4 className="text-lg font-bold mb-4">Too Fit to Quit</h4>
          <a href="/#" className="text-blue-600 mb-2">History</a>
          <a href="/#" className="text-blue-600 mb-2">Fit Club in a nutshell</a>
          <a href="/#" className="text-blue-600 mb-2">What we do</a>
          <a href="/#" className="text-blue-600 mb-2">Location</a>
          <a href="/#" className="text-blue-600 mb-2">Management Team</a>
        </div>

        <div className="flex flex-col lg:w-1/4 w-full px-4 mb-8">
          <h4 className="text-lg font-bold mb-4">Too Fit to Quit</h4>
          <a href="/#" className="text-blue-600 mb-2">History</a>
          <a href="/#" className="text-blue-600 mb-2">Fit Club in a nutshell</a>
          <a href="/#" className="text-blue-600 mb-2">What we do</a>
          <a href="/#" className="text-blue-600 mb-2">Location</a>
          <a href="/#" className="text-blue-600 mb-2">Management Team</a>
        </div>

        <div className="flex flex-col lg:w-1/4 w-full px-4 mb-8">
          <div className="text-light text-center mb-4">
            <h6 className="text-lg">New WP themes are in production</h6>
            <p>Subscribe to Bold Themes newsletter to get a notification once a new WP theme is online. We promise not to spam!</p>
          </div>

          <form className="text-center">
            <input className="w-full mb-4 px-4 py-2 rounded-full border border-white" type="search" placeholder="Your email address" aria-label="Search" />
            <button className="btn btn-outline-light px-6 py-2 rounded-full" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="bg-black text-blue-600 text-center py-2">
        <p>Copyright © {currentYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
