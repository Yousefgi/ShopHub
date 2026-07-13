import Button from "../ui/Button";
import Container from "../ui/Container";

function Newsletter() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white">Stay Updated</h2>

          <p className="mt-4 text-lg text-slate-300">
            Subscribe to our newsletter and be the first to know about new
            products, exclusive offers, and special discounts.
          </p>

          <form
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-5
                py-3
                text-white
                placeholder:text-slate-400
                focus:border-blue-500
                focus:outline-none
              "
            />

            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;
