// // import React from 'react'

// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/Context";
// // import { use } from "react";
// import { useNavigate } from "react-router-dom";

// function RelatedDoctors({ speciality, docId }) {
//   const { doctors } = useContext(AppContext);
//   const [relDoc, setRelDoc] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (doctors.length > 0 && speciality) {
//       const doctorsData = doctors.filter(
//         (doc) => doc.speciality === speciality && doc._id !== docId
//       );
//       setRelDoc(doctorsData);
//     }
//   }, [doctors, docId, speciality]);
//   return (
//     <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
//       <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
//       <p className="sm:w1/3  text-center text-sm">
//         {" "}
//         Simply browse through our extensive list of trusted doctors.
//       </p>
//       <div className=" w-full grid grid-cols-auto gap-4  pt-5 gap-y-6 px-3 sm:px-0">
//         {relDoc.slice(0, 5).map((item, index) => (
//           <div
//             onClick={() => {
//               navigate(`/appoinment/${item._id}}`);
//               scrollTo(0, 0);
//             }}
//             className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transistion-all duration-500 "
//             key={index}
//           >
//             <img className="bg-blue-50" src={item.image} alt="" />
//             <div className="p-4">
//               <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                 <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                 <p>Available</p>
//               </div>
//               <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//               <p className="text-gray-600 text-sm">{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 ">
//         more
//       </button>
//     </div>
//   );
// }

// export default RelatedDoctors;

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function RelatedDoctors({ speciality, docId }) {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const filteredDoctors = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(filteredDoctors);
    }
    // setRelDoc();
  }, [doctors, docId, speciality]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.length > 0 ? (
          relDoc.slice(0, 5).map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
            >
              <img
                className="bg-blue-50 w-full"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No related doctors found for this speciality.
          </p>
        )}
      </div>

      {relDoc.length > 5 && (
        <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">
          More
        </button>
      )}
    </div>
  );
}

export default RelatedDoctors;
