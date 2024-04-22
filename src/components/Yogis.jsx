//import styled
// import styled from "styled-components";

//import reusables
import { Button } from "../reusables/Button";
import { HeadingTwo } from "../reusables/HeadingTwo";
import { ParagraphTwo } from "../reusables/ParagraphTwo";
import { ParagraphOne } from "../reusables/ParagraphOne";

//import pictures
// import TeacherBlack from "../../public/images/teacher-black.png";
// import TeacherWhite from "../../public/images/teacher-white.png";
// import TeacherGrey from "../../public/images/teacher-grey.png";

//import hooks
// import { useEffect, useState } from "react";

//styles

//component
export const Yogis = () => {
  return (
    <div>
      <HeadingTwo>Meet our yogis</HeadingTwo>
      <ParagraphTwo>
        At Shanti Studio, our instructors bring years of experience and humble
        wisdom to their teachings, welcoming all with open hearts.
      </ParagraphTwo>

      <ParagraphOne>
        A few years ago, I discovered yoga, and it quickly became crucial to me.
        Using yoga, I can calm my mind, be honest with myself, and see things
        clearly without pretend. I can slow down my thoughts, be honest...
      </ParagraphOne>
      <Button>Check schedule</Button>
    </div>
  );
};
