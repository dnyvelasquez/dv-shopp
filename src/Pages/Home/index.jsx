import { useContext } from "react";
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  
  const context = useContext(ShoppingCartContext); 
  
  const renderView = () => {    
    if(context.filteredItems?.length > 0) {
      return(
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item}/>
        ))
      );
      } else {
        return (
          <div>That product does not exist</div>
      )
    }
  }
  
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product" 
        className="w-60 rounded-lg border border-black sm:w-80 p-2 mb-4 focus:outline-none" 
        onChange={(event) => {context.setSearchByTitle(event.target.value)}}
      />
      <div className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
