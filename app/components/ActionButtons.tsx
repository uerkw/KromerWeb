export default function ActionButtons() {
  return (
    <div className="flex gap-2">
      {/* Send Kromer Button */}
      <button className="btn btn-primary">Send</button>
      {/* Receive Kromer Button */}
      <button className="btn btn-secondary">Receive</button>
    </div>
  );
}