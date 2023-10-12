import { Link } from "react-router-dom";
import logo2 from "../assets/logos/logo-2.png"
const Footer = () => {
  return (
    <div className="pb-5 mt-5 px-10 flex justify-between items-center gap-10 bg-blue-900 opacity-95 ">
      <div className="w-3/6">
        <img src={logo2} alt=""  className="h-24 py-4"/>
        <p className="text-white">
          একবিংশ শতাব্দির চ্যালেঞ্জ মোকাবিলার জন্য প্রয়োজন যুগোপযোগি কারিগরি
          শিক্ষা। এই শিক্ষা দক্ষ জনশক্তি এবং একটি দেশের উন্নয়নের প্রধান চালিকা
          শক্তি। কারিগরি...
        </p>
        <Link to={'/'} className="text-white">Read More ...</Link>
      </div>
      <div className="w-1/6 text-white">
        <h4 className="border-b-2 text-center">Our Departments</h4>

        
        <ul className="flex gap-2">
          <li>
            <Link to="/cst">CST</Link>
          </li> ||
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
        </ul>
        
        <ul className="flex gap-2">
          
          <li>
            <Link to="/mechanical">Mechanical</Link>
          </li> ||
          <li>
            <Link to="/eee">EEE</Link>
          </li>
        </ul>
        <ul className="flex gap-2">
            <li>
                <Link>Civil</Link>
               
            </li> ||
            <li>
                <Link>Automobile</Link>
                
            </li>
        </ul>
        <ul className="flex gap-2">
            <li>
                <Link>Textile</Link>
               
            </li> ||
            <li>
                <Link>Architecture</Link>
                
            </li>
        </ul>
        <ul className="flex gap-2">
            <li>
                <Link>Telecom</Link>
               
            </li> ||
            <li>
                <Link>Food</Link>
                
            </li>
        </ul>
       
      </div>
      <div className="w-1/6 text-white">
        <h4 className="border-b-2">Contact</h4>
       <Link className="text-white">Have a questions?</Link>
       <Link className="text-white">info@mistte.edu.bd</Link><br />
       <Link className="text-white">1839911608</Link>
      </div>
    </div>
  );
};

export default Footer;
