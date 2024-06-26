import logosi from './img/Logo.png'
import Images from './img/Group.png'
import menyusi from './img/menu.png'
export const HederQism = () =>{
    return <div className="header__blok w-[1510px] bg-white flex items-center justify-between mt-4 py-3">
        <img className='header__images ml-4 ' src={logosi} alt="img" />
        <div className='runklar__qismi w-[720px] h-9 gap-1 flex'>
            <div className=' heder__div1 w-[200px] h-[40px] rounded-l-[15px] border-solid border-2 border-grey-500 flex  items-center justify-center bg-white  '>
               <img className='header__menyu__bolimi bg-white w-5 h-5' src={menyusi} alt="img" /> 
                <select className='header__selection w-24 ml-5 text-lg'>
                    <option value="">Рукнлар</option>
                    <option value="">Аудио китоблар</option>
                    <option value="">Янги қўшилганлар</option>
                </select>
            </div>
           <label >
           <div className="heder__div2 w-[555px] h-[40px] flex items-center justify-between px-5 rounded-r-[15px] border-solid border-2">
                <input className='header__input_qismi w-[200px] h-[25px]' type="search" placeholder='Қидириш' required />
                <svg className='heder_iconca w-5 h-5' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9395 1.9314C5.98077 1.9314 1.94144 5.97072 1.94144 10.9295C1.94144 15.8882 5.98077 19.9354 10.9395 19.9354C13.0575 19.9354 15.0054 19.1931 16.545 17.9607L20.293 21.7068C20.4821 21.8881 20.7348 21.9881 20.9968 21.9855C21.2588 21.9828 21.5093 21.8776 21.6947 21.6925C21.8801 21.5073 21.9856 21.257 21.9886 20.995C21.9917 20.733 21.892 20.4802 21.711 20.2908L17.9629 16.5428C19.1963 15.0009 19.9395 13.0499 19.9395 10.9295C19.9395 5.97072 15.8982 1.9314 10.9395 1.9314ZM10.9395 3.93143C14.8173 3.93143 17.9375 7.05163 17.9375 10.9295C17.9375 14.8073 14.8173 17.9353 10.9395 17.9353C7.06165 17.9353 3.94144 14.8073 3.94144 10.9295C3.94144 7.05163 7.06165 3.93143 10.9395 3.93143Z" fill="#3F51B5"/>
</svg>

            </div>
           </label>
        </div>
        <div className=' language w-[105px] h-[48px] rounded-[14px] bg-slate-300 flex items-center justify-center ml-36 ' >
            <img src={Images} alt="img" />
        </div>
        <button className='header_button w-[151px] h-[48px] rounded-[14px] bg-blue-800 flex items-center justify-center mr-5'>
        <svg className='header__icon_img '  width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.2002C8.13401 13.2002 5 16.1252 5 19.7335V21.6002C5 22.1156 4.55228 22.5335 4 22.5335C3.44772 22.5335 3 22.1156 3 21.6002V19.7335C3 15.0943 7.02944 11.3335 12 11.3335C16.9706 11.3335 21 15.0943 21 19.7335V21.6002C21 22.1156 20.5523 22.5335 20 22.5335C19.4477 22.5335 19 22.1156 19 21.6002V19.7335C19 16.1252 15.866 13.2002 12 13.2002Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.3333C14.2091 11.3333 16 9.66186 16 7.6C16 5.53814 14.2091 3.86667 12 3.86667C9.79086 3.86667 8 5.53814 8 7.6C8 9.66186 9.79086 11.3333 12 11.3333ZM12 13.2C15.3137 13.2 18 10.6928 18 7.6C18 4.5072 15.3137 2 12 2C8.68629 2 6 4.5072 6 7.6C6 10.6928 8.68629 13.2 12 13.2Z" fill="white"/>
</svg>
<h2 className='header__text text-white ml-3'>Кириш</h2>
        </button>
    </div>
}