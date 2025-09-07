import React from 'react';
import { Modal, ModalTrigger, ModalContent } from "@/components/ui/modal";

interface ProductImageModalProps {
  image: string;
  name: string;
  description?: string;
  children: React.ReactNode;
}

export const ProductImageModal = ({ image, name, description, children }: ProductImageModalProps) => {
  return (
    <Modal>
      <ModalTrigger asChild>
        {children}
      </ModalTrigger>
      <ModalContent className="max-w-4xl w-[90vw] h-[90vh] p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="flex-1 relative bg-neutral-50">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Details Section */}
          <div className="w-full md:w-80 p-6 bg-white flex flex-col justify-center">
            <h2 className="text-2xl font-light text-neutral-900 mb-4">
              {name}
            </h2>
            {description && (
              <p className="text-neutral-600 leading-relaxed mb-6">
                {description}
              </p>
            )}
            <div className="space-y-4">
              <div className="text-sm text-neutral-500">
                <p>Click outside or press ESC to close</p>
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};