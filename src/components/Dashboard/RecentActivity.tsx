import { Card } from "@/ui/Card";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "New user registered",
      user: "John Doe",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Project created",
      user: "Jane Smith",
      time: "4 hours ago",
    },
    {
      id: 3,
      action: "Task completed",
      user: "Mike Johnson",
      time: "6 hours ago",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Activity</h2>
      <Card className="divide-y">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4">
            <p className="font-medium">{activity.action}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{activity.user}</span>
              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
