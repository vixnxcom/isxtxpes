const styles = {
  boxWidth: "xl:max-w-[1440px] w-full",

  heading1: "aeon-bold text-center xs:text-[44px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
  heading2: "aeon-bold text-center xs:text-[20px] text-[24px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
  heading3: "aeon-bold text-center xs:text-[20px] text-[24px] text-black xs:leading-[46.8px] leading-[36.8px] w-full",
  subHeading: "noto text-center xs:text-[28px] text-[24px] text-black mt-5 w-full",
  subHeadingx: "noto text-left xs:text-[28px] text-[24px] text-white mt-5 w-full",

  paragraph: "noto font-normal coal md:text-[2vw] text-[4vw] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
