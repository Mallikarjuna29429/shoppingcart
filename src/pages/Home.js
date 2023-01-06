import "./home.css";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

function Home({ search }) {
  const [APIData, setAPIData] = useState([]);
  // const [FilteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const fetchData = () => {
    return axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => setAPIData(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const obj = Object.entries(APIData);

  console.log(obj);

  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            {APIData.filter((item) => item.title.includes(`${search}`)).map(
              (product, index) => {
                return (
                  <Item
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                );
              }
            )}
          </div>
        </div>
        <div className="shopping-cart" onClick={() => navigate("/cart")}>
          <ShoppingCart id="cartIcon" />
          <p>{getTotalQuantity() || 0}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
