export default function Reviews({
  params,
}: {
  params: { productID: string; reviewID: string };
}) {
  return (
    <div>
      {" "}
      Products {params.productID} and Review is {params.reviewID}
    </div>
  );
}
