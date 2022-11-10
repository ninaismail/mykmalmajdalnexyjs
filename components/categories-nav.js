import Image from 'next/image'

function CategoriesNav() {
  return (
<div dir="rtl"className="flex flex-wrap justify-center">
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
   <Image src="/1.jpg" width="258" height="255" alt="جميع المنتجات" className="rounded-full mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   جميع المنتجات
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/7.jpg" width="258" height="255" alt="المكسرات" className="rounded-full mx-auto mb-15"/>
    <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
    المكسرات
    </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/6.jpg" width="258" height="255" alt="قهوة" className="rounded-full mx-auto mb-15"/>
    <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
    قهوة
    </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/5.jpg" width="258" height="255" alt="البسكويت" className="rounded-full mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
    البسكويت
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/4.jpg" width="258" height="255" alt="جندويات" className="rounded-full mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   جندويات
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/3.jpg" width="258" height="255" alt="فواكه" className="rounded-full mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   فواكه
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/2.jpg" width="258" height="255" alt="شوكولاته" className="rounded-full mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   شوكولاته
   </h2>
  </div>  
</div>
  );
}

export default CategoriesNav;