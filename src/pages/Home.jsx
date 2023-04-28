import { useDispatch } from "react-redux";
import { FeaturedProducts, HomeHero, Services, Contact } from "../components";
import { useGetProductsQuery } from "../features/Products/productsApi";
import { setProducts } from "../features/Products/productsSlice";
import { useEffect } from "react";


const HomePage = () => {
  
  const { data: products } = useGetProductsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [products]);

  return (
    <main>
      <HomeHero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
