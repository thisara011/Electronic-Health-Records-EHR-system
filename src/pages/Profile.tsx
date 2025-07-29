
import React from "react";
import AppLayout from "@/components/AppLayout";

const Profile: React.FC = () => (
  <AppLayout>
    <section>
      <h2 className="text-2xl font-bold mb-3">My Profile</h2>
      <p className="text-muted-foreground mb-6">Manage your contact info, photo, and account details.</p>
      <div className="rounded border p-8 text-center text-gray-300">
        (Profile page coming soon Stay Tuned!)
      </div>
    </section>
  </AppLayout>
);

export default Profile;
