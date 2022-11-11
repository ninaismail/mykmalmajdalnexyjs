//import axios from '../../lib/axios';

import Head from 'next/head'
import Header from '../../components/layout/main-header'
import Footer from '../../components/layout/footer'
import ProductsHeroSecion from '../../components/products/products-hero-section'
import LangSwitch from '../../components/layout/langswitch'

import ProductsList from '../../components/products/productslist';
import ProductsFilters from '../../components/products/products-filters'
import Branches from '../../components/branches'
import ProductsCategoriesNav from '../../components/products/products-categories-nav'
const categoriesdata = [
  {
    id: 1,
    name: 'جميع المنتجات',
    href: '/allcategories',
    image: '/categories/allcategories.jpg',
  },
  {
    id: 2,
    name: 'المكسرات',
    href: '/category-nuts',
    image: '/categories/nuts.jpg',
  },
  {
    id: 3,
    name: 'قهوة',
    href: '/category-coffee',
    image: '/categories/coffee.jpg',
  },
  {
    id: 4,
    name: 'البسكويت',
    href: '/category-cookies',
    image: '/categories/cookies.jpg',
  },
  {
    id: 5,
    name: 'جندويات',
    href: '/category-jandawiyat',
    image: '/categories/coconut.jpg',
  },
  {
    id: 6,
    name: 'فواكه',
    href: '/category-fruits',
    image: '/categories/fruits.jpg',
  },
  {
    id: 7,
    name: 'شوكولاته',
    href: '/category-chocolate',
    image: '/categories/chocolate.jpg',
  },  
]
const products = [
  {
    id: 1,
    title: 'نوتيلا كم',
    href: '#',
    price: '35.00 ر.س',
    image: '/products/nutella.jpg',
    decription: 'مميزات المنتج : هذا المنتج مقاوم للتجمد والانحلال. سهل الإستخدام بفضل جودته العالية ومميزة الاستخدام العملية السهلة . المكونات : سكر- زيوت نباتية ( زيت النخيل ) – بندق – حليب كامل الدسم – كاكاو – حليب منزوع الدسم – مستحلب ( ليستين فول الصويا إي ۳۲۲ ) – نكهات مماثلة للطبيعة. تعليمات وحالات الاستخدام : يستخدم هذا المنتج في الحلويات والكاتو والشوكولا ويستخدم ك صوصات وماشابه ذلك من المنتجات كمادة حشو داخلية أو تزيين خارجي حسب الرغبة.',
    categoryid:6,
  },
  {
    id: 2,
    title: 'كريمة-الكاجو',
    href: '#',
    price: '35.00 ر.س',
    image: '/products/cashew-cream.jpg',
    description: 'مميزات المنتج : هذا المنتج مقاوم للتجمد والانحلال. سهل الإستخدام بفضل جودته العالية ومميزة الاستخدام العملية السهلة . المكونات : زيوت نباتية ( زيت النخيل ) – سكر – کاجو – حليب منزوع الدسم – حليب كامل الدسم ( ليستين فول الصويا أي ۳۲۲). تعليمات وحالات الاستخدام : يستخدم هذا المنتج في الحلويات والكاتو والشوكولا ويستخدم ك صوصات وماشابه ذلك من المنتجات كمادة حشو داخلية أو تزيين خارجي حسب الرغبة.',
    categoryid:2,
  },
  {
    id: 3,
    title: 'الشوكولاته الداكنة',
    href: '#',
    price: '31.00 ر.س',
    image: '/products/darkchocalate.jpg',
    description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .',
    categoryid:6,
  },
  {
    id: 4,
    title: 'أوريو سابوري',
    href: '#',
    price: '115.00 ر.س',
    image: '/products/oreo-cream.jpg',
    description:'مميزات المنتج : هذا المنتج مقاوم للتجمد والانحلال. سهل الإستخدام بفضل جودته العالية ومميزة الاستخدام العملية السهلة . المكونات : زيت نخيل الصويا – زبدة كاكاو – حليب – كاكاو – سكر – بسكويت الأوريو. تعليمات وحالات الاستخدام : يستخدم هذا المنتج في الحلويات والكاتو والشوكولا ويستخدم ك صوصات وماشابه ذلك من المنتجات كمادة حشو داخلية أو تزيين خارجي حسب الرغبة.',
    categoryid:4,
  },
  {
    id: 5,
    title: 'كريمة الموكا',
    href: '#',
    price: '15.00 ر.س',
    image: '/products/mocha-cream.jpg',
    description: 'مميزات المنتج : هذا المنتج مقاوم للتجمد والانحلال. سهل الإستخدام بفضل جودته العالية ومميزة الاستخدام العملية السهلة . المكونات : زيوت نباتية ( زيت النخيل ) – سكر – مسحوق مصل الحليب – حليب كامل الدسم – حبيبات القهوة المحمصة – كاكاو – حليب منزوع الدسم – مستحلب ( ليستين فول الصويا إي ۳۲۲ ) – نكهات مماثلة للطبيعية. تعليمات وحالات الاستخدام : يستخدم هذا المنتج في الحلويات والكاتو والشوكولا ويستخدم ك صوصات وماشابه ذلك من المنتجات كمادة حشو داخلية أو تزيين خارجي حسب الرغبة.',
    categoryid:3,
  },
  {
    id: 6,
    title: 'كريمة البرتقال',
    href: '#',
    price: '14.00 ر.س',
    image: '/products/orange-cream.jpg',
    description: 'مميزات المنتج : هذا المنتج مقاوم للتجمد والانحلال. سهل الإستخدام بفضل جودته العالية ومميزة الاستخدام العملية السهلة . المكونات : زيت نخيل الصويا – زبدة كاكاو – حليب – كاكاو – سكر – بودرة البرتقال – الوان ومنكهات طبيعية. تعليمات وحالات الاستخدام : يستخدم هذا المنتج في الحلويات والكاتو والشوكولا ويستخدم ك صوصات وماشابه ذلك من المنتجات كمادة حشو داخلية أو تزيين خارجي حسب الرغبة.',
    categoryid:5,
  },
  {
    id: 7,
    title: 'جوز هند ناعم',
    href: '#',
    price: '15.00 ر.س',
    image: '/products/coconut-cream.jpg',
    description: 'مميزات المنتج : هذا المنتج مقاوم للتجمد والانحلال. سهل الإستخدام بفضل جودته العالية ومميزة الاستخدام العملية السهلة. المكونات : حبيبات جوز الهند- زيوت نباتية ( زيت النخيل ) – سكر – مسحوق مصل الحليب – حليب كامل الدسم – زبدة الكاكاو – مستحلب ( ليستين فول الصويا إي ۳۲۲ ) – نكهات مماثلة للطبيعة. تعليمات وحالات الاستخدام : يستخدم هذا المنتج في الحلويات والكاتو والشوكولا ويستخدم ك صوصات وماشابه ذلك من المنتجات كمادة حشو داخلية أو تزيين خارجي حسب الرغبة.',
    categoryid:5,
  },  
  // More products...
]

export default function ProductsPage() {
    return (
      <div>
      <Head>
        <title>All Categories</title>
        <meta title="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion />
      <ProductsCategoriesNav productscategories={categoriesdata}/>
      <div className='mx-6'>
      <ProductsFilters/>
      <ProductsList products={products} />
      </div>      
      <Branches/>
      <Footer />
      </div>
    )
  }
  // export async function getStaticProps() {

  //   const response = await axios.get("http://127.0.0.1:8000/api/events");
  //   return {
  //       props: {
  //           events: response.data
  //       },
  //   }
  // }

