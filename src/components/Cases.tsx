"use client";
import styles from "@/sass/layouts/cases.module.scss";
import { oswald } from "@/utils/fonts";
import { useDynamicHeight } from "./hooks";
const Cases = () => {
  const dynamicHeight = useDynamicHeight();
  return (
    <section className={styles.section} id="Cases">
      <div className={styles.container}>
        <h2
          className={`${styles.title} ${oswald.className} ${styles.title__cases} `}
        >
          Grow your global team. Employ the best talent, anywhere in the world
        </h2>
        <p
          className={`${styles.mainCompany__list__item__text} ${styles.text__cases}`}
        >
          The benefits of growing a local team and finding the best talent in
          Ukraine are endless. It’s important to note that labor laws and
          regulations in Ukraine are strict with penalties for non-compliance.
          Let our team take care of the local employment solutions such as
          payroll, benefits, compliance, taxes, accounting, audit, recruitment,
          Employment of Record and admin so you can focus on growing your
          business. We are here to help you every step of the way.
        </p>
        <div
          className={styles.cases__overley}
          style={{ height: `${dynamicHeight}px` }}
        ></div>
      </div>
    </section>
  );
};
export default Cases;
