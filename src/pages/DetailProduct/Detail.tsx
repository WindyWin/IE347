import { useParams } from "react-router-dom";
import ProductDetail from "../../components/core/ProductDetail";
import { getProductDetail } from "../../Service/ProductService";
export default function Detail() {
  const slug: string = useParams().productName ?? "";

  const product = getProductDetail(slug);


  return (
    <div className="detail">

      <ProductDetail product={product} />

    </div>
  );
}
