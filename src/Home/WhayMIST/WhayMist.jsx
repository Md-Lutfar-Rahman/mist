import React from "react";
import SectionTitle from "../../components/sectiontitle/SectionTitle";
import education from '../../assets/user-graduate-solid.svg';
import swatchbook from '../../assets/swatchbook-solid.svg';
import hotelsolid from '../../assets/hotel-solid.svg';


import './WhayMist.css';
const WhayMist = () => {
  return (
    <div className="">
      <SectionTitle title="Why MIST"></SectionTitle>

      <div className="flex justify-between items-center px-10 mt-10 gap-10">
  <div className="text-center">
    <img src={education} alt="Education Icon" className="h-20 w-20 mx-auto icon-svg" />
    <h2 className="text-lg font-bold mt-4">উচ্চশিক্ষায় আমাদের সাফল্য</h2>
    <p className="text-justify">প্রতি বছর প্রায় সহস্রাধীক শিক্ষার্থী এই প্রতিষ্ঠান থেকে সফলতার সাথে কৃতকার্য হয়ে ডুয়েট সহ দেশ-বিদেশে বিভিন্ন বিশ্ববিদ্যালয়ে অধ্যায়ন করে থাকে এবং স্বানমধন্য প্রতিষ্ঠানে উচ্চ বেতনে চাকুরী প্রাপ্তির ক্ষেত্রে অনেক অগ্রসর।</p>
  </div>
  <div className="text-center">
    <div className="fab">
      <img src={swatchbook} alt=""  className="h-20 w-20 mx-auto icon-svg" />
    </div>
    <h2 className="text-lg font-bold mt-4">আমাদের ল্যাব সমূহ</h2>
    <p className="text-justify">আমাদের রয়েছে আধুনিক সু-সজ্জিত ল্যাব সমূহ Autodesk Manufacturing Lab, Reverse Engg. Lab,manufacturing Lab ইত্যাদি সহ শিল্পকারখানায় ব্যবহৃত অত্যাধুনিক 3D Printer, 3D Scanner, CNC Lathe etc.</p>
  </div>
  <div className="text-center">
    <img src={hotelsolid} alt="" className="h-20 w-20 mx-auto icon-svg"/>
    <h2 className="text-lg font-bold mt-4">পাঠ্যক্রম বহির্ভূত কার্যক্রম</h2>
    <p className="text-justify">আমাদের রয়েছে Programming Club , Language Club etc. যেখানে শিক্ষার্থীরা নিজেদের দক্ষতা উন্নয়নে অগ্রণী ভূমিকা রাখছে। এছাড়া আমাদের রয়েছে সরকার অনুমদিত উন্নত মানের দক্ষতা উন্নয়ন কেন্দ্র |</p>
  
  </div>
</div>

    </div>
  );
};

export default WhayMist;
