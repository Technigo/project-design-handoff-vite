import { Button } from "../../re-components/Button"
import weblinks from "../../data/links.json"

export const SocialLinks = () => {
  return (
    <>
      {weblinks.weblinks.map((item) => {
        
        // // Define styles based on link id:s
        let buttonStyle = {};

        if (item._id === "1") {
          buttonStyle = { backgroundColor: 'lightblue', padding: '10px', margin: '5px' }; // Style for ID 1
        } else if (["2", "3", "4"].includes(item._id)) {
          buttonStyle = { backgroundColor: 'lightcoral', padding: '8px', margin: '5px' }; // Style for IDs 2, 3, and 4
        } else if (["5", "6", "7"].includes(item._id)) {
          buttonStyle = { backgroundColor: 'lightgreen', padding: '6px', margin: '5px' }; // Style for IDs 5, 6, and 7
        }
        
        
        return (
          <div key={item._id} style={buttonStyle}>
            <Button
              text={item.text}
              icon={item.icon}
              link={item.link}
            />
          </div>
        );
      })}   
    </>
  )
}