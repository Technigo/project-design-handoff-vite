import style from './Membership.module.css';
import { Text } from "../../../UI/textAndTypography/Text";
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const Membership = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="Our memberships"
                    type="H2"
                    style={{ color: '#612E77' }}
                    className={style.gridItem1}
                />
                <Text
                    header="Get the most out of your yoga practice"
                    type="H2"
                    style={{ color: '#1D1C25', fontWeight: 500 }}
                    className={style.gridItem2}
                />
                <div className={style.membershipBoxInclusive}>
                    <img src="/Images/Star.png" alt="Purple star icon" className={style.img} />
                    <Text
                        header="All inclusive"
                        type="H2"
                        style={{ color: '#1D1C25' }}
                        className={style.boxInclusive2}
                    />
                    <Text
                        header="Go to all of our classes and courses and also participate in our retreats. You get personal help to from our instructors to plan your classes based on your goals. This is for you who will fully commit to living your full potential during menopause and beyond."
                        type="bodyText"
                        style={{ color: '#1D1C25' }}
                        className={style.boxInclusive3}
                    />
                    <StyledButton
                        width="277px"
                        height="53px"
                        color="#000000"
                        hoverColor="#000000"
                    >
                        Buy now 599 sek per month
                    </StyledButton>
                </div>

                <div className={style.membershipBoxYoga}>
                    <img src="/Images/Yoga.png" alt="Purple yogapose icon" className={style.img} />
                    <Text
                        header="Yoga member"
                        type="H2"
                        style={{ color: '#1D1C25' }}
                        className={style.boxYoga2}
                    />
                    <Text
                        header="Participate in all classes. This membership also includes one hour consultation with an instructor each month."
                        type="bodyText"
                        style={{ color: '#1D1C25' }}
                        className={style.boxYoga3}
                    />
                    <StyledButton
                        width="277px"
                        height="53px"
                        color="#000000"
                        hoverColor="#000000"
                    >
                        Buy now 299 sek per month
                    </StyledButton>
                </div>
            </section >
        </div >
    );
};