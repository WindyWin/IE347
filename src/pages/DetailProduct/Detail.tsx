import { useParams } from "react-router-dom";
import ProductDetail from "../../components/core/ProductDetail";
import { getProductDetail } from "../../Service/ProductService";
import Content404 from "../NotFound/Content404";
export default function Detail() {
  const slug = useParams().productName || "";

  const product = getProductDetail(slug);


  return (
    <div className="detail">
      {!!product ?
        <ProductDetail product={product} />
        : <Content404></Content404>
      }
    </div>
  );
}
