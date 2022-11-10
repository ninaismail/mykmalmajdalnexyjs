    import {BiShoppingBag} from 'react-icons/bi'

export default function Product(props) {
    const { id, title, image, price } = props;

    const exploreLink = `/products/${id}`;  

    return (
    <div className="text-center">
    <a key={id} href={exploreLink} >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        </div>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </a>
    <button className='bg-orange-500 px-6 py-2 w-full hover:bg-orange-700 rounded-lg 
    border-orange-500 hover:border-orange-700'>
    <BiShoppingBag size="30px"color="white" className="mx-auto"/>
    </button>
    </div>
    )
  }