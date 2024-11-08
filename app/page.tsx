import "./styles.css";
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center min-h-screen">
      <div className="flex-1 w-[95vw] flex p-5 gap-[1vw]">
            <Main />
            <NavBar></NavBar>
        </div>
      <Footer></Footer>
      <div className="fixed right-1 bottom-1 w-20"> <Image width={100} height={100} src="/cat.gif" alt="Dancing cat. It's green for some reason."/>  </div>
    </div>
  );
}
