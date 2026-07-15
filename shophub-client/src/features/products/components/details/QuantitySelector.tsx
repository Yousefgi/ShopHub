import Button from "../../../../components/ui/Button";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" onClick={onDecrease}>
        -
      </Button>

      <span className="w-8 text-center font-semibold">{quantity}</span>

      <Button variant="outline" onClick={onIncrease}>
        +
      </Button>
    </div>
  );
}

export default QuantitySelector;
