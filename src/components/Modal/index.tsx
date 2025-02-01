import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button"; // You may need to adjust the import if needed

// Modal Component
function InquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
        <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px] relative">
          <X
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          />
          <h2 className="text-2xl font-semibold mb-4">Inquiry Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
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
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button />
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default InquiryModal;
