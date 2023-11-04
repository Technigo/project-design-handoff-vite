import style from './Footer.module.css';
import { Text } from "../../UI/textAndTypography/Text";
//I decided to devide the FindUs and Footer so it will (hopefully) be easier to make changes to both individually in the future. f.eks if one was to add buttons to footer or move the FindUs

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <Text
                header="© BodyBalance 2023"
                type="bodyText"
                style={{ color: '#FFF' }}
            />
        </footer>
    );
};

