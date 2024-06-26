import Img1 from './img/price.png'
import Rating from './img/rating.png'
import Frame from './img/Frame.png'
import Price1 from './img/price1.png'
import Price2 from './img/price2.png'
import Price3 from './img/price3.png'
import Price4 from './img/price4.png'
import Price5 from './img/price5.png'
import Price6 from './img/price6.png'
import Price7 from './img/price7.png'
import Price8 from './img/price8.png'
import Price9 from './img/price9.png'
export const Section = () =>{
    return <div className="hero w-[100%] ">
        <h1 className='hero-top__text  text-lg font-medium py-3 ml-5 mt-6'>Янги қўшилганлар</h1>
        <div className="hero__container w1-[100%]  flex items-center justify-center gap-20">
            <div className="hero__card w-[230px] h-[450px]  ">
                <img src={Img1} alt="img" />
                <h1 className='card__text  mt-4 font-medium'>1984</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="img" />
                    <img src={Frame} alt="" />
                </div>
            </div>

            <div className="hero__card w-[230px] h-[450px] ">
                <img src={Price1} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Rich dad poor dad</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>

            <div className="hero__card w-[230px] h-[450px]  ">
                <img src={Price2} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Код 8</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>
            <div className="hero__card w-[230px] h-[450px] ">
                <img src={Price3} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Даниел КИЗ</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>

            <div className="hero__card w-[230px] h-[450px] ">
                <img src={Price4} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Бепарволикнинг но...</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>

        </div>

        <h1 className='hero-top__text mt-10 text-lg font-medium ml-5'>Аудио китоблар</h1>
        <div className="hero__container w1-[100%]  flex items-center justify-center gap-20 mt-3">
            <div className="hero__card w-[230px] h-[450px]  ">
                <img src={Price5} alt="" />
                <h1 className='card__text  mt-4 font-medium'>1984</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>

            <div className="hero__card w-[230px] h-[450px] ">
                <img src={Price6} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Rich dad poor dad</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>

            <div className="hero__card w-[230px] h-[450px]  ">
                <img src={Price7} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Код 8</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>
            <div className="hero__card w-[230px] h-[450px] ">
                <img src={Price8} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Даниел КИЗ</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>

            <div className="hero__card w-[230px] h-[450px]">
                <img src={Price9} alt="" />
                <h1 className='card__text  mt-4 font-medium'>Бепарволикнинг но...</h1>
                <p className='card__lorem text-blue-500 mt-2'>SIYOSAT, FANTASTIKA</p>
                <div className='card_bottom flex  justify-between px-1 mt-4 '>
                    <img src={Rating} alt="" />
                    <img src={Frame} alt="" />
                </div>
            </div>

        </div>
    </div>
}