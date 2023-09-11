import Profile from "@/components/Profile";
import AuthGuard from "@/guards/AuthGuard";

export default function ProfilePage() {

	return (
		<AuthGuard>
			<Profile />
		</AuthGuard>
	);
}
