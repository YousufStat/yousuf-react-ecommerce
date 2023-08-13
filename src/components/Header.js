
import Banner from '../img/banner.jpg'

const Header = ({categoryName}) => {
   console.log(categoryName)
  return (
    <div className='m-auto'>
      <div><img src={Banner} className="w-full h-[500px]" alt="banner"/></div>
      <div className='py-2'>
        <form className='justify-center items-center'>
           <div>
           <input className='w-[60%] bg-slate-200 h-10 m-5' type="text" id="fname" name="fname" placeholder=' Search Your Products'/>
           <button className='border p-2 hover:bg-slate-400'>Search</button>
           </div>
        </form>
        <div className='grid grid-cols-4 gap-3 py-3'>
          <button className='p-3 bg-cyan-700 hover:bg-emerald-900 text-white rounded-md'>All</button>
          <button className='p-3 bg-cyan-700 hover:bg-emerald-900 text-white rounded-md'>T-shart</button>
          <button className='p-3 bg-cyan-700 hover:bg-emerald-900 text-white rounded-md'>T-shart</button>
          <button className='p-3 bg-cyan-700 hover:bg-emerald-900 text-white rounded-md'>T-shart</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
