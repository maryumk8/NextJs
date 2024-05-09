import { notFound } from "next/navigation";

export default function Products({
  params,
}: {
  params: { productID: string };
}) {
  if (params.productID > "100") {
    notFound();
  }
  return <div> Products {params.productID}</div>;
}
