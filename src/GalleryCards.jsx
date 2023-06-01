
import { useEffect, useState } from 'react';

const businessCards = [{
  id: 1,
  name: "John Doe",
  first_name: "John",
  last_name: "Doe",
  current_title: "Software Engineer",
  location: "New York",
  phone_number: "+1 123-456-7890",
  personal_email: "john.doe@example.com",
  linkedIn: "https://linkedin.com/in/johndoe",
  experience: [
    "Senior Software Developer - ABC Company",
    "Software Engineer - XYZ Company"
  ],
  education: [
    "Bachelor's Degree in Computer Science - University of XYZ",
    "Certification in Web Development - Online Course"
  ]
}, {
  id: 2,
  name: "Jane Smith",
  first_name: "Jane",
  last_name: "Smith",
  current_title: "Product Manager",
  location: "San Francisco",
  phone_number: "+1 987-654-3210",
  personal_email: "jane.smith@example.com",
  linkedIn: "https://linkedin.com/in/janesmith",
  experience: [
    "Product Manager - XYZ Company",
    "Business Analyst - ABC Company"
  ],
  education: [
    "Master's Degree in Business Administration - University of ABC",
    "Bachelor's Degree in Economics - University of XYZ"
  ]
},
{
  id: 3,
  name: "David Johnson",
  first_name: "David",
  last_name: "Johnson",
  current_title: "Marketing Specialist",
  location: "London",
  phone_number: "+44 123-456-7890",
  personal_email: "david.johnson@example.com",
  linkedIn: "https://linkedin.com/in/davidjohnson",
  experience: [
    "Digital Marketing Manager - ABC Company",
    "Marketing Coordinator - XYZ Company"
  ],
  education: [
    "Bachelor's Degree in Marketing - University of XYZ",
    "Certification in Digital Marketing - Online Course",
    "Bachelor's Degree in Economics - University of XYZ"
  ]
}]


const GalleryCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    try {
      setCards(businessCards);
    } catch (error) {
      console.error('Error', error);
    }

  }, []);

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="border-2 rounded-md mb-5 py-3 pl-10 pr-1 grid grid-cols-1 divide-y text-xs">
          <div className='pb-3'>
            <div className='grid grid-flow-col-dense w-max gap-x-2 items-center'>
              <h2 className='italic font-medium'>{card.name}</h2>
              <a href={"tel:" + card.phone_number}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="gray" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
              <a href={"mailto:" + card.personal_email}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>

              <div className='h-4/6 w-px bg-gray-200'></div>
              <a href={card.linkedIn}>

                <div className='grid divide-y'>
                  <img className="w-5 h-5" width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
                </div>
              </a>
            </div>
            <div className='flex items-center'>
              <div className=''>{card.current_title}</div>
              <div className='h-1 w-1 bg-gray-200 rounded-full mx-2'></div>
              <div className='text-gray-300'>{card.location}</div>
            </div>
          </div>
          <div className='pt-3 grid grid-cols-5	gap-y-2 text-left	'>
            <h3 className='italic'>Experience:</h3>
            <ul className='col-span-4'>
              {card.experience.map((exp, index) => (
                <div key={index} className='flex items-center '>
                  <div className='h-1.5 w-1.5 bg-gray-200 rounded-full mx-2 relative'>
                    <div className={'h-full w-px bg-gray-200 absolute left-1/2 '
                      + (index === card.experience.length - 1 ? 'bottom-full' : 'top-full ')
                    }>
                    </div>
                    {index !== card.experience.length - 1 && index !== 0 ? <div className={'h-full w-px bg-gray-200 absolute left-1/2 bottom-full'}>
                    </div> : ""}
                  </div>
                  <li >{exp}</li>
                </div>
              ))}
            </ul>
            <h3 className='italic'> Education:</h3>
            <ul className='col-span-4 relative'>
              {card.education.map((edu, index) => (
                <div key={index} className='flex items-center '>
                  <div className='h-1.5 w-1.5 bg-gray-200 rounded-full mx-2 relative'>
                    <div className={'h-full w-px bg-gray-200 absolute left-1/2 '
                      + (index === card.education.length - 1 ? 'bottom-full' : 'top-full ')
                    }>
                    </div>
                    {index !== card.education.length - 1 && index !== 0 ? <div className={'h-full w-px bg-gray-200 absolute left-1/2 bottom-full'}>
                    </div> : ""}
                  </div>
                  <li >{edu}</li>
                </div>
              ))}
            </ul>

          </div>
        </div>
      ))}

    </div>
  );
};


export default GalleryCards
