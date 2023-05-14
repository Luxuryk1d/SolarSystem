import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className='main'>
        <div className='description'>
          <h1>Солнечная Система</h1>
          <hr />
          <Link href={"/mercury"}>
            <div className='burger-btn'>
              <Image
                className='planetImg'
                src='/mercury.png'
                alt=''
                height={"30"}
                width={"30"}
              />
              <p>Меркурий</p>
            </div>
          </Link>
          <Link href={"/venus"}>
          <div className='burger-btn'>
            <Image
              className='planetImg'
              src='/venus.png'
              alt=''
              height={"30"}
              width={"30"}
            />{" "}
            <p>Венера</p>
          </div>
          </Link>
          <Link href={"/earth"}>
          <div className='burger-btn'>
            <Image
              className='planetImg'
              src='/planet-earth.png'
              alt=''
              height={"30"}
              width={"30"}
            />
            <p>Земля</p>
          </div>
          </Link>
          <Link href={"/mars"}>
          <div className='burger-btn'>
            <Image
              className='planetImg'
              src='/mars.png'
              alt=''
              height={"30"}
              width={"30"}
            />{" "}
            <p>Марс</p>
          </div>
          </Link>
          <Link href={"/jupiter"}>
          <div className='burger-btn'>
            <Image
              className='planetImg'
              src='/jupiter.png'
              alt=''
              height={"30"}
              width={"30"}
            />
            <p>Юпитер</p>
          </div>
          </Link>
          <Link href={"/saturn"}>
          <div className='burger-btn'>
            <Image
              className='planetImg'
              src='/saturn.png'
              alt=''
              height={"30"}
              width={"30"}
            />{" "}
            <p>Сатурн</p>
          </div>
          </Link>
          <Link href={"/uranus"}>
          <div className='burger-btn'>
            <Image
              className='planetImg'
              src='/uranus.png'
              alt=''
              height={"30"}
              width={"30"}
            />{" "}
            <p>Уран</p>
          </div>
          </Link>
          <Link href={"/neptune"}>
          <div className='burger-btn'>
            <Image
              className='planetImg'
              src='/neptune.png'
              alt=''
              height={"30"}
              width={"30"}
            />
            <p>Нептун</p>
          </div>
        </Link>
          <hr />
        </div>
        <div className='solar-syst'>
          <div className='sun' />
          <div className='mercury' />
          <div className='venus' />
          <div className='earth' />
          <div className='mars' />
          <div className='jupiter' />
          <div className='saturn' />
          <div className='uranus' />
          <div className='neptune' />
          <div className='asteroids-belt' />
        </div>
      </main>
    </>
  );
}
