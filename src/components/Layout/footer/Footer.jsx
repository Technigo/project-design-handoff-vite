import style from './Footer.module.css';
import { Text } from "../../UI/textAndTypography/Text";
//I decided to devide the FindUs and Footer so it will (hopefully) be easier to make changes to both individually in the future. f.eks if one was to add buttons to footer (instagram, fb, tiktok and so on) or move the FindUs to somewhere lese.

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <Text
                header="© YogaBalance 2023"
                type="bodyText"
                style={{ color: '#FFF' }}
            />
        </footer>
    );
};

