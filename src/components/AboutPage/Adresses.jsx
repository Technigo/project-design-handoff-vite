import React from 'react';
import AddressCard from './AddressCard'; 

function Adresses() {
    return (
        <div>
            <AddressCard 
                location="Grand Topal Hideaway"
                detail1="Beachside 1"
                detail2="Just outside Haven"
                region="Southern Grahtwood"
                world="Tamriel"
            />
            
            <AddressCard 
                location="Sanctuary"
                detail1="Plot 37, 5th Ward"
                detail2="Shirogane Hingashi"
                region="Eorzea"
                world="Twintania"
            />
        </div>
    );
}

export default Adresses;
