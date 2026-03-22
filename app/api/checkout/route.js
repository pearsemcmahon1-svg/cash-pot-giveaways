
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET);

export async function POST(req) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "gbp",
        product_data: { name: "Competition Entry" },
        unit_amount: 200
      },
      quantity: 1
    }],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000"
  });

  return Response.json({ url: session.url });
}
