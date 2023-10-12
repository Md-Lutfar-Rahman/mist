// import React from 'react';

const ScroleNotice = () => {
    return (
        <div className="bg-yellow-100 p-2 mt-4">
        <div className="container mx-auto">
          {/* <h2 className="text-lg font-semibold mb-2">Notice:</h2> */}
          <div className="max-h-10 overflow-y-auto">
            <marquee className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla, dolor nec faucibus convallis, ipsum odio pharetra nisi,
              eget volutpat ipsum lectus in ipsum. Sed volutpat id dolor non
              mollis. Vestibulum tristique sit amet massa vel eleifend.
            </marquee>
            {/* Add more notice content here */}
          </div>
        </div>
      </div>
    );
};

export default ScroleNotice;