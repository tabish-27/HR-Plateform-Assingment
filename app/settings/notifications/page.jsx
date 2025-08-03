import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function NotificationSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage how you receive notifications.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notifications">Email Notifications</Label>
          <Switch id="email-notifications" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-notifications">Push Notifications</Label>
          <Switch id="push-notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="task-reminders">Task Reminders</Label>
          <Switch id="task-reminders" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="announcements">Company Announcements</Label>
          <Switch id="announcements" defaultChecked />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 text-white">Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
