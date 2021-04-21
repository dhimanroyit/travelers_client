import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="py-20 bg-indigo-900 ">
      <div className="container mx-auto grid grid-cols-4 gap-8 text-gray-50">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-3">Travelers</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vitae? Natus animi, dolore fuga quisquam error in quae dignissimos quaerat, assumenda doloribus repudiandae, corporis !</p>
          <div className="flex space-x-4 mt-4">
            <a className="px-2 py-1 hover:text-indigo-700 transition-colors duration-100" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="px-2 py-1 hover:text-indigo-700 transition-colors duration-100" href="https://www.facebook.com/"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="px-2 py-1 hover:text-indigo-700 transition-colors duration-100" href="https://www.facebook.com/"><FontAwesomeIcon icon={faGoogle} /></a>
            <a className="px-2 py-1 hover:text-indigo-700 transition-colors duration-100" href="https://www.facebook.com/"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-3">Support</h1>
          <ul className="text-sm space-y-3">
            <li><a href="https://www.facebook.com/">Customer Support</a></li>
            <li><a href="https://www.facebook.com/">Privacy & Policy</a></li>
            <li><a href="https://www.facebook.com/">Terms & Condition</a></li>
            <li><a href="https://www.facebook.com/">Forum</a></li>
            <li><a href="https://www.facebook.com/">Tour Guid</a></li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-3">Contacts</h1>
          <address className="text-sm space-y-3 not-italic">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="ml-4">Dhanmondi, Dhaka</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p className="ml-4">+0000000000009</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="ml-4">programing@gmail.com</p>
            </div>
          </address>
        </div>
      </div>
    </footer>
  )
}

export default Footer
