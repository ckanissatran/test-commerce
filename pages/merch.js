import StoreCard from "../components/StoreCard";

export default function Merch() {
    
    return (<div>
        <h1 className='text-center'>MERCH</h1>
        {/* This part should absolutely be a generated piece of the site */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <StoreCard price={50} src='/merch/shirt.jpg' alt='A shirt'/>
            <StoreCard price={50} src='/merch/shoes.jpg' alt='shoes'/>
            <StoreCard price={50} src='/merch/shoes2.jpg' alt='shoes'/>
            <StoreCard price={50} src='/merch/shoes3.jpg' alt='shoes'/>
            <StoreCard price={50} src='/merch/shoes4.jpg' alt='shoes'/>
            <StoreCard price={50} src='/merch/sunglasses.jpg' alt='sunglasses'/>
            <StoreCard price={50} src='/merch/sunglasses2.jpg' alt='sunglasses'/>
            <StoreCard price={50} src='/merch/watches.jpg' alt='watches'/>
        </div>
    </div>
    )
}
