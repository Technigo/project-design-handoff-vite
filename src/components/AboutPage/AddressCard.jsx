import styled from 'styled-components';
import { useTranslation } from 'react-i18next';


const AddressCardContainer = styled.div`
background-color: #D2FDFF; /* Mint Green */
border: 1px solid #2A3439; /* Gunmetal */
font-family: 'Neuton', sans-serif;  /* Neuton font */
border-radius: 5px;
padding: 16px;
display: flex; 
flex-direction: column;
justify-content: space-between; 
align-items: center; 
min-width: 120px;
min-height: 133px;   
overflow: hidden; 
color: #000; 

    h2 {
        font-family: 'Neuton', sans-serif;  /* Neuton font */
        font-weight: 700;  /* Weight 700 */
        font-size: 16px;   /* Size 16px */
        line-height: 20.24px;  /* Line height 20.24px */
        text-align: center;  /* Center alignment */
        color: #000; /* Black color */
        margin: 0;
        margin-bottom: 6px; 
    }

    p {
        color: #2A3439; /* Gunmetal */
        margin: 0;
        font-size: 12px; 
        line-height: 1.5; 
    }
`;

function AddressCard(props) {
    const { t } = useTranslation();

    return (
        <AddressCardContainer>
            {/* Use the `t` function to get translated text */}
            <h2>{t('addressCard.label')}</h2>
            <p>{props.location}</p>
            <p>{props.detail1}</p>
            <p>{props.detail2}</p>
            <p>{props.region}</p>
            <p>{props.world}</p>
        </AddressCardContainer>
    );
}

export default AddressCard;



