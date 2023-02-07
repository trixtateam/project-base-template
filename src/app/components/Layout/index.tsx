import { useState } from "react";
import Modal from "../Modal";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;

  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <div className="relative pt-12">
        <div className="fixed top-0 w-full p-3">
          <button
            className="w-10 h-10 rounded-xl bg-white float-right border border-black hover"
            onClick={() => setShowLoginModal(true)}
          />
        </div>
        <div className="p-5">{children}</div>
      </div>

      <Modal
        title="Login"
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      ></Modal>
    </>
  );
}
