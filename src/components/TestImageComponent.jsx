import './TestImageComponent.css';

import Rectangle30 from '../assets/Rectangle30.png';

export const TestImageComponent = () => {
    return (
        <div className='image-container'>
            <img src={Rectangle30} className='image' />
        </div>
    )
}