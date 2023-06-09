/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../styles/uranus.module.scss";
import Image from "next/image";
import Link from "next/link";

const Earth = () => {
  return (
    <>
      <Link href={"/"}>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>Уран</h1>
          </div>
          <div className={styles.image}>
            <Image src='/uranus/uranus.png' alt='' width={"400"} height={"400"} />
          </div>
          <div className={styles.text}>
            <h4>Уран - это планета, которая является седьмой по удаленности от Солнца в нашей Солнечной системе. <br /> Она была открыта в 1781 году английским астрономом Уильямом Гершелем. Уран является газовым гигантом, подобно Юпитеру и Сатурну, и состоит в основном из водорода, гелия и метана.
            </h4>
            <h5>Уран имеет наклон оси вращения более чем на 98 градусов, что приводит к тому, что он вращается на боку вокруг своей оси, а его полюса находятся на плоскости орбиты. Эта необычная ориентация планеты приводит к тому, что на Уране наблюдается долговременный сезонный цикл, в течение которого один полюс находится в постоянной темноте, а другой полюс в постоянном свете.
            </h5>
            <h5>Уран имеет множество спутников - 27 известных на данный момент, самый большой из которых - Титания. Уран также имеет кольцевую систему, которая состоит из тысячи небольших кусочков льда и камней. Кольца Урана были открыты в 1977 году во время прохождения планеты около звезды SAO 158687.
            </h5>
            <h5>В настоящее время Уран является объектом исследования многих космических миссий. Единственная миссия, которая была отправлена непосредственно на Уран, была Voyager 2 в 1986 году. В настоящее время не планируются новые миссии на Уран в ближайшем будущем, однако есть несколько предложений для новых миссий, которые могут быть запущены в 2030-х годах.
            </h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Earth;
