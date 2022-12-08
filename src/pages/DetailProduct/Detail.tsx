import { useParams } from "react-router-dom";
import "../../sass/DetailProduct/Detail.scss";



export default function Detail() {
  const slug: string = useParams().productName ?? "";




  return (
    <div className="detail">

      {/* <ProductDetail product={data.getProductByName} /> */}

    </div>
  );
}
