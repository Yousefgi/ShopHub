import { useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

import { useAuthStore } from "../../auth/store/auth.store";

import { profileSchema, type ProfileFormData } from "../schema/profile.schema";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EditProfileDialog({ open, onClose }: Props) {
  const user = useAuthStore((s) => s.user);
  const updateUser = useAuthStore((s) => s.updateUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (open && user) {
      reset({
        fullName: user.fullName,
        email: user.email,
      });
    }
  }, [open, user, reset]);

  if (!open) return null;

  const onSubmit = (data: ProfileFormData) => {
    if (!user) return;

    updateUser({
      ...user,
      ...data,
    });

    toast.success("Profile updated successfully.");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
        <h2 className="mb-8 text-2xl font-bold">Edit Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Full Name"
            error={errors.fullName?.message}
            {...register("fullName")}
          />

          <Input
            label="Email"
            error={errors.email?.message}
            {...register("email")}
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
