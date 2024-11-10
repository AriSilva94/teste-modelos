import { Card } from "@/ui/Card";

export function DashboardStats() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Statistics</h2>
      <div className="grid gap-4 grid-cols-2">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
          <p className="text-2xl font-bold">56</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Growth</h3>
          <p className="text-2xl font-bold">+23%</p>
        </Card>
      </div>
    </div>
  );
}
