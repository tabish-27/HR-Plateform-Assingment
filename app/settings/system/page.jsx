import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function SystemSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
        <CardDescription>Configure system-wide preferences.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select defaultValue="utc-5">
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-5">Eastern Time (UTC-05:00)</SelectItem>
              <SelectItem value="utc-8">Pacific Time (UTC-08:00)</SelectItem>
              <SelectItem value="utc+0">Coordinated Universal Time (UTC+00:00)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select defaultValue="en">
            <SelectTrigger id="language">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between pt-4">
          <Label htmlFor="data-export">Enable Data Export</Label>
          <Switch id="data-export" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="audit-logs">Enable Audit Logs</Label>
          <Switch id="audit-logs" defaultChecked />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 text-white">Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
