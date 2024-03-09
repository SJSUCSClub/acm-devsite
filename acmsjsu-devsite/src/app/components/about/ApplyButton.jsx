import React from 'react'


const ApplyBtn = () => {
  

  const applications = [
    {
      name: "General Member",
      url: "https://forms.gle/aXjuoZ2e7TVVRJKT8"
    },
    // {
    //   name: "Development Team",
    //   url: "https://forms.gle/avsw3DkLJpEkR9Js8"
    // }
  ]

  const handleClick = () => setClick(!click)
  return (
    <div>
      <button onClick={handleClick} className="relative px-4 py-2 border-2 border-[#eabc4e] rounded-md hover:bg-[#eabc4e] text-[#196096] transition duration-200 font-normal text-sm">APPLY</button>
      {click && (
        <div className="absolute flex flex-col gap-2 py-2 ">
              <a href={application.url}
              target="_blank"
              className="p-2 bg-white rounded-md hover:scale-110 hover:bg-gray-100">
              {application.name} </a>
           
          
        </div>
      )}

    </div>
  )
}

export default ApplyBtn