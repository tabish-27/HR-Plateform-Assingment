"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Placeholder data for employees (same as EmployeesPage for consistency)
const employeesData = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "HR Manager",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: "3",
    name: "Peter Jones",
    email: "peter.jones@example.com",
    role: "Product Designer",
    department: "Design",
    status: "Active",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "Marketing Specialist",
    department: "Marketing",
    status: "On Leave",
  },
  {
    id: "5",
    name: "Bob White",
    email: "bob.white@example.com",
    role: "Sales Representative",
    department: "Sales",
    status: "Active",
  },
]

export default function EditEmployeePage() {
  const params = useParams()
  const router = useRouter()
  const employeeId = params.id
  const [employee, setEmployee] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    status: "",
  })

  useEffect(() => {
    // Simulate fetching employee data based on ID
    const foundEmployee = employeesData.find((emp) => emp.id === employeeId)
    if (foundEmployee) {
      setEmployee(foundEmployee)
      setFormData(foundEmployee) // Initialize form with employee data
    } else {
      // Handle case where employee is not found (e.g., redirect to 404 or employees list)
      console.error("Employee not found")
      router.push("/employees") // Redirect back to employees list
    }
  }, [employeeId, router])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Updating employee:", formData)
    // In a real application, you would send this data to your backend
    alert(`Employee ${formData.name} updated successfully! (Simulated)`)
    router.push("/employees") // Redirect back to employees list after update
  }

  if (!employee) {
    return <div className="flex items-center justify-center min-h-[60vh]">Loading employee data...</div>
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-900">Edit Employee: {employee.name}</h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Employee Details</CardTitle>
          <CardDescription>Update the information for this employee.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={formData.role} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" value={formData.department} onChange={handleChange} required />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="On Leave">On Leave</SelectItem>
                  <SelectItem value="Terminated">Terminated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CardFooter className="flex justify-end gap-2 p-0 pt-4 md:col-span-2">
              <Button variant="outline" onClick={() => router.push("/employees")}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                Save Changes
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
