interface ProductGalleryProps {
  imageUrl: string | null;
  name: string;
}

function ProductGallery({ imageUrl, name }: ProductGalleryProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <img
        src={imageUrl ?? "/placeholder.jpg"}
        alt={name}
        className="aspect-square w-full rounded-2xl object-contain transition duration-300 hover:scale-105"
      />
    </div>
  );
}

export default ProductGallery;
