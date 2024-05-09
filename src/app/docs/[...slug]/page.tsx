"use client";

export default function Docs({ params }: { params: { slug: string[] } }) {
  return (
    <>
      <h2>Docs</h2>
      {params.slug.map((item, index) => (
        <p>
          {item} at index {index}
        </p>
      ))}
    </>
  );
}
