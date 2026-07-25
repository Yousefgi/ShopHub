import { Navigate, Link } from "react-router-dom";

import Container from "../../../components/ui/Container";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ProfileInformation from "../components/ProfileInformation";
import ProfileActions from "../components/ProfileActions";
import { useAuthStore } from "../../auth/store/auth.store";
import { useMyOrders } from "../../orders/hooks/useMyOrders";
import { useCartStore } from "../../cart/store/cart.store";

import { useState } from "react";

import EditProfileDialog from "../components/EditProfileModal";
export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const { data: orders } = useMyOrders();
  const [openEdit, setOpenEdit] = useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());

  const totalSpent =
    orders?.reduce((total, order) => total + order.totalAmount, 0) ?? 0;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="py-10">
      <Container>
        <div className="mb-8">
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            ← Back Home
          </Link>
        </div>

        <h1 className="mb-8 text-center text-4xl font-bold">My Profile</h1>

        <ProfileHeader
          fullName={user.fullName}
          email={user.email}
          role={user.role}
        />
        <ProfileStats
          ordersCount={orders?.length ?? 0}

          cartItems={cartItems}

          totalSpent={totalSpent}
        />
        <ProfileInformation
          fullName={user.fullName}
          email={user.email}
          role={user.role}
        />
        <ProfileActions onLogout={logout} onEdit={() => setOpenEdit(true)} />

        <EditProfileDialog open={openEdit} onClose={() => setOpenEdit(false)} />
      </Container>
    </section>
  );
}
