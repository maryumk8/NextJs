export default function Products({
  params,
}: {
  params: { productID: string };
}) {
  return <div> Products {params.productID}</div>;
}
