import React from 'react';
import SectionTitle from '../sectiontitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import computer from '../../assets/dept/computer.jpg'
import electrical from '../../assets/dept/electrical.jpg'
import machanical from '../../assets/dept/Mechanical.jpg'


const Department = () => {
    return (
        <div>
            <SectionTitle title={" Engineering Courses"}></SectionTitle>
            <p className='text-center my-5 '>8 বৎসর মেয়াদী ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং কোর্স সমূহ</p>
            <div className="flex justify-between space-x-4 mt-5 px-10">
      <div className="w-1/3 bg-white rounded-lg shadow-md p-3">
        <img
          src={computer}
          alt="Image 1"
          className="w-full h-40 object-cover rounded-lg"
        />
        <h2 className="text-lg font-semibold mt-2">Welcome to Telecommunication Engineering</h2>
        <div className="flex mt-2">
          {[1, 2, 3, 4, 5, 6, 7].map((star) => (
            <div key={star} className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
          </div>
          ))}
        </div>
        <p className="mt-2">This is some text about the card.</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700">
          Open
        </button>
      </div>
      <div className="w-1/3 bg-white rounded-lg shadow-md p-4">
        <img
          src={electrical}
          alt="Image 2"
          className="w-full h-40 object-cover rounded-lg"
        />
        <h2 className="text-lg font-semibold mt-2">Welcome to Telecommunication Engineering</h2>
        <div className="flex mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
          </div>
          ))}
        </div>
        <p className="mt-2">This is some text about the card.</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700">
          Open
        </button>
      </div>
      <div className="w-1/3 bg-white rounded-lg shadow-md p-4">
        <img
          src={machanical}
          alt="Image 3"
          className="w-full h-40 object-cover rounded-lg"
        />
        <h2 className="text-lg font-semibold mt-2">Welcome to Telecommunication Engineering</h2>
        <div className="flex mt-2">
          {[1, 2, 3, 4, 5, 6].map((star) => (
            <div key={star} className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
          </div>
          ))}
        </div>
        <p className="mt-2">This is some text about the card.</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700">
          Open
        </button>
      </div>
    </div>
        </div>
    );
};

export default Department;