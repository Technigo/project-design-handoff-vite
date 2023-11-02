export const InformationList = () => {
    return (
        <div className="grid grid-cols-2 place-content-evenly text-sm md:grid-cols-4 lg:pl-10 text-lg">
            <ul>
                <li><h2 className="font-bold">Information</h2></li>
                <li>About us</li>
                <li>More Search</li>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Events</li>
            </ul>

            <ul>
                <li><h2 className="font-bold">Helpful Links</h2></li>
                <li>Services</li>
                <li>Support</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>

            <ul>
                <li><h2 className="font-bold">Our Services</h2></li>
                <li>Brands List</li>
                <li>Facilities</li>
                <li>Opening hours</li>
            </ul>

            <ul>
                <li><h2 className="font-bold">Contact Us</h2></li>
                <li>+46 001 89 89 10</li>
                <li>Facilities</li>
                <li>groundzero@support.com</li>
                <li><img className="h-9 invert" src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Footer%20buttons%20icons.svg?v=1698752738569" alt="Social Media Icons" />
                </li>
            </ul>
        </div>
    );
}
