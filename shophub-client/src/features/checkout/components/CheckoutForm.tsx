import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

interface CheckoutFormProps {
  shippingAddress: string;
  phoneNumber: string;
  paymentMethod: string;

  onAddressChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onPaymentChange: (value: string) => void;

  onSubmit: () => void;
  isLoading: boolean;
}

function CheckoutForm({
  shippingAddress,
  phoneNumber,
  paymentMethod,
  onAddressChange,
  onPhoneChange,
  onPaymentChange,
  onSubmit,
  isLoading,
}: CheckoutFormProps) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="text-xl font-bold text-slate-900">Shipping Information</h2>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">Address</label>

          <Input
            value={shippingAddress}
            onChange={(e) => onAddressChange(e.target.value)}
            placeholder="Enter your address"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Phone Number</label>

          <Input
            value={phoneNumber}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="0599999999"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Payment Method
          </label>

          <select
            value={paymentMethod}
            onChange={(e) => onPaymentChange(e.target.value)}
            className="h-12 w-full rounded-xl border px-4"
          >
            <option value="Cash">Cash on Delivery</option>

            <option value="Card">Credit Card</option>
          </select>
        </div>

        <Button onClick={onSubmit} disabled={isLoading} className="w-full py-3">
          {isLoading ? "Processing..." : "Place Order"}
        </Button>
      </div>
    </div>
  );
}

export default CheckoutForm;
