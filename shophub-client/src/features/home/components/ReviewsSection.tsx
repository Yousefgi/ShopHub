import { Star } from "lucide-react";

function ReviewsSection() {
  const reviews = [
    {
      name: "Ahmed Ali",
      role: "Customer",
      comment:
        "Great products and very fast delivery. The shopping experience was excellent.",
      rating: 5,
    },
    {
      name: "Sara Mohammed",
      role: "Customer",
      comment: "Easy to use website and amazing customer support.",
      rating: 5,
    },
    {
      name: "Omar Khaled",
      role: "Customer",
      comment: "Good prices and high quality products. Highly recommended.",
      rating: 4,
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-slate-500">
            Real feedback from ShopHub customers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex gap-1">
                {Array.from({
                  length: review.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                "{review.comment}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900">{review.name}</h3>

                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
