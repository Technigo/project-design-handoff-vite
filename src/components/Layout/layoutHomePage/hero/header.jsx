import style from './Header.module.css';
import { Text } from "../../../UI/textAndTypography/Text";
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const Header = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="Yoga and meditation for women"
                    type="H1"
                    style={{ color: '#FFFFFF' }}
                />
                <Text
                    header="We help you stay vigorous in mind & body during menopause"
                    type="H2"
                    style={{ color: '#FFF', fontWeight: 500 }}
                />
                <StyledButton className={style.styledBtn}>
                    Find yoga class
                </StyledButton>
                <StyledButton
                    className={style.styledBtn}
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
