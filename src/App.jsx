import {  BsArrowUpCircle, BsWhatsapp } from "react-icons/bs";
import Card from "./components/Card";
import { useState } from "react";
import { RiRestaurant2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { MdMenuOpen } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const App = () => {

  const [isActive, setIsactive] = useState(1)
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  return (

    <div className={`h-screen w-full font-poppins  ${isVisibleMenu ? 'overflow-clip' : ''}`}>

      <div className="w-full  bg-white border-b shadow-xs h-[70px] p-5 border-neutral-200 rounded-b-sm flex items-center justify-between max-md:p-0 fixed z-50 bg-white">
        <div className="flex gap-2 max-md:pl-2">
          <RiRestaurant2Fill className="text-orange-400 size-8 max-md:size-7" />
          <h1 className="text-2xl font-semibold max-md:text-xl font-pacifico ">Délices de ma'a Thé</h1>
        </div>
        {/* bouton whatsapp flottant */}
        <div className="fixed z-50 bg-white rounded-full size-14 flex items-center justify-center shadow-sm border border-neutral-200 bottom-5 right-5 p-2"><a href="https://wa.me/237699246889?text=salut%20je%20souhaite%20avoir%20un%20devis"><BsWhatsapp className="text-green-500 size-10" /></a> </div>
        {/* menu */}
        {isVisibleMenu && <div className="w-screen absolute h-screen inset-0 z-30 bg-black/80" onClick={() => setIsVisibleMenu(false)}></div>}
        {!isVisibleMenu ? <MdMenuOpen className="size-10 cursor-pointer md:hidden max-md:pr-2" onClick={() => setIsVisibleMenu(true)} /> : <CgClose className="size-10 max-md:pr-2 cursor-pointer md:hidden" onClick={() => setIsVisibleMenu(false)} />}
        <div className={`flex gap-5  max-md:top-0 max-md:z-40 max-md:absolute  max-md:bg-white max-md:h-screen  max-md:px-4 max-md:py-8 max-md:flex-col max-md:border-r max-md:p-0 max-md:border-neutral-200 max-md:shadow-sm transition-transform duration-500 ${isVisibleMenu ? 'max-md:w-64 max-md:translate-0' : 'max-md:-translate-x-full'}`} >
          <a href="#acceuill" className={`${isActive == 1 ? 'border-b-2 border-orange-500 text-orange-500' : ''} font-semibold text-lg cursor-pointer max-md:border-b max-md:border-zinc-300 `} onClick={() => {
            setIsactive(1)
            setIsVisibleMenu(false)
          }}>Acceuil</a>
          <a href="#service" className={`${isActive == 2 ? 'border-b-2 border-orange-500 text-orange-500' : ''} font-semibold text-lg cursor-pointer max-md:border-b max-md:border-zinc-300 `} onClick={() => {
            setIsactive(2)
            setIsVisibleMenu(false)
          }}>Nos services</a>
          <a href="#galerie" className={`${isActive == 3 ? 'border-b-2 border-orange-500 text-orange-500' : ''} font-semibold text-lg cursor-pointer max-md:border-b max-md:border-zinc-300 `} onClick={() => {
            setIsactive(3)
            setIsVisibleMenu(false)
          }}>galerie</a>
          <a href="#contact" className={`${isActive == 4 ? 'border-b-2 border-orange-500 text-orange-500' : ''} font-semibold text-lg cursor-pointer max-md:border-b max-md:border-zinc-300 `} onClick={() => {
            setIsactive(4)
            setIsVisibleMenu(false)
          }}>Contact</a>
        </div>
      </div>
      <div className="w-full h-2/3 max-md:h-1/2 relative">
        <div className="bg-[url('/hero.jpg')] w-full h-full bg-cover bg-center">
        </div>
        <div className="w-full h-full z-10 absolute inset-0 bg-zinc-500 opacity-80">

        </div>
        <section className="absolute mt-10 flex flex-col  justify-center mx-2 h-full  z-20 inset-0 p-5 max-md:p-2" id="acceuill">
          <h1 className="text-white font-semibold text-5xl max-md:text-3xl font-pacifico">Les délices de ma'a Thé</h1>
          <h2 className=" text-white font-light text-2xl max-md:text-xl mt-2 text-justify">Là où la patience transforme chaque ingrédient <br className="max-md:hidden"/> en un moment de plaisir et   d'exception </h2>
          <div className="flex gap-5 mt-5">
            <button className="bg-white text-orange-500  rounded-xl hover:bg-orange-200 p-2   max-w-[150px] mt-2 cursor-pointer flex gap-2 items-center ">En Savoir plus <span><BsArrowUpCircle className="rotate-45 animate-bounce" /></span></button>
            <button className="bg-black text-white  rounded-xl hover:bg-orange-200 p-2  max-w-[150px] mt-2 cursor-pointer flex gap-2 items-center ">Contactez-nous</button>
          </div>
        </section>
        <section className="flex flex-col mt-8 items-center p-3 " id="service">
          <h1 className="text-4xl  text-center mb-5 border-b-2 pb-1 "><span className="text-orange-500 font-pacifico">Nos</span> services</h1>
          <div className="flex flex-wrap mt-2 items-center justify-center max-md:gap-5  gap-10">
            <Card linkBtn={'https://wa.me/237699246889?text=salut%20puis-je%20avoir%20une%20réservation%20pour%20un%20évènement'} className={''} title={'Service traiteur'} link={'/service.jpg'} btnText={'Reservation'} />
            <Card linkBtn={'https://wa.me/237699246889?text=salut%20je%20souhaite%20me%20faire%20livré%20un%20repas'} className={'max-md:flex-row-reverse'} title={'Livraison de repas'} link={'/Livraison.jpg'} btnText={'Commander'} />
            <Card linkBtn={'https://wa.me/237699246889?text=salut%20je%20souhaite%20avoir%20une%20reservation%20'} className={''} title={'Restaurant'} link={'/tchops.jpg'} btnText={'Reservation'} />
          </div>
        </section>
        <section className="mt-10 flex flex-col p-2 items-center justify-center  " id="galerie">
          <h1 className="text-4xl  text-center mb-5 border-b-2 pb-1  font-pacifico">Galerie</h1>
          <div className="flex flex-row flex-wrap justify-around gap-y-4">
            <img src="/koki.jpg" className="w-[180px] h-[180px] max-md:max-w-[150px] max-md:max-h-[150px] rounded-lg object-cover " />
            <img src="/ndole.jpg" className="w-[180px] h-[180px] max-md:max-w-[150px] max-md:max-h-[150px] rounded-lg object-cover " />
            <img src="/okok.jpg" className="w-[180px] h-[180px] max-md:max-w-[150px] max-md:max-h-[150px] rounded-lg object-cover  " />
            <img src="/poulet.jpg" className="w-[180px] h-[180px] max-md:max-w-[150px] max-md:max-h-[150px] rounded-lg object-cover  " />
          </div>
        </section>
        <section className="mt-10 flex flex-col p-2 items-center bg-zinc-200" id="contact">
          <h1 className="text-4xl  text-center mb-5 border-b-2 pb-1 mt-4 font-pacifico">Contactez-Nous</h1>
          <div className="flex flex-row flex-wrap gap-2">
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-lg  font-bold">Localisation</h1>
              <h1 className="text-lg text-center mb-2"> Cameroun,Yaoundé 6 ,Nsimeyong 2 , carrefour tam-tam </h1>
              <h1 className=" text-lg"><span className="font-bold">Appel : </span>+237 699 000 000</h1>
              <h1 className=" text-lg"><span className="font-bold">Whatsapp : </span>+237 699 000 000</h1>
            </div>
            <div className="flex flex-col items-center mt-1 w-full">
              <h1 className="font-bold text-lg">Suivez-nous</h1>
              <div className="flex gap-8 mb-1 mt-1">
                <FaFacebook className=" size-8 cursor-pointer text-blue-500" />
                <FaInstagram className=" size-8 cursor-pointer text-pink-500" />
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-black h-[50px] p-1 flex items-center justify-center">
          <h1 className="text-white ">Réalisé par <a className="underline" href="https://wa.me/237699246889?text=salut%20je%20souhaite%20avoir%20un%20site%20web">yann shalom</a></h1>
        </footer>
      </div>
    </div>
  );
}

export default App;