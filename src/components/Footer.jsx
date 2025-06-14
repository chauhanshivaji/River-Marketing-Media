import { resourcesLinks, platformLinks} from "../constants";
import logo from "../assets/logo.png"
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols  lg:grid-cols-3 gap-4">
        <div>
          {/* <h3 className="text-md font-semibold mb-4">Company</h3> */}
          <img className="h-12 mr-2" src={logo} alt="Logo" />
          <p className="text-sm text-neutral-500 pr-8">
            We build stunning websites, craft powerful brand identities, and create marketing campaigns that drive results. Let us take your business to the next level.
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href.replace('#', '')}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-neutral-300 hover:text-white cursor-pointer">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/rivermarketingmedia/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-ghost btn-circle duration-300 ease-in-out hover:scale-110 hover:bg-white hover:rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" fill="#e88924" viewBox="0 0 48 48">
                  <path fill="none" stroke="#e88924" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path><path fill="none" stroke="#e88924" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path><path fill="none" stroke="#e88924" stroke-miterlimit="10" stroke-width="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path><path d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
                </svg>
              </button>
            </a>

            <a href="https://wa.link/a8d6vj" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-ghost btn-circle duration-300 ease-in-out hover:scale-110 hover:bg-white hover:rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" fill="#e88924" viewBox="0 0 48 48">
                  <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 24.753761 4.042851 25.501307 4.125 26.236328 A 1.50015 1.50015 0 1 0 7.1054688 25.902344 C 7.0356182 25.277365 7 24.642333 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 C 30.276146 6.9980469 35.738935 10.388114 38.6875 15.431641 A 1.50015 1.50015 0 1 0 41.277344 13.917969 C 37.807909 7.9834946 31.357854 3.9980469 24 3.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.722656 27.824219 C 32.245656 27.585219 29.898937 26.430484 29.460938 26.271484 C 29.022938 26.112484 28.702766 26.031766 28.384766 26.509766 C 28.066766 26.987766 27.152047 28.062859 26.873047 28.380859 C 26.594047 28.700859 26.315891 28.740953 25.837891 28.501953 C 25.358891 28.260953 23.822094 27.757859 21.996094 26.130859 C 20.576094 24.865859 19.620797 23.302219 19.341797 22.824219 C 19.063797 22.348219 19.311781 22.086609 19.550781 21.849609 C 19.765781 21.635609 20.028578 21.292672 20.267578 21.013672 C 20.504578 20.734672 20.583188 20.53675 20.742188 20.21875 C 20.901188 19.90175 20.822125 19.621813 20.703125 19.382812 C 20.584125 19.143813 19.655469 16.780938 19.230469 15.835938 C 18.873469 15.041938 18.49725 15.024719 18.15625 15.011719 C 17.87825 15.000719 17.558234 15 17.240234 15 z M 42.478516 21.208984 A 1.50015 1.50015 0 0 0 40.960938 22.833984 C 40.987431 23.216785 41 23.603834 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.5005317 1.5005317 0 1 0 6.3945312 32.589844 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 23.53826 43.984625 23.082153 43.953125 22.626953 A 1.50015 1.50015 0 0 0 42.478516 21.208984 z"></path>
                </svg>
              </button>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-ghost btn-circle duration-300 ease-in-out hover:scale-110 hover:bg-white hover:rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" fill="#e88924" stroke="#e88924" viewBox="0 0 48 48">
                  <path fill="none" stroke="#e88924" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M34.7,39.1c-3,2.1-6.7,3.4-10.7,3.4C13.8,42.5,5.5,34.2,5.5,24c0-3,0.7-5.8,2-8.4"></path><path fill="none" stroke="#e88924" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M13.9,8.5c2.9-1.9,6.3-3,10.1-3c10.2,0,18.5,8.3,18.5,18.5c0,3.4-0.9,6.6-2.5,9.3"></path><path d="M17,29h4v13.2c1,0.2,2,0.3,3,0.3s2-0.1,3-0.3V29h3.6c0.5,0,0.9-0.4,1-0.9l0.4-3c0-0.3-0.1-0.6-0.2-0.8	C31.6,24.1,31.3,24,31,24h-4v-3.5c0-1.1,0.9-2,2-2h2c0.6,0,1-0.4,1-1v-3.4c0-0.5-0.4-1-0.9-1c-0.1,0-1.5-0.1-3.3-0.1	c-4.4,0-6.8,2.6-6.8,7.4V24h-4c-0.6,0-1,0.4-1,1v3C16,28.6,16.4,29,17,29z"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-2 border-t  pt-6 border-neutral-700">
        <p className="text-sm text-center ">
         </p>
      </div>
    </footer>
  );
};

export default Footer;
