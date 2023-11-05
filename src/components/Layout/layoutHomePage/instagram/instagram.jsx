import style from './Instagram.module.css';
import { Text } from "../../../UI/textAndTypography/Text";
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const Instagram = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="Follow us on Instagram"
                    type="H2"
                    style={{ color: '#FFFFFF' }}
                    className={style.gridItem1}
                />
                <Text
                    header="Connect and keep inspired"
                    type="H2"
                    style={{ color: '#FFF', fontWeight: 500 }}
                    className={style.gridItem2}
                />
                <p>Bildekarusell insta</p>
                <StyledButton style={{
                    display: 'flex',
                    width: "275px",
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px 10px',
                }}>
                    <img
                        src="/Images/instagramLogo.png"
                        alt="Instagram"
                        style={{
                            width: '61.851px',
                            height: '65px',
                            marginLeft: '-30px',
                            marginRight: '0px',
                        }}
                    />
                    <span style={{
                        whiteSpace: 'nowrap',

                    }}>
                        Connect on Instagram
                    </span>
                </StyledButton>


            </section>
        </div>
    );
};