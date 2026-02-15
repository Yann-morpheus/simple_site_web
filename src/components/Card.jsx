const Card = ({title,className,link,btnText,linkBtn}) => {
    return ( 
    <div className={`w-[300px] max-h-[600px] max-md:w-full border max-md:border-0 border-zinc-300 rounded-lg overflow-clip shadow-xs flex flex-col ${className} max-md:flex-row max-md:items-center max-md:gap-2`}>
        <img src={link} className="rounded-lg h-[200px] max-md:w-[200px] w-full object-cover" />
        
        <div className="p-2 flex flex-col items-center" >
            <h1 className=" text-xl text-center font-pacifico border-b pb-1">{title}</h1>
            <p className="mt-3 mb-3 text-justify line-clamp-5 max-md:hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem consequuntur nemo accusamus, excepturi unde nostrum aliquid temporibus harum porro laborum eaque earum tempore quidem doloribus. Praesentium fugiat corporis quisquam.</p>
            <a herf={linkBtn}><button className=" border rounded-lg p-2 mt-2 text-white bg-orange-500 w-full">{btnText}</button></a>
        </div>
    </div> );
}
 
export default Card;