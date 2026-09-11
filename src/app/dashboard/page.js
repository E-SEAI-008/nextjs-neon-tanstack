import { getUser } from "@/features/auth/server"

export default async function DashboardPage() {
    const user = await getUser();
    return (
    <div>
    <h2>Dashboard</h2>
    {user && (
        <div>
            <p>Name: {user.name}</p>
            <p>Emaile: {user.email}</p>
        </div>
    )}
    </div>
    )

}