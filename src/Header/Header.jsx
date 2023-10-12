// import React from 'react';
import mist from "../assets/logos/mist.png";
import bteb from "../assets/logos/bteb.png";
const Header = () => {
    return (
        
        <div className=" flex justify-between items-center px-4">
            <div className="flex items-center space-x-2">
            <img
              src={mist}
              alt="Left Logo"
              className="h-24 w-24"
            />
            
          </div>
  
          {/* Center - Institute Name, Address, and Other Information */}
          <div className="text-center text-green-500 pt-8">
            <h1 className="text-4xl font-bold text-center">মডেল ইনস্টিটিউট অব সায়েন্স এন্ড টেকনোলোজি লিঃ</h1>
            <p className="text-sm">( জাঃবিশ্বঃ ও বা.কা.শি.বো. অধিভূক্ত, বানিজ্য মন্ত্রণালয়ের RJSCF রেজিষ্ট্রার্ড এবং GCC ট্রেড লাইসেন্স প্রাপ্ত বেসরকারি কলেজ , প্রশিক্ষণ ইনস্টিটিউট ও ইঞ্জিনিয়ারিং ফার্ম )</p>
            <p>বি .আই.ডি.সি রোড ,পোঃ ডুয়েট ,গাজীপুর-১৭০০। ফোনঃ ০২-৯২০৫১৩৫,০২-৯২০৫৫৯৫-৯৬;</p>
            
          </div>
  
          {/* Right Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={bteb}
              alt="Right Logo"
              className="h-24 w-24"
            />
          </div>
        </div>
    );
};

export default Header;