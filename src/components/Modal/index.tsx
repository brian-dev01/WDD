 "use client"


 import { useState } from "react";
 import { X } from "lucide-react";
 import { Button } from "../ui/button"; // You may need to adjust the import if needed
 
 // Modal Component
 function InquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const [name, setName] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [message, setMessage] = useState<string>("");
   const [loading, setLoading] = useState<boolean>(false);
   const [successMessage, setSuccessMessage] = useState<string | null>(null);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
 
     setLoading(true);
 
     // Create the request body
     const requestBody = {
       id: "string", // Replace with a dynamic ID if necessary
       name,
       email,
       message,
       eventDate: new Date().toISOString(),
       userId: "string", // Replace with the user ID if needed
       createdAt: new Date().toISOString(),
       updatedAt: new Date().toISOString(),
     };
 
     try {
       // Make the API request
       const response = await fetch("http://localhost:5000/api/inquiries", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(requestBody),
       });
 
       if (!response.ok) {
         throw new Error("Failed to submit the inquiry");
       }
 
       const data = await response.json();
 
       // On success
       setSuccessMessage("Inquiry submitted successfully!");
       setName("");
       setEmail("");
       setMessage("");
     } catch (error) {
       setSuccessMessage(null);
       alert("Error submitting the inquiry. Please try again.");
     } finally {
       setLoading(false);
     }
   };
 
   return (
     isOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
         <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px] relative">
           <X className="absolute top-3 right-3 cursor-pointer" onClick={onClose} />
           <h2 className="text-2xl font-semibold mb-4">Inquiry Form</h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label className="block text-sm font-medium mb-1" htmlFor="name">
                 Name
               </label>
               <input
                 id="name"
                 type="text"
                 className="w-full p-2 border border-gray-300 rounded"
                 placeholder="Your Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
               />
             </div>
             <div className="mb-4">
               <label className="block text-sm font-medium mb-1" htmlFor="email">
                 Email
               </label>
               <input
                 id="email"
                 type="email"
                 className="w-full p-2 border border-gray-300 rounded"
                 placeholder="Your Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
             </div>
             <div className="mb-4">
               <label className="block text-sm font-medium mb-1" htmlFor="message">
                 Message
               </label>
               <textarea
                 id="message"
                 rows={4}
                 className="w-full p-2 border border-gray-300 rounded"
                 placeholder="Your Message"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
               ></textarea>
             </div>
             {loading && (
               <div className="text-center mb-4">
                 <span>Loading...</span>
               </div>
             )}
             {successMessage && (
               <div className="text-center mb-4 text-green-500">
                 <span>{successMessage}</span>
               </div>
             )}
             <div className="flex justify-end">
               <Button type="submit" disabled={loading}>
                 Submit
               </Button>
             </div>
           </form>
         </div>
       </div>
     )
   );
 }
 
 export default InquiryModal;
 