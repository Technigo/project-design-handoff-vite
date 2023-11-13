import style from './Header.module.css';
import { Text } from "../../../UI/textAndTypography/Text";
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const Header = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <img
                    className={style.heroimage}
                    src="/Images/heroimage.png"
                    alt="Person rolling a purple yogamat."
                />
                <Text
                    header="Yoga and meditation for women"
                    type="H1"
                    style={{ color: '#FFFFFF' }}
                    className={style.Texth1}
                />
                <Text
                    header="We help you stay vigorous in mind & body during menopause"
                    type="H2"
                    style={{ color: '#FFF', fontWeight: 300 }}
                    className={style.Texth2}
                />
                <StyledButton className={style.styledBtn1}>
                    Find yoga class
                </StyledButton>
                <StyledButton
                    className={style.styledBtn2}
                    border="1px solid #FFD075"
                    backgroundColor="transparent"
                    color="#FFD075"
                    hoverBackgroundColor="#FFF"
                    hoverColor="#FFD075"
                >
                    Become a member
                </StyledButton>

            </section>
        </div >
    );
};
