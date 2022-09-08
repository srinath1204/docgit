
import Image from "next/image"
export default function Industries({industries}) {
    return (
      <section class="text-gray-700 md:mx-24 my-24 border-2 ">
       <h1 class="text-xl text-gray-800 font-bold bg-white text-center not-sr-only md:sr-only">INDUSTRIES</h1>
          <div class="md:-mt-4 md:w-1/4 md:ml-96 items-center sr-only md:not-sr-only "><button class="text-2xl md:-ml-44 lg:-ml-24 xl:ml-10 2xl:ml-36 bg-white font-bold text-center">INDUSTRIES</button></div>
        <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 border-b-2 py-8">
        <div class="md:w-full md:h-full lg:p-4 xl:p-0">
        <p class="leading-relaxed text-md lg:text-center">
           "Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure"
          </p> 
          </div>
        </div>
        <div class="col-span-2">
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:ml-16">
  <div class="col-span-1 lg:col-span-2">
  <div className="flex flex-row lg:justify-center">
         <div className=" mt-10">
                <Image width="100" height="120" src="/crane.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2 ">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                      MANUFACTURING
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md text-blue-400 border-b-2 border-blue-400 text-blue-400  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
  <div class="col-span-1">
  <div className="flex flex-row">
         <div className="">
                <Image width="100" height="120" src="/shopping-bag.gif" />
            </div>
            <div className="flex flex-col p-2">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                       RETAIL
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md text-blue-400 border-b-2 border-blue-400 text-blue-400  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
  <div class="col-span-1">
  <div className="flex flex-row">
         <div className="">
                <Image width="100" height="120" src="/truck.gif" />
            </div>
            <div className="flex flex-col p-2">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                       DISTRIBUTION
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md text-blue-400 border-b-2 border-blue-400 text-blue-400  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
  <div class="col-span-1">
  <div className="flex flex-row">
         <div className="">
                <Image width="100" height="120" src="/mortarboard.gif" />
            </div>
            <div className="flex flex-col p-2 ">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                       EDUCATION
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md text-blue-400 border-b-2 border-blue-400 text-blue-400  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
  <div class="col-span-1">
  <div className="flex flex-row">
         <div className="">
                <Image width="100" height="120" src="/stethoscope.gif" />
            </div>
            <div className="flex flex-col p-2">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                      HEALTHCARE
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md text-blue-400 border-b-2 border-blue-400 text-blue-400 border-b-2 border-blue-400 font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
</div>
</div>
        </div>
       
     </section>   
    )
}