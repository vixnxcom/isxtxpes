import React from 'react'

const Vidd = () => {
  return (
   
       <section>
           <div className="fixed flex flex-col inset-0 flex items-center justify-center bg-video bg-opacity-50">
             <div className="flex flex-row gap-4">
             <img src={vlogo} alt="" className="mx-auto w-20  mb-10 shadowx" />
             <h1 className="text-[24px] gold shadoww aeon-bold  mx-auto text-center mb-16">The Diamond Project</h1>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
               <h2 className="aeon-bold text-center font-bold mb-4 text-black">Be One of the lucky ones</h2>
               <iframe
   src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&tD=113ef142f684807a9&sD=113ef142f6848abe1"     
                 width="100%"
                 height="300"
                 frameBorder="0"
               ></iframe>
               <button
                 onClick={handleFormSubmission}
                 className="mt-4 px-6 py-2 bg-white borderr blue noto rounded-lg  text-center mx-auto hover:bg-blue-700 w-full"
               >
                 I Have Already Submitted
               </button>
             </div>
           </div>
    
           </section> 
  )
}

export default Vidd
