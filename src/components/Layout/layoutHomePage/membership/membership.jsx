import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Membership.module.css';
import { Text } from "../../../UI/textAndTypography/Text";
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const Membership = () => {
    const { t } = useTranslation();

    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header={t('membership.header')}
                    type="H2"
                    style={{ color: '#612E77' }}
                    className={style.gridItem1}
                />
                <Text
                    header={t('membership.subHeader')}
                    type="H2"
                    style={{ color: '#1D1C25', fontWeight: 500 }}
                    className={style.gridItem2}
                />
                <div className={style.membershipBoxInclusive}>
                    <img src="/Images/Star.png" alt={t('membership.allInclusive.alt')} className={style.img} />
                    <Text
                        header={t('membership.allInclusive.title')}
                        type="H2"
                        style={{ color: '#1D1C25' }}
                        className={style.boxInclusive2}
                    />
                    <Text
                        header={t('membership.allInclusive.description')}
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
                        {t('membership.allInclusive.buttonText')}
                    </StyledButton>
                </div>

                <div className={style.membershipBoxYoga}>
                    <img src="/Images/Yoga.png" alt={t('membership.yogaMember.alt')} className={style.img} />
                    <Text
                        header={t('membership.yogaMember.title')}
                        type="H2"
                        style={{ color: '#1D1C25' }}
                        className={style.boxYoga2}
                    />
                    <Text
                        header={t('membership.yogaMember.description')}
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
                        {t('membership.yogaMember.buttonText')}
                    </StyledButton>
                </div>
            </section >
        </div >
    );
};
