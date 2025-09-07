
import React from 'react';
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Map = () => {
  const storeAddress = "Thamel, Kathmandu, Nepal";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`;

  return (
    <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-lg">
      {/* Store Location Info */}
      <div className="p-6 bg-white">
        <div className="flex items-center space-x-3 mb-4">
          <MapPin className="h-6 w-6 text-neutral-600" />
          <div>
            <h3 className="font-medium text-neutral-900">Le Hayaa Store</h3>
            <p className="text-neutral-600">{storeAddress}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-neutral-900">Neighborhood</p>
              <p className="text-neutral-600">Fashion District</p>
            </div>
            <div>
              <p className="font-medium text-neutral-900">Nearest Subway</p>
              <p className="text-neutral-600">Herald Square</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Map;
