import Header from './Header'

export default function Layout({children}) {
    return (
        <div className="bg-gray-800 text-white"> 
            <Header/>
            {children}  
        </div>
    )
}
