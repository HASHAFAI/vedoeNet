export default function Toast({ isTost }) {
  if (isTost) {
    return (
      <div className="toast">
        <span className="toast-message">Added successfully</span>
      </div>
    );
  } else {
    return (
      <div className="toast none">
        <span className="toast-message">Added successfully</span>
      </div>
    );
  }
}
